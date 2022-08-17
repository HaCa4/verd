import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const endPoints = {
  getPostList: (data: string) => `/posts?${data}`,
  getPostById: (id?: string) => `/posts/${id}`,
  addNewPost: (): string => "/posts",
  deletePost: (id?: string | undefined) => `/posts/${id}`,
  editPost: (id?: string | undefined) => `/posts/${id}`,
};
