import {Router} from "express";
import * as Controllers from "./../controllers/auth.controller";

const router = new Router();
router.route("/login").post(Controllers.LoginController);

export default router;