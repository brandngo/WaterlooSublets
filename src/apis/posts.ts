import api from "./api";

const apiPosts = {
  create: (data) => api.post("/create", data),
  getAll: () => api.get("/"),
  get: (id: number) => api.get(`/${id}`),
  update: (id: number, data) => api.patch(`/update/${id}`, data),
  delete: (id: number) => api.delete(`/delete/${id}`),
};

export default apiPosts;
