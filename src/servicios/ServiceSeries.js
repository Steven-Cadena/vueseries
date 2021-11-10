import Global from './../components/Global';
import axios from 'axios';


export default class ServiceSeries{
    getSeries(){
        return new Promise(function(resolve){
            var request = "/api/series";
            var url = Global.urlseries + request;
            axios.get(url).then(res=>{
                var series = res.data;
                resolve(series);
            });
        });
    }

    getPersonajesTodos(){
        return new Promise(function(resolve){
            var request = "/api/personajes";
            var url = Global.urlseries + request;
            axios.get(url).then(res=>{
                var personajes = res.data;
                resolve(personajes);
            });
        });
    }

    getDetalle(id){
        return new Promise(function(resolve){
            var request = "/api/series/" + id;
            var url = Global.urlseries + request;
            axios.get(url).then(res=>{
                var detalle = res.data;
                resolve(detalle);
                console.log(res.data);
            })
        });
    }

    getPersonajes(id){
        return new Promise(function(resolve){
            var request = "/api/series/personajesserie/" + id;
            var url = Global.urlseries + request;
            axios.get(url).then(res=>{
                var personajes = res.data;
                resolve(personajes);
            });
        });
    }

    insertarPersonaje(personaje){
        return new Promise(function(resolve){
            var request = "/api/personajes";
            var url = Global.urlseries + request;
            axios.post(url,personaje).then(res=>{
                resolve(res)
            })
        });
    }

    modificarPersonaje(idserie,idpersonaje){
        return new Promise(function(resolve){
            var request = "/api/personajes/" + idpersonaje+ "/" + idserie;
            var url = Global.urlseries + request;
            axios.put(url).then(res=>{
                resolve(res);
            });
        });

    }
}