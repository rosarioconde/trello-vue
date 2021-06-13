
import Vue from 'vue'
import * as types from './mutations-types'

export default{
    //fetch de los paneles creados por el usuario
    [types.FETCH_BOARDS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_BOARDS_SUCCESS](state,{boards}){
        state.fetchingData = false
        state.error = null
        state.boards= {...boards}        
    },

    [types.FETCH_BOARDS_FAILURE](state,{error}){
        state.fetchingData=false
        state.error= error
    },

    //fetch de las listas de un determinado panel

    [types.FETCH_LISTS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_LISTS_SUCCESS](state,{lists}){
        state.fetchingData = false
        state.error = null
        state.lists= {...lists}        
    },

    [types.FETCH_LISTS_FAILURE](state,{error}){
        state.fetchingData=false
        state.error= error
    },

    //fetch de las tareas correspondientes de una lista


    [types.FETCH_TASKS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_TASKS_SUCCESS](state,{tasks}){
        state.fetchingData = false
        state.error = null
        state.tasks= {...tasks}        
    },

    [types.FETCH_TASKS_FAILURE](state,{error}){
        state.fetchingData=false
        state.error= error
    },

    //crear un nuevo panel
    [types.ADD_BOARD](state,{board}){}
}