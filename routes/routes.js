import Express from "express";
const router = Express.Router();
import { getAll, insert, update, deleteTodo,getById } from "../controllers/todoController.js";
router.route("/").get(getAll).post(insert);
router.route("/:id").get(getById).patch(update).delete(deleteTodo);
export default router;
