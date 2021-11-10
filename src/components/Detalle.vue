<template>
    <div>
        <h1>Detalle de las series</h1>
        <div style="width:800px; margin:0 auto;">
            <img :src="detalle.imagen" style="width:300px;"/>
            <h1>{{detalle.nombre}}</h1>
            <h1>IMBD: {{detalle.puntuacion}}</h1>
            <router-link class="btn btn-success"
            :to="'/personajes/' + detalle.idSerie ">
                Personajes
            </router-link>
        </div>
    </div>
</template>

<script>
import ServiceSeries from './../servicios/ServiceSeries';

const service = new ServiceSeries();

export default {
    name:"Detalle",
    data(){
        return{
            detalle:null,
        }
    },methods:{
        cargarDetalle(){
            this.id = this.$route.params.idserie;
            service.getDetalle(this.id).then(result=>{
                this.detalle=result;
                console.log(this.detalle);
            });
        },
    },mounted(){
        this.cargarDetalle();
    },watch:{
        '$route.params.idserie'(nextprop, prevprop){
            if(nextprop != prevprop){
                this.cargarDetalle();
            }
        }
    }
}
</script>