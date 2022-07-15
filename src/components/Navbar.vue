<template>
  <header>
      <img src="../assets/logo.svg" class="logo-img" alt="" >
      <nav>
          <router-link :to="{name: 'Home'}">Home</router-link>
          <router-link :to="{name: 'projects'}">Projects</router-link>
          <router-link :to="{name: 'About'}">About</router-link>
          <router-link :to="{name: 'contact'}">Contact</router-link>
          
          
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

header h1 {
  color: black;
  font-size: 40px;
}

header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}

header a.router-link-active {
  color: #444;
  font-weight: bold;
}

.logo-img {
  max-width: 30px;
  max-height: 30px;
  display: none;
}



</style>