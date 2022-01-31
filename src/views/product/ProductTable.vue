<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="text-right">
          <ProductForm
            :product="selectedItem"
            ref="productForm"
            @save="saveProduct"
          ></ProductForm>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="productItems" :fields="fields">
            <template #cell(price)="{ item }">
              ฿{{ item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
              บาท
            </template>
            <template #cell(operators)="{ item }">
              <b-button @click="editProduct(item)">แก้ไข</b-button
              ><b-button
                class="m1-1"
                variant="danger"
                @click="deleteProduct(item)"
                >ลบ</b-button
              >
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProductForm from './ProductForm.vue'
export default {
  components: {
    ProductForm
  },

  methods: {
    saveProduct (product) {
      console.log('Submit', product)
      if (product.id < 0) {
        product.id = this.productId
        this.productItems.push(product)
        this.productId++
      } else {
        const index = this.productItems.findIndex((item) => {
          return product.id === item.id
        })
        // this.productItem[index] = product
        this.productItems.splice(index, 1, product)
      }
    },
    editProduct (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.productForm.show()
      })
    },
    deleteProduct (product) {
      if (confirm(`คุณต้องการจะลบสินค้า ${product.id} หรือไม่`)) {
        const index = this.productItems.findIndex((item) => {
          return product.id === item.id
        })
        this.productItems.splice(index, 1)
      }
    }
  },
  data () {
    return {
      fields: [
        { key: 'id', label: 'ไอดี' },
        { key: 'name', label: 'ชื่อสินค้า' },
        { key: 'price', label: 'ราคา' },
        { key: 'operators', label: 'กระบวนการ' }
      ],
      productItems: [
        { id: 1, name: 'Ipad gen1 64G Wifi', price: 11000.0 },
        { id: 2, name: 'Ipad gen2 64G Wifi', price: 12000.0 },
        { id: 3, name: 'Ipad gen3 64G Wifi', price: 13000.0 },
        { id: 4, name: 'Ipad gen4 64G Wifi', price: 14000.0 },
        { id: 5, name: 'Ipad gen5 64G Wifi', price: 15000.0 },
        { id: 6, name: 'Ipad gen6 64G Wifi', price: 16000.0 },
        { id: 7, name: 'Ipad gen7 64G Wifi', price: 17000.0 },
        { id: 8, name: 'Ipad gen8 64G Wifi', price: 18000.0 },
        { id: 9, name: 'Ipad gen9 64G Wifi', price: 19000.0 },
        { id: 10, name: 'Ipad gen10 64G Wifi', price: 20000.0 }
      ],
      productId: 11,
      selectedItem: null
    }
  }
}
</script>
<style></style>
