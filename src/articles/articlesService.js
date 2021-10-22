import http from "../http";

class ArticlesService {
  getAll() {
    return http.get("/articles");
  }

  get(id) {
    return http.get(`/articles/${id}`);
  }

  create(data) {
    return http.post("/articles", data);
  }

  update(id, data) {
    return http.put(`/articles/${id}`, data);
  }

  delete(id) {
    return http.delete(`/articles/${id}`);
  }
}

export default new ArticlesService();
