/**
 * El state es reactivo y cuando cambia se notifiva a todos los componentes
 * o a varios lugares donde esten escuchando los cambios del state
 */
export default () => ({
  isLoding: true,
  entries: [
    {
      id: new Date().getTime(),
      Date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat suscipit dolorum mollitia. Dolor reprehenderit totam unde, iusto necessitatibus eos incidunt! Veniam esse quasi, excepturi ipsum odio similique. Corrupti, dolorem!",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      Date: new Date().toDateString(),
      text: "Ipsum lorem dolor sit amet consectetur adipisicing elit. Harum fugiat suscipit dolorum mollitia. Dolor reprehenderit totam unde, iusto necessitatibus eos incidunt! Veniam esse quasi, excepturi ipsum odio similique. Corrupti, dolorem!",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      Date: new Date().toDateString(),
      text: "Pato Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat suscipit dolorum mollitia. Dolor reprehenderit totam unde, iusto necessitatibus eos incidunt! Veniam esse quasi, excepturi ipsum odio similique. Corrupti, dolorem!",
      picture: null,
    },
  ],
});
