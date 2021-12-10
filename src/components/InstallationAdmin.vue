<template>
    <h1 class="titulo">SOLICITUDES DE INSTALACION </h1>
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
                <th>ID SOLICITUD</th>
                <th>ID USUARIO</th>
                <th>DIRECCION</th>
                <th>CIUDAD</th>
                <th>TIPO DE MAQUINA</th>
                <th>FECHA DE CREACION</th>
            </tr>
            <tr v-for="install in getInstallUnaccepted" :key="getInstallUnaccepted.installation_id">
                <td  v-on:click="ir_install" class="link">{{install.installation_id}}</td>
                <td>{{install.installation_id}}</td>
                <td>{{install.user_id}}</td>
                <td>{{install.address}}</td>
                <td>{{install.city}}</td>
                <td>{{install.machine_type}}</td>
                <td>{{install.date_create}}</td>
            </tr>
        </thead>
        </table>
    </div> 
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "App",
  data: function() {

  },
  methods: {
      ir_install: function (){
          this.$router.push({name: "InstallD"});
      },        
  },

  apollo:{
      getInstallUnaccepted: {
        query: gql`
            query GetInstallUnaccepted {
                getInstallUnaccepted {
                    installation_id
                    user_id
                    address
                    city
                    machine_type
                    date_create
                }
            }
        `
    }
  },
};
</script>

<style>
.link{
    cursor: pointer;
    
}
.link:hover{
    text-decoration: underline;
}
</style>