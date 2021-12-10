<template>
   <header>
        <div class="icon1">
            <label for="icon1" class="fas fa-bars"></label>
        </div>
        <img src="@/assets/SnackLogo.png" alt="" class="logo">
        <div class="buscar">
            <input type="text" placeholder="Buscar" required>
            <div class="but">
                <i class="fas fa-search icon"></i>
            </div>
        </div>
        <nav class="nav">
            <button v-if="!is_admin" v-on:click="Home" class="boton">Nosotros</button>
            <button v-if="!is_admin" v-on:click="loadProductos" class="boton">Productos</button>
            <button v-if="!is_admin" v-on:click="LogIn" class="boton">Iniciar Sesión</button>
            <button v-if="is_admin" v-on:click="ProductsAdmin" class="boton">Productos</button>
            <button v-if="is_admin" v-on:click="ContactAdmin" class="boton">Contacto</button>
            <button v-if="is_admin" v-on:click="InstallationAdmin" class="boton">Instalaciones</button>
        </nav>
    </header>


    <input type="checkbox" id="icon1">
    <div class="container-menu">
    <div class="cont-menu">
      <nav>
            <a v-if="is_auth" v-on:click="Account">Mi Cuenta</a>
            <a v-if="is_auth" v-on:click="Solicitud">Solicitudes</a>
            <a v-if="is_auth" v-on:click="Home" >Nosotros</a>
            <a v-if="is_auth" v-on:click="loadProductos" >Productos</a>
            <a v-if="is_auth" v-on:click="CloseSesion" >Cerrar Sesión</a>
            <a v-if="!is_auth" v-on:click="LogIn" >Iniciar Sesión</a>
            <a v-if="is_admin" v-on:click="ProductsAdmin"  >Ad_Productos</a>
            <a v-if="is_admin" v-on:click="ContactAdmin" >Sol_Contacto</a>
            <a v-if="is_admin" v-on:click="InstallationAdmin">Sol_Instalaciones</a>
            </nav>
          <label for="icon1" class="fas fa-times-circle"></label>         
        </div>
    </div>

    <!-- <footer>
        <img src="@/assets/SnackLogo.png" alt="" class="logo">
    </footer> -->
  <div>
    <router-view></router-view>
  </div>      
</template>

<script>
export default {
  name: "App",
  data: function() {
      return {
          is_admin: false,
          is_auth: true
      }
  },
  methods: {
    loadProductos: function () {
    console.log("antes de router");
        this.$router.push({ name: "Productos" });
    },
    Home: function(){
      this.$router.push({ name: "Home" });
    }, 
    LogIn: function(){
      this.$router.push({ name: "logIn" });
    }, 
    CloseSesion: function(){
        
    },
    Account: function(){
        this.$router.push({ name: "Account" });
    },
    Contacto: function(){
        this.$router.push({ name: "Contacto" });
    },
    ir_Instalacion: function(){
        this.$router.push({ name: "Instalacion" });
    },

    ProductsAdmin: function(){
      this.$router.push({ name: "ProductsAd" });
    }, 

    ContactAdmin: function(){
        this.$router.push({ name: "ContactAd" });
    },
    InstallationAdmin: function(){
        this.$router.push({ name: "InstallationAd" });
    }
    
  },
  created: function(){
    this.$router.push({ name: "Home" });
  }
};
</script>

<style>
body{
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
header{
    position: static;
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid rgb(194, 123, 9);
    background-color: #f2b327;
}
.nav{
    position: relative;
    width: 430px;
    height: 50px;
    left: 100px;;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* border: solid red; */
}

.fa-search{
    position: absolute;
    width: 150px;
    height: 30px;
    padding: 0;
    font-size: 10px;
    color: black;
    outline: none;
    border: 1px solid silver;
    border-radius: 30px;   
    margin: 10px 0px;
    text-align: center;
}


.boton{
    position: relative;
    top: 8px;
    padding: 0px 10px;
    width: 120px;
    border: 0ch;
    background-color: transparent;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    transition: all 0.5s;
    cursor: pointer;
    /* border: solid red; */
}
.boton:hover{
    padding: 10px 15px;
    background-color: white;
    color: #f2b327;
    border-radius: 12px;
   
}
.logo{
    position: relative;
    left: -27%;
    margin-left: 40px;
    width: 120px;
    height: 50px;
    cursor: pointer;
    background-color:red;
}
.buscar{
    position: absolute;
    padding: 5px;
 
}
.buscar input{
    width: 0px;
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    color: black;
    outline: none;
    border: 1px solid silver;
    border-radius: 30px;
    transition: all 0.6s;
    
}
.but{
    position: absolute;
    top: 0;
    right: 0;
    background: rgb(194, 123, 9);
    width: 55px;
    height: 55px;
    line-height: 55px; 
    text-align: center;
    color: black;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    
}
.buscar:hover input{
    width: 240px;
    
}
.buscar input:focus{
    width: 240px;
}
.icon1{
    font-size: 45px;
    cursor: pointer;
    color: black;
    /* border: 1px solid black; */
    position: relative;
    left: -8%;
}


/*Menú Lateral*/
#icon1{
    display:none;
}
.container-menu{
    position:absolute;
    z-index: 9999;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 500ms ease;   
    opacity: 0;
    visibility: hidden; 
}
#icon1:checked ~ .container-menu{
    opacity:1;
    visibility: visible;
}

.cont-menu{
    z-index: 9999;
    width: 100%;
    max-width: 250px;
    background: rgb(238, 170, 62);
    height: 100vh;
    position: relative;
    transition: all 500ms ease;
    transform:translateX(-100%);     
}
#icon1:checked ~ .container-menu .cont-menu{
    opacity:1;
    visibility: visible;
    transform:translateX(0%); 
}


.cont-menu nav{
    transform: translateY(15%); 
}
.cont-menu nav a{
    display: block;
    text-decoration: none;
    padding: 20px;
    color: black;
    border-left: 5px solid transparent;
    transition: all 400ms ease;  
}
.cont-menu nav a:hover{
    border-left: 5px solid #c7c7c7;
    background: white;
}

.cont-menu label{
    position: absolute;
    right: 5px;
    top: 10px;
    color: #fff;
    cursor:pointer;
    font-size: 18px;    
}

footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2b327;
}
</style>