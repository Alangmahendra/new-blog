<template>
  <div class="bawah">
    <b-navbar toggleable="md" type="dark" variant="success">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand class="pointer" @click="toBlog">Blog</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav> -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item @click="toAdmin">Profile</b-dropdown-item>
        <b-dropdown-item @click="signout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  created () {
    this.cekLogin()
  },
  methods: {
    reverseShow () {
      this.show = !this.show
      this.$router.push({name: 'Login'})
    },
    signout () {
      if (localStorage.getItem('token')) {
        localStorage.clear()
        this.$router.push({name: 'Login'})
      } else {
        alert('you have to login first')
        this.$router.push({name: 'Login'})
      }
    },
    cekLogin () {
      if (localStorage.getItem('token')) {
        this.show = false
      } else {
        this.show = true
      }
    },
    toBlog () {
      this.$router.push({name: 'Blog'})
    },
    toAdmin () {
      if (localStorage.getItem('token')) {
        this.$router.push({name: 'Admin'})
      } else {
        alert('need to login')
        this.$router.push({name: 'Login'})
      }
    }
  }
}
</script>

<style>
  .bawah{
    margin-bottom: 30px
  }
  .pointer{
    cursor: pointer;
  }
</style>
