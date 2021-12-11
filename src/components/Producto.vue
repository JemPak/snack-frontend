<template>
<div class="contenedor2">
    <div class="imagenProducto">
        <img :src=imagen class="imgProducto">
    </div>
    <div class="name">
        <p><h1> {{name}} </h1></p>
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
            products: new Set(),
            suma:0,
            costo:0,
            //suma:localStorage.getItem("Saldo"),
            //products:localStorage.getItem('Lista'),
            id: localStorage.getItem('idProducto'),
            name: localStorage.getItem('Nombre').slice(1,-1),
            precio: parseInt(localStorage.getItem('Precio')),
            imagen: localStorage.getItem('Imagen').slice(1,-1),
            description: localStorage.getItem('Descripcion').slice(1,-1),
            
        }
    },
     methods:{
        
        cargar: function(){
            if (localStorage.getItem("Saldo")!=false) {
                this.suma = parseInt(localStorage.getItem("Saldo"));
            }else{
                this.suma = 0;
            }
            if (!this.products.has(this.name)) {
                this.products.add(this.name);

                this.suma+=this.precio;
            }else {
                alert("El producto "+this.name+" ya esta en el carrito!");
            }
            const x = Array.from(this.products);
            console.log(x);
            localStorage.setItem("Lista", JSON.stringify(x));
            localStorage.setItem("Saldo", JSON.stringify(this.suma));
            console.log(this.suma)
            console.log(this.products)
            
        }
    },
    created: function(){
        this.suma = parseInt(localStorage.getItem("Saldo"));
        console.log(this.suma+" "+typeof(this.suma));
        if(localStorage.getItem("Lista")){
            this.products = localStorage.getItem("Lista");
            console.log(this.products+" "+typeof(this.products));
            this.products = JSON.parse(this.products);
            this.products= new Set (this.products);
        }else{
            this.products = new Set ();
            console.log(this.products+" "+typeof(this.products));
        }
  }
    
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
    margin-top: 2%;
  position: relative;
  top: 50%;
  height :10%;
  width :95%;
  left: 3%;
  right: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
 border: solid rgb(7, 6, 6);
 border-radius: 5px;
}
.imagenProducto{
    width: 50%;
    box-shadow: 0 0 6px rgb(156, 101, 12);
}
.imgProducto{
    width:100%;
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