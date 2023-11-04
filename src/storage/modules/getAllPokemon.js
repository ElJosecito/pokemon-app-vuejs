import axios from 'axios'

const state = {
  allPokemon: [],
  counter: 20,
  Fcounter: 1
}

const mutations = {
  setAllPokemon(state, payload) {
    state.allPokemon = payload
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
      console.error('Error al obtener Pokémon:', error)
      // Puedes agregar lógica adicional aquí, como mostrar un mensaje de error al usuario.
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
      console.error('Error al obtener Pokémon:', error)
      // Puedes agregar lógica adicional aquí, como mostrar un mensaje de error al usuario.
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
