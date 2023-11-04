<template lang="">
    <section>
        <div class="title-container">
            <h1>Lista de Pokemon</h1>
            <form action="submit" @submit="HandleSubmit">
                <input type="text" placeholder="Buscar pokemon" :value="pokemonName" @input="HandleChange" />
                <input type="submit" value="Buscar"/>
            </form>
        </div>
        
        <div class="pokemon-card__container">
            <PokemonComponent class="pokemon-card" v-for="pokemon in allPokemon" :key="pokemon.id" :id="pokemon.id" :name="pokemon.name" :img="pokemon.sprites.front_default" />
        </div>

        <div class="buttons__container">
            <button @click="decrementCounter">BACK</button>
            <button @click="incrementCounter">NEXT</button>
        </div>
    </section>
</template>
<script>
import PokemonComponent from './PokemonComponent.vue';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'HomeComponent',
    data() {
        return {
            pokemonName: '',
        }
    },
    components: {
        PokemonComponent,
    },
    methods: {
        HandleChange(e) {
            this.pokemonName = e.target.value;
        },
        HandleSubmit(e) {
            e.preventDefault();
            // console.log(this.pokemonName);
            if (this.pokemonName === '') {
                this.getAllPokemon();
            } else {
                this.searchPokemon(this.pokemonName);
            }
        },
        ...mapActions('getAllPokemon', ['getAllPokemon', 'searchPokemon', 'incrementCounter', 'decrementCounter']),
    },

    computed: {
        ...mapState('getAllPokemon', ['allPokemon', 'counter', 'Fcounter'])
    },
    mounted() {
        this.getAllPokemon();
    },

}
</script>
<style>

/* Title */
.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 50px 0;
}

.title-container h1 {
    font-size: 32px;
    font-weight: 600;
}

.title-container form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title-container form input[type="text"] {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: 600;
}

.title-container form input[type="submit"] {
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #267cfd;
    color: #f2f2f2;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

.title-container form input[type="submit"]:hover {
    background-color: #f2f2f2;
    color: black;
}

.title-container form input[type="text"]:focus {
    outline: none;
}


/* Pokemon Card */

.pokemon-card__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
}

/* Buttons */
.buttons__container{
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0px 100px 40px 0;
}

.buttons__container button {
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
}

.buttons__container button:hover {
    background-color: #267cfd;
    color: #f2f2f2;
}

</style>