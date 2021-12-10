<template>
    <div class="bloque">
        <h2>¡Bienvenido a SnackTime!</h2>
        <h3>Ingrese su e-mail o usuario</h3>
        <h4 color=gray>E-mail o Usuario</h4>
        <input type="text" class=cuadro>
        <button class=ingreso> Ingresar </button>
        <button class=crear> Crear cuenta </button>
        <button class=ayuda> Necesito ayuda para ingresar a mi cuenta </button>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style>


.bloque{ 
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
    position: absolute;
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
    margin-top: 1.5cm;
    background-color:  rgb(238, 170, 62);
    border-color:  rgb(238, 170, 62);
    border-radius: 10px; 
    font-weight: bold;
}

.crear{
    color: rgb(238, 170, 62);
    text-align: center;
    width: 400px;
    height: 50px;
    margin-left: 1cm;
    margin-top: 0.5 cm;
    background-color: white;
    border: none;
    text-align: center;
    font-weight: bold;

}

.ayuda{
    border: none;
    color: rgb(238, 170, 62);
    text-align: center;
    width: 400px;
    height: 10px;
    margin-left: 1cm;
    background-color: white;
    margin-top: 1.8cm;
}

</style>