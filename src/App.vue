<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    document.getElementById('circular-cursor').style.left = `${e.pageX}px`
    document.getElementById('circular-cursor').style.top = `${e.pageY}px`
  })
})

</script>

<template >
  <div id="circular-cursor"></div>
  <div class="grid"></div>
  <!-- Logo, Nav bar. -->
  <Header></Header>

  <!-- Side bars made with CSS. -->
  <div class="side-bar left"></div>
  <div class="side-bar right"></div>

  <main>
    <RouterView />
  </main>

  <Footer></Footer>
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
  color: #444346;
  background-color: #f2f2f2;
  background: -webkit-linear-gradient(to right, #e5e5e5, #f2f2f2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #e5e5e5, #f2f2f2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

main {
  min-height: 80vh;
  width: 70vw;
  margin: auto;
  margin-top: 10vh;
  margin-bottom: 30vh;

  h1 {
    font-size: 24px;
    padding-left: 10px;
    text-transform: uppercase;
  }
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

html {
  cursor: default;
}

#circular-cursor {
  background-color: var(--secondary-color);
  height:50px;
  width:50px;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  position: absolute;
  z-index: 1;
  left: -200px;
  transition: ease 0.1s;
}
</style>
