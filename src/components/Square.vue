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
const inTopRow = (idx) => idx >= 0 && idx <= 7
const inBottomRow = (idx) => idx >= 56 && idx <= 63
const inLeftRow = (idx) => [0, 8, 16, 24, 32, 40, 48, 56].includes(idx)
const inRightRow = (idx) => [7, 15, 23, 31, 39, 47, 55, 63].includes(idx)

const focusButtonByIdx = (idx) => {
  const target = document.querySelector(`.square-button.idx-${idx}`)
  target.focus()
}
const moveUp = () => {
  const { idx } = props
  const targetIdx = inTopRow(idx) ? idx + 56 : idx - 8
  focusButtonByIdx(targetIdx)
}
const moveDown = () => {
  const { idx } = props
  const targetIdx = inBottomRow(idx) ? idx - 56 : idx + 8
  focusButtonByIdx(targetIdx)
}
const moveLeft = () => {
  const { idx } = props
  const targetIdx = inLeftRow(idx) ? idx + 7 : idx - 1
  focusButtonByIdx(targetIdx)
}
const moveRigt = () => {
  const { idx } = props
  const targetIdx = inRightRow(idx) ? idx - 7 : idx + 1
  focusButtonByIdx(targetIdx)
}
</script>

<template>
  <div class="square">
    <button
      class="square-button"
      :class="[{ selected: isSelected }, `idx-${idx}`]"
      @click="recordClickedSquare"
      @keydown.up="moveUp"
      @keydown.down="moveDown"
      @keydown.left="moveLeft"
      @keydown.right="moveRigt"
    >
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
    transition: font-size 0.1s ease;

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
