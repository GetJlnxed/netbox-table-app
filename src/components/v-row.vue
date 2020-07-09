<template>
  <tr class="row">
    <td v-for="item in data" :key="item">
      <input
        type="text"
        :disabled="item.field == 'ID' || !editMode"
        :value="item.value"
        @input="handleInput(item.field.toLowerCase().replace('-',''), $event.target.value)"
      />
    </td>
    <td class="row__buttons">
      <button class="row__button button" @click="deleteUser(rowId)">Delete</button>
      <button class="row__button button" @click="editMode=true" v-if="!editMode">Edit</button>
      <button class="row__button button" @click="editUser()" v-if="editMode">Save</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "vRow",
  data() {
    return {
      editMode: false,
      state: {}
    };
  },
  props: {
    data: Array,
    rowId: Number
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("users/deleteUser", id);
    },
    editUser() {
      if (Object.keys(this.state).length > 0) {
        this.$store
          .dispatch("users/editUser", {
            id: this.state.id ? this.state.id : this.data[0].value,
            name: this.state.name ? this.state.name : this.data[1].value,
            age: this.state.age ? this.state.age : this.data[2].value,
            phone: this.state.phone ? this.state.phone : this.data[3].value,
            email: this.state.email ? this.state.email : this.data[4].value
          })
          .then(() => {
            this.editMode = false;
          });
      } else {
        this.editMode = false;
      }
    },
    handleInput(prop, value) {
      this.state[prop] = value;
    }
  }
};
</script>

<style lang="stylus" scoped>
.row__buttons {
  display: flex;
  flex-flow: row nowrap;
}

.row__button {
  margin-left: 10px;
}
</style>