<template>
  <h1 class="titulo">SOLICITUDES DE INSTALACION</h1>
  <div class="bloque1">
    <nav>
      <h2>BUSQUEDA</h2>
      <div class="buscar1">
        <input
          type="text"
          placeholder="Buscar"
          required
          class="fas fa-search icon"
        >
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
        <tr
          v-for="install in getInstallUnaccepted"
          :key="getInstallUnaccepted.installation_id"
        >
          <td>{{ install.installation_id }}</td>
          <td>{{ install.user_id }}</td>
          <td>{{ install.address }}</td>
          <td>{{ install.city }}</td>
          <td>{{ type_machine.otro}}</td>
          <td>{{ install.date_create }}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Installation_Admin",
  data: function() {
      return{
        type_machine: {
            otro: "Maquina chics",
            "1": "Maquina grande",
            "2": "Maquina otra",
            "3": "Maquina dif",
        }
      }

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
