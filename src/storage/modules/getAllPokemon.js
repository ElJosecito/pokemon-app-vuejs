import axios from 'axios'

const state = {
  allPokemon: [],
  allFavPokemon: [],
  counter: 20,
  Fcounter: 1,
  Loading: false
}

const mutations = {
  setAllPokemon(state, payload) {
    state.allPokemon = payload
  },

  setFavorites(state, payload) {
    state.allFavPokemon = payload
  },

  setLoading(state, payload) {
    state.Loading = payload
  },

  searchPokemon(state, payload) {
    state.allPokemon = payload
  },

  setCounter(state, payload) {
    state.counter = payload
  },

  setFCounter(state, payload) {
    state.Fcounter = payload
  }
}

const actions = {
  async getAllPokemon(context) {
    try {
      let pokemonArray = []

      for (let i = context.state.Fcounter; i <= context.state.counter; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        pokemonArray.push(response.data)
      }
      context.commit('setAllPokemon', pokemonArray)
    } catch (error) {
      context.commit('setAllPokemon', [])
      console.error('Error al obtener Pokémon:', error)
    }
  },

  async getFavorites(context) {
    const user = localStorage.getItem('user');
    const users = JSON.parse(localStorage.getItem('users'));
    const loggedUser = users.find((u) => u.email === user);

    // Verifica si hay un usuario y si tiene una propiedad 'Liked'
    if (loggedUser && loggedUser.Liked) {
      context.commit('setFavorites', loggedUser.Liked);

      try {
        let pokemonArray = [];
        for (let i = 0; i < loggedUser.Liked.length; i++) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${loggedUser.Liked[i]}`);
          pokemonArray.push(response.data);
        }

        context.commit('setFavorites', pokemonArray);
        context.commit('setLoading', true);
      } catch (error) {
        console.error('Error al obtener Pokémon favoritos:', error);
        context.commit('setFavorites', []);
      }
    } else {
      context.commit('setFavorites', []);
      context.commit('setLoading', true);
    }
  },
  //searchPokemon
  async searchPokemon(context, payload) {
    try {
      let pokemonArray = []
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${payload}`)

      pokemonArray.push(response.data)

      context.commit('searchPokemon', pokemonArray)
    } catch (error) {
      context.commit('searchPokemon', [])
      console.error('Error al obtener Pokémon:', error)
    }
  },

  //incrementCounter
  incrementCounter(context) {
    context.commit('setCounter', context.state.counter + 20)
    context.commit('setFCounter', context.state.Fcounter + 20)
    context.dispatch('getAllPokemon')
  },

  //decrementCounter
  decrementCounter(context) {
    if (state.Fcounter == 1) {
      context.commit('setCounter', (context.state.counter = 20))
      context.commit('setFCounter', (context.state.Fcounter = 1))
    } else {
      context.commit('setCounter', context.state.counter - 20)
      context.commit('setFCounter', context.state.Fcounter - 20)
    }
    context.dispatch('getAllPokemon')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
