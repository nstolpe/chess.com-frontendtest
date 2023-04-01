import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

import Square from '@/components/Square.vue'
import { store } from '@/store.js'
import { getAlgebraicCoordinates } from '@/utilities'

describe('Square', () => {
  afterEach(() => {
    store.clickedSquares = []
    store.activeSquareIndex = null
  })

  it('updates the store on non-duplicate click', () => {
    const idx1 = 0
    const idx2 = 1
    const value1 = getAlgebraicCoordinates(idx1)
    const value2 = getAlgebraicCoordinates(idx2)
    let wrapper = mount(Square, {
      props: { idx: idx1 }
    })
    let button = wrapper.find('.square-button')

    button.trigger('click')
    expect(store.clickedSquares.length).toEqual(1)
    expect(store.clickedSquares[0]).toEqual(value1.join(''))
    expect(store.activeSquareIndex).toEqual(idx1)

    wrapper = mount(Square, {
      props: { idx: idx2 }
    })
    button = wrapper.find('.square-button')
    button.trigger('click')

    expect(store.clickedSquares.length).toEqual(2)
    expect(store.clickedSquares[0]).toEqual(value2.join(''))
    expect(store.activeSquareIndex).toEqual(idx2)
  })

  it('does not update the store on duplicate click', () => {
    const idx = 0
    let wrapper = mount(Square, {
      props: { idx }
    })
    let button = wrapper.find('.square-button')
    button.trigger('click')
    expect(store.clickedSquares.length).toEqual(1)
    button.trigger('click')
    expect(store.clickedSquares.length).toEqual(1)
  })
})
