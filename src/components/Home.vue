<script setup>
// import { onMounted } from 'vue'

var myName = 'Helene Tran'.split('');

// setInterval(toggleClass, 1000);

// function toggleClass() {
//   myName.forEach((letter, i) => {
//     setTimeout(() => {
//       document.querySelector(`h1 span:nth-child(${i+1})`).classList.add('hide')
//       console.log(letter, i, 'ca passe dans la fonction')
//     }, 3000)
//   })
// }

// onMounted(() => {
//   toggleClass()
// })
</script>

<template>
  <div class="title">
    <h1 id="my-name">
      <span v-for="letter in myName" :key="letter">{{ letter }}</span>
    </h1>
  </div>
  <div class="definitions">
    <div class="definition">
      <h2>noun.</h2>
      <div>Frontend developer, innovative problem solver.</div>
    </div>
    <div class="definition">
      <h2>adj.</h2>
      <div>curious, detail oriented, passionate.</div>
    </div>
    <div class="definition">
      <h2>verb.</h2>
      <dir>To weave the magic of HTML, CSS, and JavaScript to bring websites and apps to life flawlessly across all devices.</dir>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  border-top: 1px solid var(--border);
  font-size: 40px;
  text-align: center;
  padding: 50px;
  span {
    opacity: 0;
    animation: show 3s infinite;
  }
}

.definitions {
  display: inline-flex;
  .definition {
    border: 1px solid var(--border);
    padding: 40px;
    border-left: none;

    &:last-child {
      border-right: none;
    }
  }
}

$columns: 11;

@for $i from 1 through $columns {
  h1 span:nth-child(#{$i}) {
    opacity: 1;
    color: red;
    transition-delay: #{$i * 0.5}s;
  }
}
</style>
