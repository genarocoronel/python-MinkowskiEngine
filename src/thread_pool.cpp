#include "thread_pool.hpp"
#include "instantiation.hpp"
#include "region_iter.hpp"

template <uint8_t D, typename Itype>
Triplets KernelMapFunctor<D, Itype>::
operator()(const Coord<D, int> out_coord, const Arr<D, int> &in_tensor_strides,
           const Arr<D, int> &kernel_size, const Arr<D, int> &dilations,
           const int region_type, const Itype *offsets_data,
           const int offsets_size, const int out_coord_index,
           const _CoordsHashMap<D, Itype> &in_coords_hashmap) {
  Triplets triplet;
  auto kernel_region =
      Region<D, Itype>(out_coord, in_tensor_strides, kernel_size, dilations,
                             region_type, offsets_data, offsets_size);
  uint32_t kernel_ind = 0;
  for (auto point : kernel_region) {
    auto in_coord_iter = in_coords_hashmap.find(point);
    if (in_coord_iter != in_coords_hashmap.end()) {
      triplet.push_back({kernel_ind, in_coord_iter->second, out_coord_index});
    }
    kernel_ind++;
  }
  return triplet;
}

// the constructor just launches some amount of workers
template <uint8_t D, typename Itype>
inline CoordsThreadPool<D, Itype>::CoordsThreadPool(size_t nthreads_)
    : nthreads(nthreads_), stop(false) {
  for (size_t i = 0; i < nthreads; ++i)
    workers.emplace_back([this] {
      for (;;) {
        std::function<void()> task;

        {
          std::unique_lock<std::mutex> lock(this->queue_mutex);
          this->condition.wait(
              lock, [this] { return this->stop || !this->tasks.empty(); });
          if (this->stop && this->tasks.empty())
            return;
          task = std::move(this->tasks.front());
          this->tasks.pop();
        }

        task();
      }
    });
}

// add new work item to the pool
template <uint8_t D, typename Itype>
std::future<Triplets> CoordsThreadPool<D, Itype>::enqueue(
    KernelMapFunctor<D, Itype> &f, const Coord<D, int> out_coord,
    const Arr<D, int> &in_tensor_strides, const Arr<D, int> &kernel_size,
    const Arr<D, int> &dilations, const int region_type,
    const Itype *offsets_data, const int offsets_size,
    const int out_coord_index,
    const _CoordsHashMap<D, Itype> &in_coords_hashmap) {

  auto task = std::make_shared<std::packaged_task<Triplets()>>(std::bind(
      &KernelMapFunctor<D, Itype>::operator(), &f, out_coord,
      std::ref(in_tensor_strides), std::ref(kernel_size), std::ref(dilations),
      region_type, offsets_data, offsets_size, out_coord_index,
      std::ref(in_coords_hashmap)));

  std::future<Triplets> res = task->get_future();
  // (*task)(); // For debugging
  {
    std::unique_lock<std::mutex> lock(queue_mutex);

    // don't allow enqueueing after stopping the pool
    if (stop)
      throw std::runtime_error("enqueue on stopped CoordsThreadPool");

    tasks.emplace([task]() { (*task)(); });
  }
  condition.notify_one();
  return res;
}

// the destructor joins all threads
template <uint8_t D, typename Itype>
inline CoordsThreadPool<D, Itype>::~CoordsThreadPool() {
  {
    std::unique_lock<std::mutex> lock(queue_mutex);
    stop = true;
  }
  condition.notify_all();
  for (std::thread &worker : workers)
    worker.join();
}

INSTANTIATE_CLASS_DIM_ITYPE(KernelMapFunctor, int32_t);
INSTANTIATE_CLASS_DIM_ITYPE(CoordsThreadPool, int32_t);
