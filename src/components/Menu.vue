<template>
    <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div class="container-fluid">
            <img src="./../assets/images/logo.png" style="width:100px"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" >Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nuevopersonaje" class="nav-link" >Nuevo Personaje</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/modificarpersonaje" class="nav-link" >Modificar personajes</router-link>
                </li>
                <li class="nav-item">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Series</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown03">
                    <li v-for="(serie, index) in series" :key="index">
                          <router-link :to="'/detalle/' + serie.idSerie" 
                          class="dropdown-item">
                                {{serie.nombre}}
                          </router-link>
                    </li>
                    </ul> 
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServiceSeries from './../servicios/ServiceSeries';

const service = new ServiceSeries();

export default {
    name:"Menu",
    data(){
        return{
            series:[],
        }
    },methods:{
        cargarSeries(){
            service.getSeries().then(result=>{
                this.series=result;
            });
        },
    },mounted(){
        this.cargarSeries();
    }

}
</script>