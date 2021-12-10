<template>
    <h1 class="titulo2">RESPUESTAS A SOLICITUD</h1>
    <div class="bloque2">
        <h3>Codigo Solicitud: <input disabled type="text" class="field" ></h3>
        <h3>Fecha de Solicitud: <input disabled type="text" class="field"></h3>
        <h3>Fecha de Respuestas: <input  type="text" class="field"></h3>
        <h3>Tipo de solicitud: <input disabled type="text" class="field"></h3>
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
        <div class="botones2">  
            <button type="submit" class="enviar2" style="margin-right: 7.5cm;"> Subir documentos </button>
            <button type="submit" class="enviar2"> Enviar</button>
        </div>
    </div>
</template>

<script>

</script>

<style>

.titulo2{
    text-align: center;
    margin: 30px;
}

.bloque2{
    padding-right: 2cm;
    padding-left: 2cm;

}

.field2{
    margin-bottom: 15px;
    width: 100%;
    border: solid 1px #ccc;
    padding: 10px;
    height: 6px;
}

.botones2{
    margin-left: 8cm;
    margin-bottom: 1cm;
}

.enviar2{
    margin-left: 5cm;
    margin: 0.5cm;
    font-size: 15px;
    height: auto;
    width: auto;
    border: none;
    color: black;
    background-color: #f2b327;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3);
    padding: 0.2cm;
}

.enviar2:hover{
    background-color: #e6a720;
}

</style>