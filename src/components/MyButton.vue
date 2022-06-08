<script lang="ts" src="./MyButton.ts"></script>
<template>
  <button class="btn">
    {{ primary }}
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
}
.btn.primary {
  background: hsl(239, 100%, 27%);
  color: #fff;
}
</style>
