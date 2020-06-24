<template>
    <div>
       <h1>componente de inicio</h1> 
       <router-link to="/agregar">
           <button>Agregar</button>
       </router-link>
       
       <ul>
         <li v-for="(item, index) in tareas" :key="index">
              {{item.nombre}} - {{item.id}}
             <!--action que va llevar al componente editar-->
              <!--el id es el nombre de la variable que se uso en la ruta-->
             <router-link :to="{name:'Editar', params:{id: item.id}}">
                 <button>Editar</button>
             </router-link>

                <button @click="eliminarTarea(item.id)">Eliminar</button>
         </li>
        </ul>
    </div>
    
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'Inicio',
   created() {
        // al momento de inicio se llena con los valores de la base de datos
        this.getTareas()
        
    },
    methods: {
        ...mapActions(['getTareas','eliminarTarea'])
    },
    computed: {
        ...mapState(['tareas'])
    },
}
</script>