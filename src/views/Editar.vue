<template>
    <div>
        <h1>Editar</h1>
        {{tarea.id}} - {{tarea.nombre}}
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data() {
        return {
            // igualos la varible de la ruta editar con la variable local (id)
            id: this.$route.params.id
        }
    },
    created() {
        // uso del getTarea que tiene un paramentro idtarea que 
        //es igual al id de la ruta (idtarea = id)
        this.getTarea(this.id)
        
    },
    methods: {
        //llama al metodo getTarea
        ...mapActions(['getTarea'])
    },
    computed: {
        ...mapState(['tarea'])
    },
}
</script>