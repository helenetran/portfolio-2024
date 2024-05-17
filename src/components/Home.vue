<script setup>
import { onMounted, ref } from "vue"

const playTypewritting = ref(false)

var myName = 'Helene Tran'.split('')

onMounted(() => {
  setTimeout(() => playTypewritting.value = true, 200)
})
</script>

<template>
  <div class="title" :class="{ play: playTypewritting }">
    <h1 id="my-name">
      <span v-for="letter in myName" :key="letter">{{ letter }}</span>
      <div class="caret">|</div>
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
      <!-- <dir>To weave the magic of HTML, CSS, and JavaScript to bring websites and apps to life flawlessly across all devices.</dir> -->
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
  }

  .caret {
    display: inline-block;
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
  .play h1 span:nth-child(#{$i}) {
    opacity: 1;
    transition-delay: #{$i * 0.15}s;
  }
}
</style>
