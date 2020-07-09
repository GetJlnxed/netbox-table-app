<template>
  <table class="table">
    <tbody>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      <v-row v-for="user in users" :key="user" :data="user" :rowId="user[0].value">
      </v-row>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";
import vRow from "./v-row.vue";

export default {
  name: "vTable",
  components: {
    vRow
  },
  computed: {
    ...mapGetters({
      users: "users/users"
    })
  },
  created() {
    this.$store.dispatch("users/getAllUsers");
  }
};
</script>

<style scoped lang="stylus"></style>
