<template lang="">
    <div>
        <header>
    <h1>APP</h1>
    <ul v-if="isLogged">
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/favorites" >
        <li>Favoritos</li>
      </router-link>
      <a @click="HandleLogout">
        <li>Logout</li>
      </a>
    </ul>
  </header>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {

    data() {
        return {
            Logearse: false,
        };
    },

    methods: {
        ...mapActions('sessionModule', ['setLogged']),
        HandleLogout() {
            localStorage.setItem('isLogged', 'false');
            this.setLogged(false);
            this.$store.state.sessionModule.isLogged // Actualiza el estado localmente
            this.$router.push('/login');
        },
        handleStorageChange(event) {
            if (event.key === 'isLogged') {
                // Si la clave 'isLogged' cambió en el localStorage
                this.isLogged = event.newValue === 'true';
            }
        }
    },

    computed: {
        ...mapState('sessionModule', ['isLogged'])
    },

    mounted() {
        this.Logearse = this.$store.state.sessionModule.isLogged;
    },
};
</script>
<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

header h1 {
    font-size: 2rem;
    font-weight: 700;
}

header ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}

header ul li {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
}

header ul a li {
    text-decoration: none;
    color: #267cfd;

}

header ul a li:hover {
    color: #267cfd;
}

/* Logout btn */
header ul a:last-child li {
    margin-left: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #fd2626;
    color: #f2f2f2;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
}

header ul a:last-child li:hover {
    background-color: #f2f2f2;
    color: #fd2626;
}
</style>