
// Test Case using Enzyme

import { shallow } from 'enzyme';
import EnzymeDemo from './EnzymeDemo';

describe ('Enzyem page', () => {
    test('check', () => {
         let wrapper = shallow(<EnzymeDemo/>)
        //  console.log(wrapper.debug())
        expect(wrapper.exists('.home')).toEqual(true);

    })
})