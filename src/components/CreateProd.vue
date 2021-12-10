<template>
<div class="contenedorprin">
    <div class="add">
        <h1>Agregar Productos</h1>
        <form v-on:submit.prevent="createProduct">
            <input type="text" v-model="CreateProducts.name" placeholder="Nombre">
            <br>
            <input type="number" v-model="CreateProducts.cantidad" placeholder="Cantidad">
            <br>
            <input type="number" v-model="CreateProducts.price" placeholder="Precio">
            <br>
            <input type="text" v-model="CreateProducts.description" placeholder="Descripcion">
            <br>
            <input type="text" v-model="CreateProducts.url_image" placeholder="Url">
            <br>
            <br>
            <button type="submit" v-on:click="CreateProduct">Agregar</button>
            <br>
            <button v-on:click="back"> Volver a Productos</button>
        </form>
    </div>
</div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: "crearsaProductos",
    
    data: function() {
        return {
            CreateProducts:{
                "name": "",
                "cantidad": "",
                "price": "",
                "description": "",
                "url_image": "",
            },

        }
    },

    methods: {

        back: function(){
            this.$router.push({name: "ProductsAd"});
        },

        CreateProduct: async function() {
        await this.$apollo
            .mutate({
                mutation:gql`
                    mutation Mutation($product: product!) {
                        createProduct(product: $product) {
                            name
                            cantidad
                            price
                            description
                            url_image
                        }
                    }
                `,
                variables:{
                    product: this.CreateProducts,
                },
            })
            .then((result) => {
            alert("Creacion exitosa");
            })
            .catch ((error) => {
                console.log(JSON.stringify(error, null, 2));
            });
        },

    },

    created(){
        console.log("error");
        this.CreateProduct();
    }

};
</script>

<style>

button{
    cursor: pointer;
}
.contenedorprin{
    display: flex;
    justify-content: center;
}

.add{   
    margin-top: 20px;
    height: 300px;
    width: 250px;
    border: solid;
    text-align: center;
}

</style>