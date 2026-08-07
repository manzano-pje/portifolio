<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-4);
  }
}
</style>
