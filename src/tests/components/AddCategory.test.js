import React from "react";
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("pruebasa en >AddCategory", () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test("debe de mostrarse correctamente", () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should change boxtext', () => {
      const input = wrapper.find('input');
      const value= 'HOla mundo'

      input.simulate('change', {target: {value}})

      expect(wrapper.find('h2').text().trim()).toBe(value)
    })

    test('should not postear la funcion de submit', () => {

      wrapper.find('form').simulate('submit', {preventDefault(){}})

      expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call setCategories y limpoiaar la caja de texto', () => {

      const value= 'HOla mundo'

      wrapper.find('input').simulate('change', {target: {value}})

      wrapper.find('form').simulate('submit', {preventDefault(){}})

      // console.log(input.prop('value'));

      expect(setCategories).toHaveBeenCalled()
      expect(wrapper.find('input').prop('value').trim()).toBe('')
      
    })

});
