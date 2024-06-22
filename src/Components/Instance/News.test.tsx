
import News from "./News";
import { shallow } from "enzyme";

describe('instance , state, props', () => {

    test('instance testing', () => {
        let wrapper = shallow(<News />)
        let instance = wrapper.instance() as News
        let result = instance.checkBoxChecked(1, "test")
        expect(result).toEqual({ id: 3 })
    })

    test('load data func test', async() => {
        let wrapper = shallow(<News />)
        let instance = wrapper.instance() as News
        return instance.loadData(1,"test").then(data => {
            console.log(data)
            expect(data).toEqual({me : 12})
        }) 
    })

    test('jestSpyon componentdidMount', async() => {
        const componentDidMountSpy =  jest.spyOn(News.prototype,'componentDidMount')
        const wrapper = shallow(<News />)
        expect(componentDidMountSpy).toHaveBeenCalled()
        expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
        componentDidMountSpy.mockRestore()
    })

    test('jestSpyon function call ', async() => {
        let wrapper = shallow(<News />)
        let instance = wrapper.instance() as News
        let funSpy =  jest.spyOn(instance,'func');
        wrapper.find('button').simulate('click')
        await instance.func(90, 80)
        expect(funSpy).toHaveBeenCalled()
        expect(funSpy).toHaveBeenCalledWith(90,80)
    })

    test('check state change', async () => {
        let wrapper  = shallow(<News/>)
        const instance = wrapper.instance() as News
        return instance.loadData(1,"test").then(data => {
            expect(data).toEqual({me : 12})
            expect(wrapper.state('newsCount')).toEqual(39)
        }) 
    })

    // test('check state change', async () => {
    //     const wrapper = shallow(<News />)
    //     const instance = wrapper.instance() as News
    //     await instance.loadData(1, "test")
    //     expect(wrapper.state('newsCount')).toEqual(39)
    // })

    test('props', async () => {
        let wrapper  = shallow(<News/>)
        let inputProps = wrapper.find('input').props();
        console.log(inputProps)

        let matchprops = {
            type : 'text',
            id : 'firstname',
            value : 'codeImprove',
            name : 'firstname'
        }
        expect(inputProps).toEqual(matchprops)
 
    })

})
 