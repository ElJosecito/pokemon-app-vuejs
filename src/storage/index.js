import { createStore } from 'vuex';
import getAllPokemon from './modules/getAllPokemon';
import sessionModule from './modules/sessionModule';
const store = createStore({
  modules: {
    getAllPokemon,
    sessionModule,
  },
});

export default store;