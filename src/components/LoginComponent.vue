<template lang="">
    <div class="login_form">
        <form action="submit" @submit="HandleSubmit" >
            <input type="email" placeholder="email" @input="HandleEmail"/>
            <input type="password" placeholder="Contraseña" @input="HandlePassword"/>
            <input type="submit" value="Iniciar sesión" />
        </form>
    </div>
</template>
<script>
export default {

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        HandleSubmit(e) {
            e.preventDefault();

            //verify if user exist
            let users = JSON.parse(localStorage.getItem('users'));

            let user = users.find((user) => user.email === this.email);

            if (user) {
                if (user.password === this.password) {
                    localStorage.setItem('user', this.email);
                    localStorage.setItem('isLogged', true);
                    this.$router.push('/');
                } else {
                    localStorage.setItem('isLogged', false);
                    alert('Contraseña incorrecta');
                }
            } else {
                localStorage.setItem('isLogged', false);
                alert('Usuario no encontrado');
            }

            
        },
        HandleEmail(e) {
            this.email = e.target.value;
        },
        HandlePassword(e) {
            this.password = e.target.value;

        },
    },
    
}
</script>
<style>
    /* Form Styles */

    .login_form form {
        width: 100%;
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 0 10px #ddd;
    }

    .login_form form input[type="email"],
    .login_form form input[type="password"] {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }


    .login_form form input[type="submit"] {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #267cfd;
        color: #f2f2f2;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
</style>