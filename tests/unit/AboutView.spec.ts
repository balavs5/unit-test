import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('renders component', () => {
    const msg = 'This is an about page'
    const wrapper = shallowMount(AboutView)
    expect(wrapper.find('h1').text()).toContain(msg)
  })
})
