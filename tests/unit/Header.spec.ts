import { mount, shallowMount, Wrapper } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import Vue from 'vue'
import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)
describe('AboutView.vue', () => {
    let wrapper: Wrapper<any>
    beforeAll(() => {
        wrapper = mount(Header);
    })
    afterAll(()=>{
        wrapper.destroy()
    })
    it('benefits count', async () => {
        const title = await wrapper.findAll('.nav-item').length;
        expect(title).toEqual(4)
    })
    it('benefits on click', async () => {
        const title = wrapper.find('[data-test-info="0"]');
        expect(wrapper.find("#staticBackdrop").exists()).toBe(false);
        await title.trigger('click');
        expect(wrapper.find("#staticBackdrop").exists()).toBe(true);
    })
})