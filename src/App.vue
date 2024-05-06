<script setup>
import Menu from './components/Menu.vue'
</script>

<template >
  <div class="grid"></div>
  <header class="header">
    <Menu></Menu>
    <!-- <nav>
      <RouterLink to='/'> Home</RouterLink>
      <RouterLink to='/about'> About</RouterLink>
    </nav> -->
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: CaviarDreams, Arial, Helvetica, sans-serif;
}

body {
  min-height: 100dvh;
  padding: 50px;
}

</style>
