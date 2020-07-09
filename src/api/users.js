import axios from 'axios'

export default {
  getUsers() {
    return new Promise((res, rej) => {
      axios
        .get('https://frontend-test.netbox.ru/')
        .then(response => {
          res(response.data)
        }).catch(error => {
          rej(error)
        })
    })
  },

  deleteUser(id) {
    return new Promise((res, rej) => {
      axios
        .get(`https://frontend-test.netbox.ru/?method=delete&id=${id}`)
        .then(() => {
          res()
        }).catch(error => {
          rej(error)
        })
    })
  },

  editUser(paramsObj) {
    return new Promise((res, rej) => {
      axios
        .get(`https://frontend-test.netbox.ru/?method=update&id=${paramsObj.id}&name=${paramsObj.name}&age=${paramsObj.age}&phone=${paramsObj.phone}&email=${paramsObj.email}`)
        .then(() => {
          res()
        }).catch(error => {
          rej(error)
        })
    })
  }
}