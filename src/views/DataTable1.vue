<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="text-right">
          <b-button variant="primary" @click="addNew">เพิ่มใหม่</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="productItems" :fields="fields">
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
export default {
  methods: {
    editProduct (item) {},
    deleteProduct (item) {},
    addNew () {}
  },
  data () {
    return {
      fields: [
        { key: 'productId', label: 'ไอดี' },
        { key: 'name', label: 'ชื่อสินค้า' },
        { key: 'price', label: 'ราคา' },
        { key: 'operators', label: 'กระบวนการ' }
      ],
      productItems: [
        { productId: 1, name: 'Ipad gen1 64G Wifi', price: 11000.0 },
        { productId: 2, name: 'Ipad gen2 64G Wifi', price: 12000.0 },
        { productId: 3, name: 'Ipad gen3 64G Wifi', price: 13000.0 },
        { productId: 4, name: 'Ipad gen4 64G Wifi', price: 14000.0 },
        { productId: 5, name: 'Ipad gen5 64G Wifi', price: 15000.0 },
        { productId: 6, name: 'Ipad gen6 64G Wifi', price: 16000.0 },
        { productId: 7, name: 'Ipad gen7 64G Wifi', price: 17000.0 },
        { productId: 8, name: 'Ipad gen8 64G Wifi', price: 18000.0 },
        { productId: 9, name: 'Ipad gen9 64G Wifi', price: 19000.0 },
        { productId: 10, name: 'Ipad gen10 64G Wifi', price: 20000.0 }
      ]
    }
  }
}
</script>
<style></style>
