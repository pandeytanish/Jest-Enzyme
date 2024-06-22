import Articles from "./Articles";
import { shallow, mount} from "enzyme";
import Tabel from "./Tabel";

describe.skip('Article Page', () => {
    test('click count', () => {
        let wrapper = shallow(<Articles/>)
        expect(wrapper.find('.click-0').length).toEqual(1)
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.click-1').length).toEqual(2)
    })

    test('click 3 count', () => {
        let wrapper = shallow(<Articles/>)
        expect(wrapper.find('.click-0').length).toEqual(1)
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.click-2').length).toEqual(1)
    })

    test('dive', () => {
        let wrapper = shallow(<Articles/>)
        expect(wrapper.find(Tabel).dive().find('.table').length).toBe(1)
        
    })

    test('snapshot', () => {
        let wrapper = shallow(<Tabel/>)
        expect(wrapper).toMatchSnapshot();
    })
    test('snapshot 2', () => {
        let wrapper = shallow(<Tabel/>)
        expect(wrapper).toMatchSnapshot();
    })
    test('snapshot 3', () => {
        let wrapper = shallow(<Tabel/>)
        expect(wrapper).toMatchSnapshot();
    })
})

describe('mount', () => {
    test('mount test', () => {
        let wrapper = mount(<Articles/>)
        console.log(wrapper.debug())
    })
})