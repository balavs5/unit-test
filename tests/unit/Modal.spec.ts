import { mount, shallowMount, Wrapper } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import Vue from 'vue'
import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)
describe('Modal.vue', () => {
    let wrapper: Wrapper<any>
    beforeAll(() => {
        wrapper = mount(Header);
    })
    afterAll(()=>{
        wrapper.destroy()
    })
    it('modal close', async () => {
        console.log(wrapper.html());
    })
})
