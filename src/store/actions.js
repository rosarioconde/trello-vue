import * as types from './mutations-types'
import API from '@/api'

export default {
    //fetch via ajax de los paneles del usuario
    fetchBoards({ commit }, { user }) {
        commit(types.FETCH_BOARDS_REQUEST)

        API.getBoardsByUser(user)
            .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() }))
            .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
    },

    //fetch via ajax de las listas asociadas a un panel

    fetchLists({ commit }, { board }) {
        commit(types.FETCH_LISTS_REQUEST)

        API.getListsFromBoard()
            .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
            .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
    },
    //fetch via ajax de las tareas de una lista

    fetchTasks({ commit }, { list }) {
        commit(types.FETCH_TASKS_REQUEST)

        API.getTasksFromList(list)
            .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
            .catch(error => commit(types.FETCH_TASKS_FAILURE, { error }))
    },

    //añadir  un nurvo panel
    addBoard({ commit }, { name }) {
        API.postBoard(name)
            .then(board => commit(types.ADD_BOARD, { board }))
    },

    addColumn({ commit }, { board, name }) {
        API.postList(board, name)
            .then((column) => commit(types.ADD_COLUMN, { column }))
    },

    addTask({ commit }, { list, title }) {
        API.postTask(list, title)
            .then((task) => commit(types.ADD_TASK, { task }))
    },

    deleteTask() {
        API.deleteTask(taskId)
            .then(() => (types.DELETE_TASK), { taskId })
    },

    markAsCompleted() {
        API.completeTask(task.id)
            .then(() => commit(types.MARK_AS_COMPLETED, { task }))
    }
}