import users from '../../api/users'

const state = () => ({
  allUsers: []
})

const getters = {
  users(state) {
    return state.allUsers
  }
}

const actions = {
  getAllUsers({ commit }) {
    users.getUsers().then((users) => {
      commit('setUsers', users)
    })
  },
  deleteUser({ commit }, id) {
    users.deleteUser(id).then(() => {
      commit('deleteUser', id)
    })
  },
  editUser({ commit }, paramsObj) {
    return new Promise((res) => {
      users.editUser(paramsObj).then(() => {
        res()
        commit('editUser', paramsObj)
      })
    })
  }
}

const mutations = {
  setUsers(state, users) {
    state.allUsers = users
  },
  deleteUser(state, id) {
    state.allUsers.forEach((user, index) => {
      if (user[0].value == id) {
        state.allUsers.splice(index, 1)
      }
    });
  },
  editUser(state, paramsObj) {
    state.allUsers.forEach((user) => {
      if (user[0].value == paramsObj.id) {
        user.forEach(item => {
          item.value = paramsObj[item.field.toLowerCase().replace('-', '')]
        })
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}