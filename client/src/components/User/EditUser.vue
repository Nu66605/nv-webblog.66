<template>
  <div>
    <h1>Edit belt</h1>
    <form v-on:submit.prevent="editUser">
      <p>id: <input type="num" v-model="user.id"></p>
      <p>password: <input type="text" v-model="user.password"></p>
      <p>name: <input type="text" v-model="user.name"></p>
      <p>brand: <input type="text" v-model="user.brand"></p>
      <p>price: <input type="num" v-model="user.price"></p>
      <p>length: <input type="text" v-model="user.length"></p>
      <p><button type="submit">edit belt</button></p>
    </form>
    <hr />
    <div>
      <p>id: {{ user.id }}</p>
      <p>password: {{ user.password }}</p>
      <p>name: {{ user.name }}</p>
      <p>brand: {{ user.brand }}</p>
      <p>price: {{ user.price }} </p>
      <p>length: {{ user.length }}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: {
        id: "",
        password: "",
        name: "",
        brand: "",
        price: "",
        length: ""
      }
    };
  },
  methods: {
    async editUser() {
      try {
        console.log(this.user)
        await UsersService.put(this.user)
        this.$router.push("/users")
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
  }
};
</script>

<style></style>
