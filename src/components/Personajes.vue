<template>
    <div>
        <h1>Personajes de la serie</h1>
        <router-link class="btn btn-info" :to="'/detalle/' + this.idruta">
            Volver 
        </router-link>
         <table v-if="personajes.length > 0" class="table table-striped text-center">
            <thead class="thead-dark">
                <th>Nombre</th>
                <th>Imagen</th>
            </thead>
            <tbody>
                <tr v-for="(personaje,index) in personajes" :key="index">
                    <td> {{personaje.nombre}}</td>
                    <td> <img :src="personaje.imagen" style="width:150px;"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceSeries from './../servicios/ServiceSeries';

const service = new ServiceSeries();
export default {
    name:"Personajes",
    data(){
        return{
            personajes:[],
            idruta:0
        }
    },methods:{
        cargarPersonajes(){
            this.id = this.$route.params.idserie;
            service.getPersonajes(this.id).then(result=>{
                this.personajes = result;
            });
        }
    },mounted(){
        this.idruta = this.$route.params.idserie;
        this.cargarPersonajes();
    }
}
</script>