import Sum from "./Sum";

describe('Sum of Two Numbers', () => {

    test('sum of 2 numbers', () => {
        const sumInstance = new Sum({});
        expect(sumInstance.sum(1, 2)).toBe(3);
    });

    test('sum of 2 numbers', () => {
        const sumInstance = new Sum({});
        expect(sumInstance.sum(1, 2)).not.toBe(4);
    });

    test('Object Check', () => {
        const objInstance = new Sum({});
        expect(objInstance.obj()).toEqual({name : "Tanish"})
    });

    test('Object Check', () => {
        const objInstance = new Sum({});
        expect(objInstance.obj()).not.toEqual({name : "Random"})
    });
});






 





























































// import Sum from "./Sum"

// describe ('Sum of Two Numbers', () => {


//     test('sum of 2 number', () => {
//         const sumInstance = new Sum()
//         expect(sumInstance.sum(1,2).toBe(3))
//     })

// })



// import { render } from "@testing-library/react";
// import Sum from "./Sum";

// describe('Sum Component', () => {
//     test('renders without crashing', () => {
//         const { getByText } = render(<Sum />);
//         expect(getByText('Sum')).toBeInTheDocument();
//     });
// });


// test('sum is equcal to 10', ()=> {
//     let data = 10
//     expect(data).toBe(10)
// })