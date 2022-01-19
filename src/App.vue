<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col cols="2" class="app-menu min-vh-100"><Menu /></b-col>
        <b-col cols="10">
          <b-container>
            <b-row>
              <b-col>
                <Navbar />
              </b-col>
            </b-row>
            <b-row>
              <b-col><router-view /></b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'
export default {
  components: {
    Navbar,
    Menu
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
