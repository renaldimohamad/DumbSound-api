import { PostModels } from "../models/PostModels";

const posts: PostModels[] = [];

export const findAll = () => {
   return posts;
};

export const findById = (id: number) => {
   return posts[0];
};

export const create = (post: PostModels) => {
   posts.push(post);

   return post;
};

export const update = (id: number, post: PostModels) => {
   posts[id] = post;
   return post;
};

export const remove = (id: number) => {

   posts.splice(id, 1);

   return "deleted";
};
