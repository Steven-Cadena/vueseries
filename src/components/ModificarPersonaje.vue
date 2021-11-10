<template>
    <div>
        <h1 style="color:blue">Personajes y series</h1>
        <div style="width:500px; margin:0 auto;">
            <form method="POST" v-on:submit.prevent="modificarPersonaje()">
                <div class="form-group">
                    <select v-model="selectSerie">
                        <option v-for="(serie,index) in series" 
                        class="form-control"
                        :key="index" 
                        :value="serie.idSerie">
                            {{serie.nombre}}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <select v-model="selectPersonaje">
                        <option v-for="(personaje,index) in personajes" 
                        class="form-control"
                        :key="index" 
                        :value="personaje.idPersonaje">
                            {{personaje.nombre}}
                        </option>
                    </select>
                </div>
                <button class="brtn btn-info">
                    Guardar Cambios
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ServiceSeries from './../servicios/ServiceSeries';

const service = new ServiceSeries();

export default {
    name:"ModificarPersonaje",
    data(){
        return{
            series:[],
            personajes:[],
            selectSerie:0,
            selectPersonaje:0
        }
    },methods:{
        cargarSeries(){
            service.getSeries().then(result=>{
                this.series = result;
            });
        },cargarPersonajes(){
            service.getPersonajesTodos().then(result=>{
                this.personajes = result;
            });
        },modificarPersonaje(){
            this.selectSerie = parseInt(this.selectSerie);
            this.selectPersonaje = parseInt(this.selectPersonaje);
            service.modificarPersonaje(this.selectSerie,this.selectPersonaje).then(result=>{
                console.log("Modificado");
                console.log(result);
                this.$router.push("/personajes/" + this.selectSerie);
            });
        }
    },mounted(){
        this.cargarSeries();
        this.cargarPersonajes();
    }
}
</script>