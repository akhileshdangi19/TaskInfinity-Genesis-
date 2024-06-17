import express from "express";

const router = express.Router();

// Import the user controllers
import { loginUser } from "../controllers/login.js";
import { registerUser } from "../controllers/register.js";
import { isTokenValid } from "../controllers/isTokenValid.js";
import { userProfile } from "../controllers/profile.js";
import { changePassword } from "../controllers/change-password.js";
import { deleteUser } from "../controllers/delete.js";
import { authorizedRoutes } from "../auth/auth.js";
import {Userdetails} from "../controllers/Userdetails.js";
import { createReview, updateReview, deleteReview, getAllReviews } from '../controllers/reviewsdetails.js';
// User login end points
router.get("/login");
router.post("/login", loginUser);
router.get("/Userdetails",Userdetails)
// User register end points
router.get("/register");
router.post("/register", registerUser);

// User token validation end point
router.post("/is-token-valid", authorizedRoutes, isTokenValid);

// User profile end point
router.get("/profile", authorizedRoutes, userProfile);

// User change password end point
router.post("/change-password", authorizedRoutes, changePassword);

// User delete account end point
router.delete("/delete-account/:id", authorizedRoutes, deleteUser);


router.post("/reviews", createReview);
router.put('/reviews/:id', authorizedRoutes, updateReview);
router.delete('/reviews/:id', authorizedRoutes, deleteReview);
router.get('/reviews', getAllReviews);
export default router;
