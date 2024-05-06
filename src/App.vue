<script setup>
import About from './components/About.vue'
import Menu from './components/Menu.vue'
</script>

<template >
  <div class="grid"></div>
  <header class="header">
    <Menu></Menu>
  </header>

  <main>
    <About class="section"></About>
  </main>

  <footer></footer>
</template>

<style>
* {
  box-sizing: border-box !important;
  padding: 0;
  margin: 0;
  font-family: CaviarDreams, Arial, Helvetica, sans-serif;
}

body {
  margin: 50px !important;
}

.grid {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  background-image:
    repeating-linear-gradient(#f5f5f5 0 1px, transparent 1px 100%),
    repeating-linear-gradient(90deg, #f5f5f5 0 1px, transparent 1px 100%);
  background-size: 120px 120px;
}
</style>
