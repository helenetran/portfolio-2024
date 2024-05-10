<script setup>

</script>

<template>
  <div class="title">
    <h1>Helene Tran</h1>
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

  h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 10px; /* Adjust as needed */
    animation:
    typing 5s steps(20, end) infinite
  }
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
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
</style>
