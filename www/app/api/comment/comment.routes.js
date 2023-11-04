import appRouter from "../../site/appRouter.js";
import { verifyToken } from "../auth/auth.controller.js";
import { addcomment } from  "./comment.controller.js"

console.log( "added Comments")
appRouter.addPostController("/v1/comment/add", verifyToken, addcomment);
