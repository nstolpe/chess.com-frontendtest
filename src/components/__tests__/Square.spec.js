import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Square from '@/components/Square.vue'
import { store } from '@/store.js'
import { getAlgebraicCoordinates } from '@/utilities'

describe('Square', () => {
  it('updates store.clickedSquares on click', () => {
    const idx = 1
    const value = getAlgebraicCoordinates(idx)
    const wrapper = mount(Square, {
      props: { idx }
    })
    const button = wrapper.find('.square-button')
    button.trigger('click')
    expect(store.clickedSquares.length).toEqual(1)
    expect(store.clickedSquares[0]).toEqual(value.join(''))
  })
})
