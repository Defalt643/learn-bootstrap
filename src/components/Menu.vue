<template>
  <div class="app-menu min-vh-100">
    <b-img src="..\assets\Buu-logo11.png" width="80%" class="pt-2 pb-2" center></b-img>
    <b-nav vertical>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {}
</script>
<style>
.app-menu {
  background-color: gray;
  font-size: 10pt;
}
.sub-menu {
  padding-left: 10pt;
}
.nav-link {
  color: white;
  text-align: left;
}
.nav-link:hover {
  color: gold;
}
</style>
