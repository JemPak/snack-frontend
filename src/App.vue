<template>
   <header>
        <img src="@/assets/settings.svg" alt="" class="menu">
        <img src="@/assets/SnackLogo.png" alt="" class="logo">
        <div class="buscar">
            <input type="text" placeholder="Buscar" required>
            <div class="but">
                <i class="fas fa-search icon"></i>
            </div>
        </div>
        <nav class="nav">
            <button v-if= "!is_admin" v-on:click="Home" class="boton">Nosotros</button>
            <button v-if= "!is_admin" v-on:click="loadProductos" class="boton">Productos</button>
            <button v-if= "!is_admin" v-on:click="Login" class="boton">Iniciar Sesión</button>
            <button v-if= "!is_admin" v-on:click="Products" class="boton">Mi Cuenta</button>
            <button v-if= "!is_admin" v-on:click="ProductsAdmin" class="boton" >Ad_Productos</button>
            <button v-if= "!is_admin" v-on:click="ContactAdmin" class="boton">Sol_Contacto</button>
            <button v-if= "!is_admin" v-on:click="InstallationAdmin" class="boton">Sol_Instalaciones</button>
        </nav>
    </header>
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
      is_admin: true;
  },
  methods: {
      loadProductos: function () {
			this.$router.push({ name: "Productos" });
		},
    Home: function(){
      this.$router.push({ name: "Home" });
      }, 
    Contacto: function(){
        this.$router.push({ name: "Contacto" });
    },
    ir_Instalacion: function(){
        this.$router.push({ name: "Instalacion" });
    },
    Producto: function(){
        this.$router.push({ name: "Producto" });
    },

    ProductsAdmin: function(){
      this.$router.push({ name: "ProductsAd" });
    }, 

    ContactAdmin: function(){
        this.$router.push({ name: "ContactAd" });
    },
    InstallationAdmin: function(){
        this.$router.push({ name: "InstallationAd" });
    },
    
    
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
    left: 170px;;
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
    margin-left: 40px;
    width: 120px;
    height: 50px;
    cursor: pointer;
    /* background-color:red; */
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
}
.menu {
    position: relative;
    width: 50px;
    height:50px;
    margin-left: -180px;
    /* background-color:red; */
}
footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2b327;
}
</style>