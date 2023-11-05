<template lang="">
    <div>
        <div class="title-container">
            <h1>Lista de Pokemon favoritos</h1>
        </div>
        
        <div>
            <div class="pokemon-card__container" v-if="Loading === true">
            <PokemonComponent class="pokemon-card"  v-for="pokemon in allFavPokemon" :key="pokemon.id" :id="pokemon.id" :name="pokemon.name" :img="pokemon.sprites.front_default" />
        </div>
        <div class="pokemon-card__container" v-else>
            <h1>Cargando...</h1>
        </div>
        </div>



        <div class="pokemon-card__container" v-if="allFavPokemon.length === 0">
            <h1>No se encontraron resultados</h1>
        </div>
    </div>
</template>
<script>
import PokemonComponent from './PokemonComponent.vue';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'LikedComponent',

    data() {
        return {
            
        }
    },
    components: {
        PokemonComponent,
    },
    methods: {
        ...mapActions('getAllPokemon', ["getFavorites"]),
    },
    computed: {
        ...mapState('getAllPokemon', ['allFavPokemon', 'Loading' ])
    },

    mounted() {
        this.getFavorites();
    }
    
}
</script>
<style>
    
</style>