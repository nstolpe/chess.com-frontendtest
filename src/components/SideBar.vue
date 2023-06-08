<script setup>
import { store } from '@/store.js'
</script>

<template>
  <div class="sidebar">
    <h3 class="sidebar-header">clicked squares</h3>
    <ul class="coordinate-list">
      <li
        class="coordinate-list-item"
        v-for="(coordinates, index) in store.clickedSquares"
        :key="index"
        :title="`click: ${store.clickedSquares.length - index}`"
      >
        <strong>{{ `${coordinates}:` }}</strong>
        {{ `click ${store.clickedSquares.length - index}` }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  flex: 1;
  width: 100%;
  background-color: #a9a9a9;
  padding: 1.6rem;
  overflow: hidden;
}

.sidebar-header {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  background-color: var(--black);
  color: var(--white);
  margin-bottom: 1rem;
  border-radius: 4px;
}

.coordinate-list {
  padding-left: 0;
  list-style: none;
  overflow-y: scroll;
  max-height: calc(100% - 3.4rem);
}

.coordinate-list-item {
  font-size: 1.6rem;
  line-height: 1;
  margin-bottom: 0.8rem;

  strong {
    font-weight: bold;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    flex: initial;
    width: 400px;
  }
}

@media (min-width: 610px) {
  .sidebar-header {
    font-size: 3.2rem;
    line-height: 1.5;
    margin-bottom: 2.4rem;
  }
  .coordinate-list {
    max-height: calc(100% - 7.2rem);
  }
  .coordinate-list-item {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
}
</style>
