import { Router } from "express";
import { createToDo,UpdateToDo,deleteToDo,getAllToDo ,getTodoById} from "../controller/todo";


const router = Router()

router.post('/',createToDo)
router.get('/',getAllToDo)
router.get('/:id', getTodoById)
router.put('/:id',UpdateToDo)
router.delete('/:id',deleteToDo)


export default router