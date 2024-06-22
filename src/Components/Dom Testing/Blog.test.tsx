import Blog from "./Blog";
import { shallow } from "enzyme";

describe('Blog Page Test', () => {
    test('Find Number of elements  ', () => {
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.list').length).toBe(3)

    })

    test('Key Check  ', () => {
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.list').at(0).key()).toBe('Angular')
    })

    test('Child Check', () => {
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.numbers').childAt(0).type()).toBe('span')
    })

    test('Childern length', () => {
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('ul').children().length).toBe(3)
    })

    test('Has class check', () => {
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.submit-btn').hasClass('button')).toBe(true)
    })
   
    test(' check main class', () => {
        let wrapper = shallow(<Blog/>)
        expect(wrapper.is('.main')).toBe(true)
    })
})