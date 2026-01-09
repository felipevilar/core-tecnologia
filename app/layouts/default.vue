<template>
  <div class="layout-container">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheWhatsApp />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// Components will be auto-imported by Nuxt in most cases,
// but explicit import is also fine if auto-import is disabled.
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
