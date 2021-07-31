import React from "react"
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe('Prueba en <GifGridItem />', () => {

  const title="Un titulo";
  const url = "https://localhost/logo.png"
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('Debe de mostrar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('Debe de tener un paarrafo con el titulo', () => {
    const p =wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  })

  test('Debe de tener la imagen igual a la url y alt de los props', () => {
    const img = wrapper.find('img');

    // console.log(img.props().src);

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  })

  test('should de tener animate_fadeIn', () => {
    const div= wrapper.find('div')

    // const divClass = div.props().className.split(' ');
    // expect(divClass[2]).toBe('animate__fadeIn');

    const divClass = div.prop('className');
    expect(divClass.includes('animate__fadeIn')).toBe(true);
  })
  
})

