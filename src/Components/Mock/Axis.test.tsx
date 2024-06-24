import { shallow } from "enzyme";
import Axis from "./Axis";


describe ('mock component test', () => {
    test('axios test', () => {
        const wrapper = shallow(<Axis/>)
        console.log(wrapper.state())
        // return wrapper.instance().func().then(data => {
        //     expect(data).toEqual({})
        // })
    })
})
