<template>
<div class="contenedor2">
    <div>
        <img :src=imagen alt="imagen del producto">
    </div>
    <div class="name">
        <p>{{name}}</p>
        <div class="description">
            <p>{{description}}</p>
            <br />
            <p>Precio:${{precio}}</p>
            <br />
            <button class="but10" v-on:click="cargar()">Agregar al carrito</button>
        </div>
    </div>
</div>

</template>


<script>

import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
export default {
    name: "producto",

    data: function(){
        return {
            //suma:localStorage.getItem("Saldo"),
            //products:localStorage.getItem('Lista'),
            id: localStorage.getItem('idProducto'),
            name: localStorage.getItem('Nombre').slice(1,-1),
            precio: localStorage.getItem('Precio'),
            imagen: localStorage.getItem('Imagen'),
            description: localStorage.getItem('Descripcion').slice(1,-1),
        }
    },
     methods:{
        cargar: function(){
            

            /*if (this.products.has(nombre)) {
                this.products.add(nombre);
                this.suma+=precio;
            }
            localStorage.setItem("Lista", JSON.stringify(products));
            localStorage.setItem("Saldo", JSON.stringify(suma));
            console.log(this.suma)
            console.log(this.products)*/
        }
    },
    
}
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.contenedor2{
  position: relative;
  top: 0%;
  height :auto;
  width :95%;
  left: 0%;
  right: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* border: solid red; */
}
.name {
    position: relative;
    width: 20%;
    left: 0%;
}
.description {
    font-size: auto;
    position: relative;
    margin: 30px auto;
    margin-top: 20px;
    width: 120%;
    height: 320px;
    background: transparent;
    text-align: start;
    line-height: 20px;
    color: black;
    border-radius: 3%;
    border: rgb(36, 35, 35) 3px solid;
}
.but10 {
  position: absolute;
  width: 35%;
  height: 15%;
  color: black;
  background-color: #f2b327;
  border-radius: 3%;
  border: none;
  cursor: pointer;
  text-align: center;
  left: 35%;
  bottom: 6%;
  font-size: 105%;
}
.but10:hover{
  background-color: #e6a720;
}
</style>