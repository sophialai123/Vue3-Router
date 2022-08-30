<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- one way link is use the path -->
    <router-link to="/about">About</router-link> |
    <!-- also can use v bind to link the router page -->
    <router-link :to="{name:'jobs'}">Jobs</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="goBack">Go back</button>
  <button @click="goForward">Go forward</button>
  <router-view/>
</template>



<script>
export default {

  methods:{
    //push {object} a new router 
    redirect(){
      //redirect to the home router
      this.$router.push({name:"home"})

    },
    goBack(){
      //go one level back the history
      this.$router.go(-1)

    },
    goForward(){
       //go one level up forward the router
      this.$router.go(1)
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size:28px;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button{
  padding: 15px;
  margin: 0 10px;
  font-size: 22px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
}
</style>
