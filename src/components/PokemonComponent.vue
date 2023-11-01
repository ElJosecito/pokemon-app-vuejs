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
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`);
                const data = await response.json();
                localStorage.setItem('pokemon', JSON.stringify(data));
                console.log(data);
                this.$router.push('/info');
            }
            catch (error) {
                console.error('Error al cargar datos:', error);
                this.$router.push('/');
            }
        },
    },

}
</script>
<style lang="">
    
</style>