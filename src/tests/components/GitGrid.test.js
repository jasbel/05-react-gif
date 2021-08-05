import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("pruebas en >GitGrid", () => {
    const category = "One Punch";

    test("should de mostrarse correctament", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar items cuando se cargan las imagines de useFetchGifs", () => {
        const gifs = [
            { id: "ABC", url: "https://localsf/pfoot.jpg", title: "mi title" },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length );
    });
});
