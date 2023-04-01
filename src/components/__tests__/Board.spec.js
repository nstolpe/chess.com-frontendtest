import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Board from '@/components/Board.vue'
import Square from '@/components/Square.vue'

describe('Board', () => {
  it('renders properly', () => {
    const wrapper = mount(Board)
    expect(wrapper.findAllComponents(Square).length).toEqual(64)
  })
})
