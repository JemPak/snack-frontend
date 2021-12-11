<template>
   <div class="imagen"> 
    <img src="@/assets/frutos2.jpg">
  </div>
  <nav class="menu-navegacion">
    <h2>Productos:</h2>
    <ul>
      <li class="lista2" v-for="items in products" v-bind:key=items>
        <p>{{items}}</p>
      </li>
    </ul>
      <p>{{suma}}</p>
      <br />
      <button class="but4" v-on:click="Comprar">Completar Compra</button>
  </nav>

  <section class="gallery">
    <div class="contenedor">
      <!-- <div class="contenedor-productos"> -->
        <ul>
        <li v-for="item in getAllProducts" v-bind:key="item" class="lista">
        <div class="checklist-productos">
          <div class="producto">
            <img :src=item.url_image alt="" class="img-productos">
            <h1 class="costo-producto">${{item.price}}</h1>  
            <h1><p class="nombre">{{item.name}}</p></h1>
            <button class="but1" v-on:click="loadProducto(item.id_producto, item.name, item.price, item.url_image, item.description)">Ver </button>
            <button class="but2" v-on:click="cargar(item.price, item.name)">Añadir</button>
            <button class="but3" v-on:click="Quitar(item.price, item.name)">Quitar</button>
          </div>
        </div>
        </li>
        </ul>
      <!-- </div> -->
    </div>
  </section>
    
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "Productos",

  data: function () {
    return {
      getAllProducts:[],
      products: new Set(),
      suma:0,     
    };
  },
  
  apollo: {
    getAllProducts: {
      query: gql`
        query getAll {
            getAllProducts {
                id_producto
                name
                price
                description
                url_image
            }
        }
      `
    },
  },
  methods:{
    loadProducto: function (id,nombre,price,imagen,description) {
      localStorage.setItem("idProducto", JSON.stringify(id));
      localStorage.setItem("Nombre", JSON.stringify(nombre));
      localStorage.setItem("Precio", JSON.stringify(price));
      localStorage.setItem("Imagen", JSON.stringify(imagen));
      localStorage.setItem("Descripcion", JSON.stringify(description));
			this.$router.push({ name: "Producto"});
		},
    cargar: function(precio, nombre){
      if (localStorage.getItem("Saldo")) {
        this.suma = parseInt(localStorage.getItem("Saldo"));
      }
      if (!this.products.has(nombre)) {
        this.products.add(nombre);
        this.suma+=precio;
      }
      const x = Array.from(this.products);
      console.log(x);
      localStorage.setItem("Lista", JSON.stringify(x));
      localStorage.setItem("Saldo", JSON.stringify(this.suma));
      console.log(this.suma)
      console.log(this.products)
    },
    Quitar: function(precio, nombre){
      if (localStorage.getItem("Saldo")) {
        this.suma = parseInt(localStorage.getItem("Saldo"));
      }
      if (this.products.has(nombre)) {
        this.products.delete(nombre);
        this.suma-=precio;
      }
      const x = Array.from(this.products);
      console.log(x);
      localStorage.setItem("Lista", JSON.stringify(x));
      localStorage.setItem("Saldo", JSON.stringify(this.suma));
      console.log(this.suma)
      console.log(this.products)
    },
    Comprar: async function(){
      const saldo = parseInt(localStorage.getItem("Saldo"));
      const lista = localStorage.getItem("Lista");
      const email = localStorage.getItem("email");
      console.log(lista);
      console.log(saldo);
      console.log(email);
      if (localStorage.getItem("is_auth") == "true") {
        await this.$apollo
        .mutate({
          mutation: gql`
            mutation Mutation($order: order!) {
              createOrder(order: $order)
            }
          `,
          variables: {
            "order": {
              "userEmail": email,
              "products": lista,
              "dateCreate": "2021-12-11",
              "balanceOrder": saldo,
              "idMachine": 20
            },
          },
        })
        .then((result) => {
          alert("Orden creada sastisfactoriamente!");
        })
        .catch((error) => {
          console.log(error);
          alert("Ha ocurrido un error con su orden, intente otra vez en unos momentos, si el problema persiste consulte con un administrador" + error.message);
        });
      }else{
        alert("Inicie sesion para registrar su orden")
      }
      
    },
    cargarImagen: function(url_image) {
      this.laImagen=url_image;
    },
  }, 
  created: function(){
      this.products=localStorage.getItem("Lista") || false;
      this.suma = parseInt(localStorage.getItem("Saldo")) || 0;
      localStorage.setItem("Saldo", JSON.stringify(this.suma));
      if (this.products){
          this.products = JSON.parse(this.products);
          this.products= new Set (this.products);
          console.log(this.products+" "+typeof(this.products));

      }else{
          this.products= new Set();
      }

  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.lista{
  list-style: none;
  /* border: solid 1px red; */
  position: relative;
  left: 10%;
  margin-left: 50px;
  justify-content: space-evenly;
}
.lista2{
  list-style: none;
  position: relative;
  left: 10%;
  margin-left: 50px;
}
.imagen-inicio {
  width: 1340px;
  height: 50%;
  position: relative;
  top: 0px;
  margin-left: auto;
  margin-right: auto;
}
.imagen-inicio img {
  width: 100%;
  height: 80%;
}
.menu-navegacion {
  position: relative;
  top: 150px;
  left: -8%;
  width: 18%;
  height: 300px;
  background: transparent;
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translate(110%);
  box-shadow: 0 0 6px rgb(194, 123, 9);
}
.nombre{
  position: relative;
  height: 2%;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 3px solid rgb(194, 123, 9);
  margin-bottom: 100px;
  background-color: #f2b327;
}
.header-1 {
  text-align: center;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.contenedor {
  position: relative;
  top: 40px;
  height :10%;
  width :60%;
  left: 35%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
}
.producto {
  position: relative;
  margin: 30px auto;
  margin-top: 20px;
  width: 300px;
  height: 320px;
  background: transparent;
  text-align: start;
  line-height: 20px;
  color: black;
  border-radius: 3%;
  border: rgb(184, 122, 22) 5px solid;
}
/* rgb(194, 123, 9) */
.but1 {
  position: absolute;
  width: 20%;
  height: 11%;
  color: black;
  background-color: #f2b327;
  border-radius: 3%;
  border: none;
  cursor: pointer;
  text-align: center;
  left: 75%;
  bottom: 1%;
  font-size: 105%;
}
.but1:hover{
  background-color: #e6a720;
}
.but2 {
  position: absolute;
  width: 20%;
  font-size: 105%;
  height: 11%;
  color: black;
  background-color: #f2b327;
  border-radius: 3%;
  border: none;
  cursor: pointer;
  text-align: center;
  left: 75%;
  bottom: 14%;
}
.but2:hover{
  background-color: #e6a720;
}
.but3 {
  position: absolute;
  width: 20%;
  height: 11%;
  font-size: 105%;
  color: black;
  background-color: #f2b327;
  border-radius: 3%;
  border: none;
  cursor: pointer;
  text-align: center;
  left: 75%;
  bottom: 26%;
}
.but3:hover{
  background-color: #e6a720;
}
.img{
  max-width:95%;
  max-height:95%
}
.but4 {
  position: absolute;
  width: 35%;
  height: 15%;
  color: black;
  background-color: #f2b327;
  border-radius: 3%;
  border: none;
  cursor: pointer;
  text-align: center;
  left: 30%;
  bottom: 6%;
}
.but4:hover{
  background-color: #e6a720;
}
.costo-producto {
  margin-top: 1%;
  margin-left: 2%;
  color: black;
  justify-content: start;
  align-items: center;
}
.producto p{
  margin-top: 1%;
  margin-left: 2%;
  
  /* margin: 10px 10px; */
}
.checklist-productos {
  width: 65%;
  /* background-color: transparent; */
}
.contenedor-productos {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}
.img-productos {
  object-fit: cover;
  width: 100%;
  height:80%;
  display: block;
  margin-bottom: 15px;
  /* cursor: pointer; */
}
.image-light {
  position: fixed;
  background: rgba(94, 91, 91, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(100%);
  transition: transform 0.2s ease-in-out;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  cursor: pointer;
}
.agregar-imagen {
  object-fit: cover;
  width: 60%;
  border-radius: 10px;
  transform: scale(0);
  transition: transform 0.3s 0.2s;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f2b327;
  padding-bottom: -5px;
}
</style>