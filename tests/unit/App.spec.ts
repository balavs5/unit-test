import { mount, shallowMount, Wrapper } from '@vue/test-utils'
import App from '@/App.vue'
import Vue from 'vue'
import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)
describe('AboutView.vue', () => {
    let wrapper: Wrapper<any>
    beforeAll(() => {
        wrapper = mount(App);
    })
    afterAll(() => {
        wrapper.destroy()
    })
    /*it('benefits hover', async () => {
        const title = wrapper.find('[data-test-id="0"]');
        expect(title.classes()[0]).toContain('items');
        await title.trigger('mouseover');
        expect(title.classes()[0]).toContain('items-hover')
    })*/
})