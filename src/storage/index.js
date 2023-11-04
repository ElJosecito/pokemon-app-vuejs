import { createStore } from 'vuex';
import getAllPokemon from './modules/getAllPokemon';

const store = createStore({
  modules: {
    getAllPokemon,
  },
});

export default store;