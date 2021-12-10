<template>
    <h1 class="titulo">PRODUCTOS</h1>
    <div class="bloque1">
        <nav class="search">
            <h2>BUSQUEDA</h2>
            <div class="buscar1">
                <input type="text" placeholder="Buscar" required class="fas fa-search icon">
            </div>  
        </nav>
    </div>
    <div class="datagrid">
        <table>
        <thead>
            <tr>
                <th>ID PRODUCTO</th>
                <th>NOMBRE</th>
                <th>DESCRIPCION</th>
                <th>PRECIO</th>
                <th>ELIMINAR</th>
            </tr>
            <tr v-for="product in  getAllProducts" :key="getAllProducts.id_producto">
                <td>{{product.id_producto}}</td>
                <td>{{product.name}}</td>
                <td>{{product.description}}</td>
                <td>{{product.price}}</td>
            </tr>
        </thead>
        <tfoot>
            <button class="tabla" v-on:click="crearProducto">AÑADIR PRODUCTO</button>
        </tfoot>
        </table>
    </div> 
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Productos",

  data: function() {
      return {
          
        }
    },

  methods: {
      crearProducto: function(){
          this.$router.push({name: "CreateProduct"});
      },
    DeleteProducts: async function(){
        await this.$apollo
            .mutate({
                mutation: gql`
                    mutation DeleteProduct($productId: Int!) {
                        deleteProduct(productId: $productId)
                    }  
                `,
                variables:{
                    productId: this.id_producto,
                },
            })
            .then((result) => {
            alert("Borrado exitoso");
            })
            .catch ((error) => {
                alert("Ha ocurrido algo inesperado, por favor intente nuevamente mas tarde");
                console.log(JSON.stringify(error, null, 2));
            });
            this.$apollo.queries.getAllProducts.refetch();
    },

  },

  apollo:{
    getAllProducts: {
        query: gql`
            query GetAllProducts {
                getAllProducts {
                    id_producto
                    name
                    description
                    price
                }
            } 
        `
    }
  },  
};
</script>

<style>
body{
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.titulo{
    text-align: center;
    margin: 30px;
}
.bloque1{ 
    float: left;
    width: 150px;
    padding: 0.5cm;
    border-color:gray ;
    border-width: 0.5mm;
    border-style: solid;
    margin: 1cm;
    text-align: justify;
    block-size: 8.6cm;
    margin-top: 0cm;
}
li{
    display: inline-block;
    position: relative;
    align-items: center;
    right: 30px;
    list-style: none;
    padding-left: 8px;
    
}


td,th{
    text-align: center;
    text-transform: uppercase;
}

a{
    
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    transition: all 0.5s;
}

a:hover{
    padding: 10px 2px;
    background-color: white;
    color: rgb(238, 170, 62);
    border-radius: 12px;
    
}

.datagrid table { 
    border-collapse: collapse; 
    text-align: left; 
    width: 100%; 
} 

.datagrid {
    font: normal 12px/150% Arial, Helvetica, sans-serif; 
    background: #fff; 
    overflow: hidden; 
    border: 1px solid #8C8C8C; 
    -webkit-border-radius: 3px; 
    -moz-border-radius: 3px; border-radius: 3px;
    margin: 30px;
}

.datagrid table td, .datagrid table th { 
    padding: 3px 10px; 
}

.datagrid table thead th {
    background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #8C8C8C), color-stop(1, #7D7D7D) );
    background:-moz-linear-gradient( center top, #8C8C8C 5%, #7D7D7D 100% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8C8C8C', endColorstr='#7D7D7D');
    background-color:#8C8C8C; 
    color:#FFFFFF; 
    font-size: 15px; 
    font-weight: bold; 
    border-left: 1px solid #A3A3A3; 
} 

.datagrid table thead th:first-child { 
    border: none; 
}

.datagrid table tbody td { 
    color: #7D7D7D; 
    border-left: 1px solid #DBDBDB;
    font-size: 12px;
    font-weight: normal;
}

.datagrid table tbody .alt td { 
    background: #EBEBEB; 
    color: #7D7D7D; 
}

.datagrid table tbody td:first-child { 
    border-left: none; 
}

.datagrid table tbody tr:last-child td { 
    border-bottom: none; 
}

.datagrid table tfoot td div { 
    border-top: 1px solid #8C8C8C;
    background: #EBEBEB;
} 

.datagrid table tfoot td { 
    padding: 0; 
    font-size: 12px; 
} 

.datagrid table tfoot td div{ 
    padding: 2px; 
}

.datagrid table tfoot td ul {
    margin: 0;
    padding:0;
    list-style: none; 
    text-align: right; 
}

.datagrid table tfoot  li { 
    display: inline; 
}

.datagrid table tfoot li a { 
    text-decoration: none;
    display: inline-block;  
    padding: 2px 8px; 
    margin: 1px;
    color: #F5F5F5;
    border: 1px solid #8C8C8C;
    -webkit-border-radius: 3px; 
    -moz-border-radius: 3px; 
    border-radius: 3px; 
    background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #8C8C8C), color-stop(1, #7D7D7D) );
    background:-moz-linear-gradient( center top, #8C8C8C 5%, #7D7D7D 100% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8C8C8C', endColorstr='#7D7D7D');
    background-color:#8C8C8C;
}

.datagrid table tfoot ul.active, .datagrid table tfoot ul a:hover {
    text-decoration: none;
    border-color: #7D7D7D; 
    color: #F5F5F5; 
    background: none; 
    background-color:#8C8C8C;
}

.tabla{
    color: #fff;
    background-color: #8C8C8C;
    font-size: 12px;
    border-width: 0px;
    /* background: transparent; */
    /* border-radius: 5px; */
    cursor: pointer;
}
</style>