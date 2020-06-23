<template>
    <div>
       <h1>componente de inicio</h1> 
       <ul>
         <li v-for="(item, index) in tareas" :key="index">
             {{item.nombre}} - {{item.id}}
             <!--action que va llevar al componente editar-->
              <!--el id es el nombre de la variable que se uso en la ruta-->
             <router-link :to="{name:'Editar', params:{id: item.id}}">
                 <button>Editar</button>
             </router-link>
             

         </li>
        </ul>
    </div>
    
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'Inicio',
   created() {
        // uso del metodo
        this.getTareas()
        
    },
    methods: {
        ...mapActions(['getTareas'])
    },
    computed: {
        ...mapState(['tareas'])
    },
}
</script>