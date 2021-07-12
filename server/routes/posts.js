import express from "express"

const router = express.Router();

import { createPost, getTimelinePost, getSinglePost, updatePost, deletePost, likeDislikePost } from "../controllers/posts.js"

router.post("/", createPost)
router.get("/feed/all", getTimelinePost)
router.get("/:id", getSinglePost)

router.put("/:id", updatePost)
router.put("/:id/like", likeDislikePost)

router.delete("/:id", deletePost)



export default router;