<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1rem;
    min-height: 100vh;
}
#app {
    font-family: Avenir, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
</style>
