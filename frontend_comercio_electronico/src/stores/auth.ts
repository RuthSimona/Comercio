import { defineStore } from 'pinia'
import { getTokenFromLocalStorage } from '@/core/helpers/jwt'
import http from '@/core/plugins/axios'
import router from '@/router'

const useAuthStore = defineStore('auth', {
  state: () => ({
    email: localStorage.getItem('email') || '',
    token: getTokenFromLocalStorage(),
    returnUrl: null || ''
  }),
  getters: {},
  actions: {
    async login(email: string, password: string) {
      await http.post('auth/login', { email, password }).then((response) => {
        this.email = response.data.email
        this.token = response.data.access_token

        localStorage.setItem('email', this.email || '')
        localStorage.setItem('token', this.token || '')

        router.push(this.returnUrl || '/')
      })
    },
    logout() {
      localStorage.clear()
      this.$reset()           
      router.push('login')
    }
  }
})

export { useAuthStore }