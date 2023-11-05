<template lang="">
    <div>
    <header>
        <h1>APP</h1>
        <ul v-if="isLogged === 'true'">
            <a href="/">
                <li>Home</li>
            </a>
            <a href="/favorites">
                <li>Favoritos</li>
            </a>

            <a v-if="isLogged === 'true'" @click="HandleLogout">
                <li>Logout</li>
            </a>
        </ul>
  </header>
    </div>
</template>
<script>
export default {


    data() {
        return {
            isLogged: localStorage.getItem('isLogged'),
            user: localStorage.getItem('user'),
        }
    },

    methods: {
        HandleLogout() {
            localStorage.setItem('isLogged', false);
            localStorage.setItem('user', '');
            this.$router.push('/login');
        }
    },


}
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

header ul a li:hover{
    color: #267cfd;
}

/* Logout btn */
header ul a:last-child li{
    margin-left: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #fd2626;
    color: #f2f2f2;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
}

header ul a:last-child li:hover{
    background-color: #f2f2f2;
    color: #fd2626;
}

</style>