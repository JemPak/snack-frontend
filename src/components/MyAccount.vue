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
                    <h3>Nombre: <input  type="text" class="field"></h3>
                    <h3>NIT: <input  type="text" class="field"></h3>
                    <h3>Correo: <input  type="text" class="field"></h3>
                 </td>
                <td>
                    <h3>Ciudad: <input  type="text" class="field"></h3>
                    <h3>Telefono: <input  type="text" class="field"></h3>
                    <h3>Edad: <input  type="text" class="field"></h3> 
                </td>
             </tr>
        </table>
    </div>
  
</template>

<script>
export default {
  name: "App",
  data: function() {
      return {
          tel: "numero",
          
      }
  },
}
</script>

<style>
.info-user{ 
    width: 500px;
    height: 500px;
    border-color:whitesmoke ;
    border-width: 0.5mm;
    border-style: solid;
    margin-top: 0.5cm;
    margin-left: 11.5cm;
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
