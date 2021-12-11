<template>
<!-- <center> -->
    <div class="container">
        <form class="bloque" v-on:submit.prevent="logIn">
            <h2>¡Bienvenido a SnackTime!</h2>
            <h3>Ingrese su e-mail y Contraseña</h3>
            <h4 color=gray>E-mail</h4>
            <input v-model="credentials.email" type="text" class=cuadro>
            <h4 color=gray>Contraseña</h4>
            <input v-model="credentials.password" type="password" class=cuadro>
            <button v-on:click="logIn()" class="ingreso"> Ingresar </button>
            <button v-on:click="createAccount()" class="crear"> Crear cuenta </button>
            <u class="ayuda">¿Olvidaste tu contraseña?</u>
            <p><u class=ayuda> Necesito ayuda para ingresar a mi cuenta </u></p>
        </form>
    </div>
<!-- </center> -->
</template>
<script>

import gql from "graphql-tag";

export default {
    name: "logIn",

    data: function() {
        return{
            credentials: {
                email: "",
                password: "",
            }
        }
    },
    methods: {
        logIn: async function(){
            console.log(this.credentials);
            await this.$apollo
            .mutate({
                mutation:gql`
                    mutation LogIn($credentials: CredentialsInput!) {
                        logIn(credentials: $credentials) {
                            refresh
                            access
                        }
                    }
                `,
                variables:{
                    credentials: this.credentials,
                },
            })
            .then( (result) => {
                console.log("aquí");
                let dataLogIn = {
                    email: this.credentials.email,
                    token_access: result.data.logIn.access,
                    token_refresh: result.data.logIn.refresh,
                };
                console.log(dataLogIn);
                this.$emit("completedLogIn", dataLogIn);
            })
            .catch((error) =>{
                console.log(JSON.stringify(error, null, 1));
                console.log(error);
                alert("credenciales incorrectas!")
            });

        },
    },

}
</script>


<style>
.container{
  position: absolute;
  width: 800px;
  top: 66%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 1px solid #8C8C8C; */
  justify-content: center;
}


.bloque{ 
    width: 500px;
    height: 600px;
    border: 5px;
    border-color:rgb(194, 123, 9);
    border-width: 0.8mm;
    border-style: solid;
    margin-top: 0.5cm;
    position: relative;
    margin-left: 15%;
    margin-right: 10%;
    margin-bottom: 0.5cm;
    border-style: groove;
    border-radius: 10px;
    box-shadow:inset;
    justify-content: center;
    align-items:center;

}
.bloque input{
    font-size: 15px;
}
.bloque h2{
    text-align: center;
    margin: 1cm;
}

.bloque h3{
    text-align: center;
    margin: 1cm;
}

.bloque h4{
    text-align:left;
    margin: 1cm;
    color:silver;
}

.cuadro{
    position: relative;
    width: 400px;
    height: 50px;
    padding: 0;
    font-size: 10px;
    color: black;
    outline: none;
    border: 1px solid rgb(238, 170, 62);
    border-radius: 10px;   
    margin-left: 1cm;
    margin-top: -0.5cm;
    text-align: center;
}

.ingreso{
    
    color: white;
    text-align: center;
    width: 400px;
    height: 50px;
    margin-left: 1cm;
    margin-top: 0.7cm;
    background-color:  #f2b327;
    border-color:  rgb(238, 170, 62);
    border-radius: 10px; 
    font-weight: bold;
}

.ingreso:hover{
    cursor: pointer;
    background-color:  rgb(238, 170, 62);
}

.crear{
    color: white;
    text-align: center;
    width: 400px;
    height: 50px;
    margin-left: 1cm;
    margin-top: 0.5cm;
    background-color:  #f2b327;
    border-color:  rgb(238, 170, 62);
    border-radius: 10px; 
    font-weight: bold;
}

.crear:hover{
    cursor: pointer;
    background-color: rgb(238, 170, 62);
}
.ayuda{    
    border: none;
    color: #f2b327;
    text-align: center;
    width: 400px;
    /* height: 100000px; */
    position: relative;
    top: 10px;
    margin-left: 1cm;
    margin-top: 3cm;
}


</style>