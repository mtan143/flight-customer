import axiosClient from "./axiosClient";

const flight = {
  searchFlight(searchItem) {
    const url = "/api/customers/flights/search";
    return axiosClient.post(url, { searchItem });
  },
  getAll() {
    const url = "/api/customers/flights";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/products`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default flight;
