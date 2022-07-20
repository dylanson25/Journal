import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Pruebas en el About View", () => {
  test("debe de renderizar el componente correctamente", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
