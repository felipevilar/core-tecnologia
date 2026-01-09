<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Global resets or base styles can go here if not in a separate file */
:root {
  --primary-color: #0088cc; /* Example blue from logo */
  --secondary-color: #ff6600; /* Example orange from logo */
  --text-color: #333;
  --bg-color: #fff;
  font-family: "Inter", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--text-color);
  background-color: var(--bg-color);
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
</style>
