<template lang="">
    <div class="pokemon_card" @dblclick="showData">
        <img :src="img" :alt="name" />
        <h3>{{name}}</h3>

        <font-awesome-icon :icon="['fas', 'heart']" class="heart-filled" v-if="Liked.includes(id)" @click="DislikePokemon"/>
        <font-awesome-icon :icon="['far', 'heart']" class="heart-filled" v-else @click="LikePokemon"/>


    </div>
</template>
<script>
export default {
    name: 'PokemonComponent',
    props: {
        name: {
            type: String,
        },
        id: {
            type: Number,
        },
        img: {
            type: String,
        }
    },
    data() {
        return {
            Liked: []
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

        LikePokemon() {
            if(this.Liked.includes(this.id)){
                alert('Ya te gusta este pokemon');
            }else{
                this.Liked.push(this.id);
                let userEmail = localStorage.getItem('user');
                let users = JSON.parse(localStorage.getItem('users'));
                let user = users.find((user) => user.email === userEmail);

                user.Liked.push(this.id);

                localStorage.setItem('users', JSON.stringify(users));
            }

        },

        DislikePokemon() {
            if (this.Liked.includes(this.id)) {
                let userEmail = localStorage.getItem('user');
                let users = JSON.parse(localStorage.getItem('users'));
                let user = users.find((user) => user.email === userEmail);
                let index = user.Liked.indexOf(this.id);

                user.Liked.splice(index, 1);

                localStorage.setItem('users', JSON.stringify(users));

                this.Liked.splice(index, 1);
            } else {
                alert('No te gusta este pokemon');
                
            }
        }
    },

    mounted() {
        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            let userEmail = localStorage.getItem('user');
            let user = users.find((user) => user.email === userEmail);
            this.Liked = user.Liked;
        }else{
            this.Liked = [];
        }
    }
}
</script>
<style>
.pokemon_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    padding-bottom: 0;
    width: 200px;
    height: 250px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f5f5f5;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
}

.pokemon_card:hover {

    background-color: #2bc3ff;
    transform: scale(1.3);
    transition: all 0.3s ease-in-out;
}

.pokemon_card img {
    width: 150px;
    height: 150px;
}

.pokemon_card h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    color: black;

}

.pokemon_card .heart-filled {
    font-size: 2rem;
    color: rgb(255, 39, 39);
}
</style>