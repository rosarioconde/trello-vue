import { db } from './firebase'

const boardRef = db.ref('/boards')
const listRef = db.ref('/lists')
const tasksRef = db.ref('/tasks')

export default {
    // todos los paneles que haya x usuario (por ahora solo 1 unico usuario)
    getBoardsByUser(userID = 1) {
        const query = boardRef.orderByChild('owner').equalTo(userId)
        return query.once('value')
    },

    //nos va a poder permitir crear un panel
    postBoard(name) {
        const id = boardRef.push().key
        const owner = 1
        const board = { id, name, owner }

        return boardRef.child(id).set(board)
            .then(() => board)
    },
    //nos va a devolver todas listado de las tareas asociadas a ese panel
    getListsFromBoard(boardId) {
        const query = listRef.orderByChild('board').equalTo(boardId)
        return query.once('value')
    },
    //añadir una nueva lista a un panel
    postList(board, name) {
        const id = listRef.push().key
        const column = { id, name, board }

        return listRef.child(id).set(column)
            .then(() => column)
    },
    //devolvernos todas las tareas asociadas a una determinada lista
    getTasksFromList(listId) {
        const query = tasksRef.orderByChild('list').equalTo(listId)
        return query.once('value')
    },
    //añadir una nueva tarea a una lista
    postTask(list, title) {
        const id = tasksRef.push().key
        const task = { id, list, title, completed: false }

        return tasksRef.child(id).set(task)
            .then(() => task)
    },
    deleteTask(taskId) {
        return tasksRef.child(taskId).remove()
    },
    //pasar la referencia de una tarea, marcarla como completada
    completedTask(taskId) {
        const query = tasksRef.child(taskId).child('completed')
        return query.once('value')
            .then(snap => snap.val())
            .then(data => query.set(!data))
    },

}