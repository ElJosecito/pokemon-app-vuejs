<template lang="">
    <div>
        <div class="title-container">
            <h1>Lista de Pokemon</h1>
        </div>
        
        <div class="pokemon_container">
            <PokemonComponent v-for="pokemon in Pokemon" :key="pokemon.id" :name="pokemon.name" :img="pokemon.sprites.front_default" />
        </div>

        <div class="buttons">
            <button @click="getMorePokemon">Get 20 more</button>
        </div>
    </div>
</template>
<script>
import PokemonComponent from './PokemonComponent.vue';

export default {
    name: 'HomeComponent',
    data() {
        return {
            Pokemon: [],
            count: 20,
        }
    },
    components: {
        PokemonComponent,
    },

    mounted() {
        this.getPokemon();
    },

    methods: {
        async getPokemon() {

            let pokemonData = [];

            for (let i = 1; i <= this.count; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await response.json();

                pokemonData.push(data);
            }

            //console.log(pokemonData);
            this.Pokemon = pokemonData;
        },

        async getMorePokemon() {
            this.count += 20;
            this.getPokemon();
        }

    },

}
</script>
<style lang="">
    
</style>