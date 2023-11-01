<template>
    <div class="pokemon_info_container">
        <h1>Informacion del pokemon</h1>
    </div>
    <div class="pokemon_card_container">
        <div class="pokemon_info_card">
            <img :src="pokemonImg" :alt="pokemonName" />
            <h3>{{ pokemonName }}</h3>

            <div class="pokemon_xp">
                <p>Experiencia base: {{ pokemonXp }}</p>
            </div>

            <div class="pokemon_type">
                <h5>{{ pokemonType }}</h5>
            </div>

            <div class="pokemon_order">
                <p>{{ pokemonOrder }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'InfoComponent',
    data() {
        return {
            pokemonName: '',
            pokemonImg: '',
            pokemonXp: '',
            pokemonOrder: '',
            pokemonType: '',
        };
    },
    mounted() {
        this.loadData();
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    },
    methods: {
        async loadData() {
            try {
                const data = JSON.parse(localStorage.getItem('pokemon'));

                if (data) {
                    this.pokemonName = data.name;
                    this.pokemonImg = data.sprites.front_default;
                    this.pokemonXp = data.base_experience;
                    this.pokemonOrder = data.order;
                    this.pokemonType = data.types[0].type.name;
                } else {
                    this.$router.push('/');
                }
            } catch (error) {
                console.error('Error al cargar datos:', error);
                this.$router.push('/');
            }
        },
    },
};
</script>
  
<style scoped></style>
  