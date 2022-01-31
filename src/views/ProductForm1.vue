<template>
  <div>
    <b-form @submit.prevent="submit" @reset.prevent="reset">
      <b-form-group
        id="form-group-product-name"
        label="ชื่อสินค้า"
        label-for="product-name"
      >
        <b-form-input
          type="text"
          id="product-name"
          placeholder="ชื่อสินค้า Iphone XXX"
          v-model="form.name"
          :state="validateName"
          autofocus
        >
        </b-form-input>
        <b-form-invalid-feedback :state="validateName">
          ชื่อสินค้าต้องมีความยาวอย่างน้อย 3 ตัวอักษร
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="form-group-product-price"
        label="ราคาสินค้า"
        label-for="product-price"
      >
        <b-form-input
          type="number"
          id="product-price"
          placeholder="ราาสินค้า 10.0"
          v-model="form.price"
          :state="validatePrice"
        >
        </b-form-input>
        <b-form-invalid-feedback :state="validatePrice">
          ราคาสินค้าจะต้องไม่น้อยกว่าหรือเท่ากับ 0 บาท
        </b-form-invalid-feedback>
        <b-button variant="primary" type="submit">Submit</b-button
        ><b-button class="ml-1" type="reset" variant="danger">Reset</b-button>
      </b-form-group>
    </b-form>
    <b-card>
      <pre>
            {{ form }}
        </pre
      >
    </b-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        id: -1,
        name: '',
        price: 0
      }
    }
  },
  computed: {
    validateName () {
      return this.form.name.length >= 3
    },
    validatePrice () {
      return this.form.price >= 0 && this.form.price >= 0
    }
  },
  methods: {
    submit () {
      if (this.validateName && this.validatePrice) {
        console.log(this.form)
      }
    },
    reset () {
      this.form = { id: 1, name: '', price: 0 }
    }
  }
}
</script>
<style></style>
