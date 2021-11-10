<template>
    <div>
        <h1 style="color:blue">Nuevo Personaje</h1>
        <div style="width:500px; margin:0 auto;">
            <form method="POST" v-on:submit.prevent="insertarPersonaje()">
                <div class="form-group">
                    <label> Nombre:</label>
                    <input type="text" class="form-control" v-model="personaje.nombre"/>
                </div>
                <div class="form-group">
                    <label>Imagen:</label>
                    <input type="text" class="form-control" v-model="personaje.imagen"/>
                </div>
                <div class="form-group">
                    <select v-model="personaje.idSerie">
                        <option v-for="(serie,index) in series" 
                        class="form-control"
                        :key="index" 
                        :value="serie.idSerie">
                            {{serie.nombre}}
                        </option>
                    </select>
                </div>
                <button class="brtn btn-success">
                    Insertar Personaje
                </button>
            </form>
        </div>

    </div>
</template>

<script>
import ServiceSeries from './../servicios/ServiceSeries';

const service = new ServiceSeries();
export default {
    name:"NuevoPersonaje",
    data(){
        return{
            series:[],
            personaje:{
                nombre:"",
                imagen:"",
                idSerie:0
            },
            seleccionadoSerie:null
        }
    },mounted(){
        this.cargarSeries();
    },methods:{
        cargarSeries(){
            service.getSeries().then(result=>{
                this.series=result;
            })
        }, insertarPersonaje(){
            this.personaje.idSerie = parseInt(this.personaje.idSerie);
            service.insertarPersonaje(this.personaje).then(result=>{
                console.log(result);
                console.log("insertado");
                this.$router.push("/personajes/" + this.personaje.idSerie);
            });
        }
    }
}
</script>