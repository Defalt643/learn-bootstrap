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
import axios from 'axios'
export default {
  components: {
    ProductForm
  },

  methods: {
    makeToast (title, message, variant = 'sucess', append = false) {
      this.toastCount++
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        autoHideDelay: 3000,
        appendToast: append
      })
    },
    saveProduct (product) {
      console.log('Submit', product)
      if (product.id < 0) {
        axios.post('http://localhost:3000/products', product).then(
          function (response) {
            const newProduct = response.data
            this.getProducts()
            this.makeToast('เพิ่มสำเร็จ', 'สินค้า ' + newProduct + ' ถูกเพิ่มแล้ว')
          }.bind(this)
        ).catch(() => {
          this.makeToast('เพิ่มไม่สำเร็จ', 'ไม่สามารถเพิ่มได้ ' + product.id, 'danger')
        })
      } else {
        axios.put('http://localhost:3000/products/' + product.id, product).then(
          function (response) {
            const updateProduct = response.data
            this.getProducts()
            this.makeToast('ปรับปรุง', 'สินค้า ' + updateProduct + ' ถูกแก้ไขแล้ว')
          }.bind(this)
        ).catch(() => {
          this.makeToast('ปรับปรุงไม่สำเร็จ', 'ไม่สามารถปรับปรุงได้ ' + product.id, 'danger')
        })
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
        axios.delete('http://localhost:3000/products/' + product.id).then(
          function (response) {
            const deleteProduct = response.data
            this.getProducts()
            this.makeToast('ลบสำเร็จ', 'สินค้า ' + deleteProduct + ' ถูกลบแล้ว')
          }.bind(this)
        ).catch(() => {
          this.makeToast('ลบไม่สำเร็จ', 'ไม่สามารถลบ ' + product.id, 'danger')
        })
      }
    },
    getProducts () {
      const salf = this
      axios.get('http://localhost:3000/products').then((response) => {
        console.log(response)
        salf.productItems = response.data
      }
      )
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
      ],

      selectedItem: null
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
<style></style>
