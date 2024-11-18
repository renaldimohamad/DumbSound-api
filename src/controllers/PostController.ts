import * as postServices from "../services/PostServices";
import { Request, Response } from "express";

export const findAll =(req: Request, res: Response) => {
    const posts =  postServices.findAll();
    res.json(posts);
}

export const findById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = postServices.findById(id);
    res.json(post);
}

export const create = (req: Request, res: Response) => {
    const post = req.body;
    const newPost = postServices.create(post);
    res.json(newPost);
}

export const update = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = req.body;
    const updatedPost = postServices.update(id, post);
    res.json(updatedPost);
}

export const remove = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const deletedPost = postServices.remove(id);
    res.json(deletedPost);
}