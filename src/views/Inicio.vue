<template>
    <div>
       <h1>componente de inicio</h1> 
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'Inicio',
   /* created() {
        // uso del metodo
        this.getTareas()
        
    },*/
    mounted() {
         this.getTareas()
        
    },
    methods: {
        ...mapActions(['getTareas'])
    },
}
</script>