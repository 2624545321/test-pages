import { describe, it } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const msg = 'Hello Cypress Component Testing!'
    mount(HelloWorld, { props: { msg } })
    // expect(wrapper.text()).toContain('Hello Vitest')
    cy.get('h1').should('have.text', msg)
  })
})
