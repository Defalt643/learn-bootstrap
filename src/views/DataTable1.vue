<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-table :items="productItems"> </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      productItems: [
        { productID: 1, name: 'Ipad gen1 64G Wifi', price: 11000.0 },
        { productID: 2, name: 'Ipad gen2 64G Wifi', price: 12000.0 },
        { productID: 3, name: 'Ipad gen3 64G Wifi', price: 13000.0 },
        { productID: 4, name: 'Ipad gen4 64G Wifi', price: 14000.0 },
        { productID: 5, name: 'Ipad gen5 64G Wifi', price: 15000.0 },
        { productID: 6, name: 'Ipad gen6 64G Wifi', price: 16000.0 },
        { productID: 7, name: 'Ipad gen7 64G Wifi', price: 17000.0 },
        { productID: 8, name: 'Ipad gen8 64G Wifi', price: 18000.0 },
        { productID: 9, name: 'Ipad gen9 64G Wifi', price: 19000.0 },
        { productID: 10, name: 'Ipad gen10 64G Wifi', price: 20000.0 }
      ]
    }
  }
}
</script>
<style></style>
