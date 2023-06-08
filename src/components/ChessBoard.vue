<script setup>
import ChessSquare from '@/components/ChessSquare.vue'
</script>

<template>
  <div class="board-wrapper">
    <div class="board">
      <ChessSquare v-for="n in 64" :key="n" :idx="n - 1" />
    </div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  aspect-ratio: 1/1;
  margin: 0 auto;
  max-height: 80vh;
  padding: 0 0 2.4rem;
}

@media (min-width: 640px) {
  .board {
    padding: 2.4rem;
  }
}

@media (min-width: 1024px) {
  .board-wrapper {
    flex: 1;
  }
  .board {
    max-height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
