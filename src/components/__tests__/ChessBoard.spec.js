import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ChessBoard from '@/components/ChessBoard.vue'
import ChessSquare from '@/components/ChessSquare.vue'

describe('Board', () => {
  it('renders properly', () => {
    const wrapper = mount(ChessBoard)
    expect(wrapper.findAllComponents(ChessSquare).length).toEqual(64)
  })
})
