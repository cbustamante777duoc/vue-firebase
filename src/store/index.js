import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getTareas({commit}){
      //funcion que recibe el nombre de la coleccion 
      db.collection('tareas').get()
      // si la respuesta es buena
        .then(res =>{
          // recorre la colecion de objetos
          res.forEach(item =>{
            console.log(`la id es ${item.id}`)
            console.log(item.data())
          })

        })

    }
  },
  modules: {
  }
})
