import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const token = localStorage.getItem('token')
const http = axios.create({
  baseURL: 'http://neoal.xyz:3010/api'
})

// const api = 'http://localhost:3000/api/'

Vue.use(Vuex)

const state = {
  articles: [],
  oneArticle: null,
  myArticles: []
}

const actions = {
  getArticles ({commit}) {
    console.log('oooooi')
    http.get('/articles')
      .then(({ data }) => {
        console.log('data dari action get articles', data)
        commit('setArticle', data.data)
      })
      .catch(err => console.error('hahahaha', err))
  },
  getOneArticle ({commit}, id) {
    http.get(`/articles/${id}`)
      .then(({data}) => {
        console.log('data ditemukan', data)
        commit('setOne', data.data)
      })
      .catch(err => console.error(err))
  },
  getMyarticle ({commit}) {
    return new Promise((resolve, reject) => {
      http.get(`/articles/mine`, {
        headers: {
          authorization: token
        }
      })
        .then(({data}) => {
          console.log('data mine dari getmy', data.data)
          commit('setMyarticle', data.data)
          resolve()
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  },
  addarticle ({commit}, newArticle) {
    let formData = new FormData()
    formData.append('image', newArticle.image)
    formData.append('title', newArticle.title)
    formData.append('description', newArticle.description)
    formData.append('content', newArticle.content)
    return new Promise((resolve, reject) => {
      http.post('/articles', formData, {
        headers: {
          authorization: token
        }
      })
        .then(({data}) => {
          console.log('ini dat add articles ations', data)
          commit('saveArticle', data.data)
          resolve()
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  },
  deleteArticle ({commit}, id) {
    http.delete(`/articles/${id}`, {
      headers: {authorization: token}
    })
      .then(({data}) => {
        console.log('data yg dihapus', data)
        commit('removeArticle', data.data)
      })
      .catch(err => console.error(err))
  },
  updateArticle ({commit}, updateData) {
    let formData = new FormData()
    formData.append('title', updateData.title)
    formData.append('description', updateData.description)
    formData.append('content', updateData.content)
    formData.append('image', updateData.image)
    console.log('ini formData', formData)
    return new Promise((resolve, reject) => {
      http.put(`/articles/${updateData._id}`, formData, {
        headers: {
          authorization: token
        }
      })
        .then(({data}) => {
          console.log('kelar action', data.data)
          commit('updatedSave', data.data)
          resolve()
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  }

}

const mutations = {
  setArticle (state, payload) {
    console.log('set payload ke state', payload)
    state.articles = payload
  },
  setOne (state, payload) {
    console.log('assign satu article ke state', payload)
    state.oneArticle = payload
  },
  saveArticle (state, payload) {
    console.log('ini payload saveArticle', payload)
    state.myArticles.push(payload)
  },
  setMyarticle (state, payload) {
    console.log('set all my articles', payload)
    state.myArticles = payload
  },
  removeArticle (state, payload) {
    console.log('hapus', payload)
    const index = state.myArticles.findIndex((article) => article._id === payload._id)
    state.myArticles.splice(index, 1)
  },
  updatedSave (state, payload) {
    console.log('update', payload)
    state.myArticles = state.myArticles.map(article => {
      if (article._id === payload._id) {
        return payload
      }
      return article
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
