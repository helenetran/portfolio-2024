<script setup>

</script>

<template>
  <div class="title" :class="{ play: playTypewritting }">
    <h1 id="my-name">Helene Tran</h1>
  </div>
  <div class="definitions">
    <div class="definition">
      <div class="definition__logo i-computer"></div>
      <h2>noun.</h2>
      <div>Frontend developer, innovative problem solver.</div>
    </div>
    <div class="definition">
      <div class="definition__logo i-monocle"></div>
      <h2>adj.</h2>
      <div>Curious, detail oriented, passionate - but also...</div>
    </div>
    <div class="definition">
      <div class="definition__logo i-wand"></div>
      <h2>verb.</h2>
      <div>To weave the magic of HTML, CSS, and JavaScript to bring websites and apps to life flawlessly across all devices.</div>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  border-top: 1px solid var(--border);
  font-size: 40px;
  text-align: center;
  padding: 50px;

  #my-name {
    font-family: Autography;
    font-weight: 100;
  }

}

.definitions {
  display: inline-flex;

  .definition {
    border: 1px solid var(--border);
    padding: 40px;
    border-left: none;
    text-align: center;
    box-sizing: border-box;
    width: 100%;

    &__logo {font-size: 50px;}

    h2 {
      font-style: italic;
      font-family: 'CaviarDreamsBold';
      font-size: 17px;
      opacity: 0.8;
      padding-bottom: 10px;
    }


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
