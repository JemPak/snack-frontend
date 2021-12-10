<template>
  <div class="imagen"> 
    <img src="@/assets/frutos2.jpg">
  </div>
  <div class="introduccion">
    <h2>
      Con el creciente aumento de la obesidad en Colombia, nos hemos vistos en la tarea de diseñar un plan de manejo integral en donde las personas tengan acceso a información de interes sobre los beneficios que los superalimentos como los frutos secos pueden brindarle a nuestra salud.
    </h2>
  </div>
  <div class="texto">
    <h2  align="center" >¿ Quienes  Somos ?</h2>  
    <h2  align="center">Nuestra Oferta</h2>
    <h2  align="center">Beneficios</h2>
  </div>
  <div class="cuadros">
    <div class="somos" align="center">
      <h3>
        Somos una empresa 100% Colombiana, sólida en el sector de los alimentos que es un puente entre el comprador y el productor de una variedad de frutos secos, brindando una buena solucion mas natural a los snack de los colombianos.
      </h3>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="oferta" align="center">
      <h3>
        Brindamos una experiencia de snack saludables, en nuestras maquinas dispensadoras encontraras gran variedad de frutos secos, que podras  adquirir de acuerdo a tu cantidad deseadas.
      </h3>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="beneficios" align="center">
      <h3>
        Los frutos secos, aparte de ser sabrosos, disminuyen el riesgo cardiovascular, son ricos en proteínas, fibra, minerales y poseen notables virtudes antioxidantes.
      </h3>
    </div> 
  </div>
<br>
</template>

<script>
  export default{
    name: 'Home',
    data: function(){},
    methods:{},
    created: function(){
        console.log("hola");
    }
  }
</script>

<style>
  body{
    background-color: rgb(255,246,219);
  } 
  .imagen{
    width: 1340px;
    height: 300px;
    position: relative;
    top: 0px;
    margin-left: auto;
    margin-right: auto;
    /* border: solid red; */
  }
  .imagen img{
    width: 1340px;
    height: 300px;
  }
  .introduccion{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1cm 2cm;
    text-align: center;
    text-justify: auto;
    line-height: 1cm;
    margin: 2.5cm 0cm 0cm;
  }
  .texto{
    padding: 0cm 4cm;
    color: darkred;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0.3cm;
  }
  .texto h2{
    padding-bottom: 10px;;
    border-bottom: 2px solid aqua;
  }
  .cuadros{
    padding: 0cm 2cm;
    display: flex;
    justify-content:space-around;
    align-content: center;
  }
  .somos {
    padding: 0.5cm;
    border-color: black ;
    border-width: 0.5mm;
    border-style: solid;
  }
  .oferta{
    padding: 0.5cm;
    border-color: black ;
    border-width: 0.5mm;
    border-style: solid;
  }
  .beneficios{
    padding: 0.5cm;
    border-color: black ;
    border-width: 0.5mm;
    border-style: solid;
  }
  
</style>