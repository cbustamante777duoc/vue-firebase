import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // arreglo vacio el cual va a ser llenado con los datos de la base de datos
    tareas:[],
    // objeto que tiene los valores de la base de datos
    tarea: {nombre:'',id:''}
  },
  mutations: {
    //metodo declaros en el commit
    setTareas(state,payload){
      // variable que va a llenar el arreglo de tareas
      state.tareas = payload
    },
    //metodo que guarda un objeto de tarea
    setTarea(state, payload){
      state.tarea = payload

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
    },
    getTarea({commit},idTarea){
      //vamos a acceder al documento con el id especifica
      db.collection('tareas').doc(idTarea).get()
         .then(doc =>{
           /*console.log(doc.id)
           console.log(doc.data())*/
           let tarea = doc.data()
           //igualamos los variable local con el objeto de la base de datos
           tarea.id = doc.id
           commit('setTarea',tarea)
         })
    }
  },
  modules: {
  }
})
