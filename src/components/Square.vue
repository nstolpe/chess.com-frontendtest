<script setup>
import { computed } from 'vue'
import { store } from '@/store.js'
import { getAlgebraicCoordinates } from '@/utilities'
const props = defineProps({
  idx: Number
})

const isSelected = computed(() => store.activeSquareIndex === props.idx)

const coordinatesString = computed(() => {
  const algebraicCoordinates = getAlgebraicCoordinates(props.idx)
  return algebraicCoordinates.join('')
})

const recordClickedSquare = () => {
  // don't reselect if the square is currently selected
  if (store.activeSquareIndex !== props.idx) {
    store.activeSquareIndex = props.idx
    store.clickedSquares = [coordinatesString.value, ...store.clickedSquares]
  }
}
</script>

<template>
  <div class="square">
    <button class="square-button" :class="{ selected: isSelected }" @click="recordClickedSquare">
      {{ coordinatesString }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.square {
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  .square-button {
    border: none;
    background-color: var(--white);
    color: var(--black);
    height: 100%;
    width: 100%;
    cursor: pointer;
    font-family: serif;
    font-size: 1.6rem;
    outline: none;
    transition: all 0.2s ease;

    &::after {
      content: '';
      background-color: var(--red);
      opacity: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: opacity 0.2s ease;
    }
    &:not(.selected):hover,
    &:not(.selected):focus {
      color: var(--red);
    }
    &.selected::after {
      opacity: 0.5;
    }
  }

  @each $offset in 2 4 6 8 9 11 13 15 {
    &:nth-child(16n + #{$offset}) {
      .square-button {
        background-color: var(--black);
        color: var(--white);
        &:not(.selected):hover,
        &:not(.selected):focus {
          color: var(--red);
        }
      }
    }
  }
}

@media (min-width: 610px) {
  .square > .square-button {
    font-size: 3.2rem;
  }
}

@media (min-width: 480px) and (max-width: 609px) {
  .square > .square-button {
    font-size: 2.4rem;
  }
}
</style>
