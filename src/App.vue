<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import user from './modules/userinfo.js'
import API from './modules/API.js'

export default {
  name: 'Mobistudy',
  created () {
    // check if already logged in, otherwise go to login
    let resettingpwd = window.location.href.includes('resetPassword')
    if (!user.getUser().loggedin && !resettingpwd) {
      this.$router.push('login')
      return
    } else {
      if (!resettingpwd) API.setToken(user.getUser().token)
    }
    // Add a 401 response interceptor
    this.$axios.interceptors.response.use((response) => {
      return response
    }, (error) => {
      if (error.response.status === 401 && !error.config.url.includes('login')) {
        user.logout()
        this.$router.push('login')
      }
      return Promise.reject(error)
    })
  }
}
</script>

<style>
</style>
