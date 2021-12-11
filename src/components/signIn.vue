<template>
    <h1 class="titulo"> </h1>
    <div><img src="@/assets/imagen1.jpg" alt="" class="imagen1"></div>
    <div class="items">
        <form v-on:submit.prevent="createUser()">
        
            <p>Nombre</p>
            <input v-model="userInput.name" type="text" class="field"> 

            <p>NIT</p>
            <input v-model="userInput.nit" type="number" class="field">

            <p>E-mail</p>
            <input v-model="userInput.email" type="email" class="field">

            <p>Password</p>
            <input v-model="userInput.password" type="text" class="field">

            <p>Ciudad</p> 
            <input v-model="userInput.city" type="text" class="field"> 

            <p>Edad</p>
            <input v-model="userInput.ages" type="number" class="field">
            <br>

            <p>Telefono</p>
            <input v-model="userInput.phone" type="number" class="field">
            <br>
            <br>

            <button type="submit" class="enviar"> Crear Cuenta </button>

        </form>    
    </div>
</template>

<script>

import gql from "graphql-tag";


export default {
    name: "singIn",
    data: function() {
        return {
            userInput: {
                email: null,
                name: null,
                password: null,
                nit: null,
                city: null,
                ages: null,
                phone: null
            }
        }
    },
    methods: {
        createUser: async function(){
            this.userInput.nit = parseInt(this.userInput.nit);
            this.userInput.ages = parseInt(this.userInput.ages);
            this.userInput.phone = parseInt(this.userInput.phone);
            await this.$apollo.mutate({
                mutation: gql`
                    mutation SignUpUser($userInput: SignUpInput) {
                        signUpUser(userInput: $userInput) {
                            refresh
                            access
                        }
                    }
                `,
                variables: {
                    userInput: this.userInput,
                }
            })
            .then((result) => {
                let dataLogIn = {
                    email: this.userInput.email,
                    token_access: result.data.signUpUser.access,
                    token_refresh: result.data.signUpUser.refresh,
                };
                alert("cuenta creada exitosamente")
                this.$emit("completedLogIn", dataLogIn);
            }).catch((error) => {
                console.log(error);
                alert("credenciales invalidas");
            });
        }
    },
};
</script>



<style>
.titulo{
    text-align: center;
    margin: 30px;
}

.imagen1{
    z-index: -1;
    position: relative;
    left: 5cm;
    padding: 0px;
    width: 12cm;
    height: 18cm;
}

.items{
    margin-top: -8cm;
    position: absolute;
    left: 25cm;
    transform: translate(-50%, -50%);
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

}

.form{
    font-size: 10px;
    padding: 0px;
    width: 500px;
    float: left;
    margin-left: 80px;
    margin-top: 0px;
    /* border: solid 2px red; */    
}
.form form{
    position: relative;
    top: 0px;
    /* border: solid red; */
}

.form h1{
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 90px;
}

.enviar{
    margin-top: 10px;
    margin-left: 80px;
    font-size: 15px;
    height: 40px;
    width: 100px;
    border: none;
    color: black;
    background-color: #f2b327;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}

.enviar:hover{
    background-color: #e6a720;
}

input, textarea{
    outline: none;
    border: 0px;
}

.field{
    margin-bottom: 15px;
    width: 400px;
    border: solid 1px #ccc;
    padding: 10px;
}

.field:focus{
    border-color: #f2b327;
}

</style>