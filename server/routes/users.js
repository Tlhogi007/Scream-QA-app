import express from "express";

const router = express.Router();

import { getUser, updateUser, deleteUser, followUser, unfollowUser } from "../controllers/users.js"

router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.put("/:id/follow", followUser)
router.put("/:id/unfollow", unfollowUser)

export default router;