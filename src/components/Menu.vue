<template>
  <div class="app-menu min-vh-100">
    <b-img
      src="../assets/buu.png"
      width="100%"
      class="pt-2 pb-2"
      center
    ></b-img>
    <b-nav vertical>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item @click="showFormInput = !showFormInput">
        Form Input
        <b-icon
          :icon="showFormInput ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput1"
        >Form Input 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput2"
        >Form Input 2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput3"
        >Form Input 3</b-nav-item
      >

      <b-nav-item @click="showForm = !showForm">
        Form
        <b-icon
          :icon="showForm ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showForm" to="./form1"
        >Form1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form2"
        >Form2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form3"
        >Form3</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form4"
        >Form4</b-nav-item
      >
      <b-nav-item @click="showCrudExample = !showCrudExample">
        CRUD Exmple
        <b-icon
          :icon="showCrudExample ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showCrudExample" to="./datatable1"
        >Data table 1</b-nav-item
      >
    </b-nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showFormInput: false,
      showForm: false,
      showCrudExample: false
    }
  }
}
</script>
<style>
.app-menu {
  background-color: gray;
  font-size: 12pt;
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
