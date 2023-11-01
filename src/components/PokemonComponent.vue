<template lang="">
    <div class="pokemon_card" @click="showData">
        <img :src="img" :alt="name" />
        <h3>{{name}}</h3>
    </div>
</template>
<script>
export default {
    name: 'PokemonComponent',
    props: {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        }
    },

    methods: {
        async showData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`);
            const data = await response.json();

            console.log(data);
        }
    },
    
}
</script>
<style lang="">
    
</style>