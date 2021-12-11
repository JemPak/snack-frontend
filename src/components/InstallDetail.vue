<template>
        <h1 class="titulo2">RESPUESTAS A SOLICITUD</h1>
    <div class="bloque2">
        <h3>Codigo instalacion: <input disabled type="text" class="field" ></h3>
        <h3>Id de usuario: <input disabled type="text" class="field"></h3>
        <h3>Direccion: <input disabled type="text" class="field"></h3>
        <h3>Ciudad: <input disabled type="text" class="field"></h3>
        <h3>Tipo de Maquina: <input disabled type="text" class="field"></h3>
        <h3>Fecha de Respuesta: <input  type="text" class="field"></h3>
        <h3>Estado: 
            <select name="Estado" id="">
                <option>Activa</option>
                <option >Inactiva</option>
            </select>
        </h3>
        <h3>Comentario:
        <textarea class="field2" style="height:3cm"></textarea>
        </h3>
        <br>
        <br>
        <div class="botones2">  
            <button type="submit" class="enviar2" style="margin-right: 7.5cm;"> Subir documentos </button>
            <button type="submit" class="enviar2"> Enviar</button>
        </div>
    </div>
</template>

<script>
</script>

<style>

</style>
