<template>
  <h1 class="titulo">INFORMACION GENERAL DEL USUARIO</h1>
    <div class="botones">  
    <button type="submit" class="enviar" style="margin-right: 7.5cm;"> Mis maquinas </button>
    <button type="submit" class="enviar" style="margin-right: 7.5cm;"> Mis ordenes </button>
    <button type="submit" class="enviar"> Modificar datos </button>
    </div>
    <div class="info-user">
        <h2 class=inf>INFORMACION GENERAL DEL USUARIO</h2>
        <br>
        <table>
            <tr>
                <td>
                    <h3>Nombre: <p class="field"> {{userDetailById.name}} </p></h3>
                    <h3>NIT: <p class="field"> {{userDetailById.nit}} </p></h3>
                    <h3>Correo: <p class="field"> {{userDetailById.email}} </p></h3>
                 </td>
                <td>
                    <h3>Ciudad: <input  type="text" :placeholder="accountByUserId.city" class="field"></h3>
                    <h3>Telefono: <input  type="text" :placeholder="accountByUserId.phone" class="field"></h3>
                    <h3>Edad: <input  type="text" :placeholder="accountByUserId.ages" class="field"></h3> 
                </td>
             </tr>
        </table>
    </div>
  
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "App",
  data: function() {
      return {
          user: {
              email: localStorage.getItem("email"),
              ages: null,
              phone: null,
              city: null
          },
          accountUpdateFields: {},
          userDetailById: {},
          accountByUserId: {},
          
      }
  },
  methods: {
      accountUpdateFields: async function(){
          this.$apollo.mutate({
              mutation: gql`
              mutation SignUpUser($user: AccountUpdateFields!) {
                accountUpdateFields(user: $user) {
                    id_account
                    id_client
                    city
                    ages
                    phone
                    balance
                    register_date
                }
            }
              `,
              variables: {
                  user: this.user
              }
          });

      }
  },
  apollo: {
      userDetailById: {
          query: gql`
            query Query($userId: Int!) {
                userDetailById(userId: $userId) {
                    id_client
                    name
                    email
                    nit
                    is_admin
                }
            }
          `,
          variables() {
              return {
                userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,

              }
          },
      },
      accountByUserId: {
        query: gql`
        query Query($userEmail: String!) {
            accountByUserId(userEmail: $userEmail) {
                id_account
                id_client
                city
                phone
                ages
                balance
                register_date
            }
        }
        `,
        variables() {
            return {
                userEmail: this.user.email,
            }
        }
      },
  },
}
</script>

<style>
.info-user{ 
    width: 1000px;
    height: 500px;
    left: 100px;
    border-color:rgb(194, 123, 9) ;
    border-width: 0.5mm;
    border-style: solid;
    margin-top: 0.5cm;
    margin-left: 5.0cm;
    margin-bottom: 0.5cm;
    border-style: groove;
    border-radius: 10px;
    box-shadow:inset
}

.info-user h2{
    text-align: center;
    margin: 1cm;
}

.info-user h3{
    text-align: center;
    margin: 1cm;
}

.info-user h4{
    text-align:left;
    margin: 1cm;
    color:silver;
}
.titulo{
    text-align: center;
    margin: 30px;
}

.botones{
    margin-left: 2cm;
}
.field{
    margin-bottom: 15px;
    width: 400px;
    border: solid 1px #f2b327;
    padding: 10px;
}

.field:focus{
    border-color: #f2b327;
}
</style>
