<script setup>
import Menu from './components/Menu.vue'
</script>

<template >
  <div class="grid"></div>
  <header class="header">
    <Menu></Menu>
  </header>

  <div class="side-bar left"></div>
  <div class="side-bar right"></div>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: CaviarDreams, Arial, Helvetica, sans-serif;
}

body {
  min-height: 100dvh;
  padding: 50px;
  padding-top: 100px;
  background-color: #f5ece6;
  color: #444346;
  background: #f5ece6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f2d8ce, #f5ece6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f2d8ce, #f5ece6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

main {
  width: 70vw;
  padding-top: 100px;
  margin: auto;
}

a {
  text-decoration: unset;
  color: unset;
}

.side-bar {
  border: 1px solid var(--border);
  width: 15vw;
  height: 100dvh;
  position: fixed;
  top: 0;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}

</style>
