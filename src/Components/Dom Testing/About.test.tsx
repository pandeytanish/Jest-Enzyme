import About from "./About";
import { shallow } from "enzyme";


describe('About Page test', () => {

    test('class check', () => {
        let wrapper = shallow(<About/>)
        // console.log(wrapper.debug())
        expect(wrapper.exists('.about-class')).toEqual(true)
    })

    test('State check', () => {
        let wrapper = shallow(<About/>)
        expect(wrapper.state()).toEqual({name : 'Hello', id : 23})
    })

    test('Html exsits or not', () => {
        let wrapper = shallow(<About/>)
        expect(wrapper.contains(<div className='about-class'>Hello</div>)).toEqual(true)
    })

    test('Contain message', () => {
        let wrapper = shallow(<About/>)
        expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(true)
    })

    test('Any message check', () => {
        let wrapper = shallow(<About/>)
        expect(wrapper.containsAnyMatchingElements([<div>Hello</div>,<div>Hey</div>])).toEqual(true)
    })
})