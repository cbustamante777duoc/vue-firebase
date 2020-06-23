import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[]
  },
  mutations: {
    setTareas(state,payload){
      state.tareas = payload
    }
  },
  actions: {
    getTareas({commit}){
      const tareas = []
      //funcion que recibe el nombre de la coleccion 
      db.collection('tareas').get()
      // si la respuesta es buena
        .then(res =>{
          // recorre la colecion de objetos
          res.forEach(item =>{
            /*console.log(`la id es ${item.id}`)
            console.log(item.data())*/
            let tarea = item.data()
            tarea.id = item.id
            tareas.push(tarea)
          })
          //metodos que van a hacer ocupados en mutaciones
          commit('setTareas',tareas)

        })

    }
  },
  modules: {
  }
})
