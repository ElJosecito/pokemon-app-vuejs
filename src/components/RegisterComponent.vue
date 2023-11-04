<template lang="">
    <div class="register_form">
        <form action="submit" @submit="HandleSubmit" >
            <input type="email" placeholder="email" @input="HandleEmail"/>
            <input type="password" placeholder="Contraseña" @input="HandlePassword" />
            <input type="password" placeholder="Confirmar Contraseña" @input="HandleConfirmPassword"/>
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
            confirmPassword: '',
        }
    },

    methods: {
        HandleSubmit(e) {
            e.preventDefault();

            // set user to localstorage
            let user = {
                email: this.email,
                password: this.password,
                Liked: [],
            }

            // push user to users array
            let users = JSON.parse(localStorage.getItem('users'));

            users.push(user);

            localStorage.setItem('users', JSON.stringify(users));
        },
        HandleEmail(e) {
            this.email = e.target.value;
        },
        HandlePassword(e) {
            this.password = e.target.value;

        },

        HandleConfirmPassword(e) {
            this.confirmPassword = e.target.value;
        },
    },

    mounted() {
        // made users array localstorage
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
    }

}
</script>
<style>
    /* register form styles */

    .register_form form {
        width: 100%;
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 0 10px #ddd;
    }

    .register_form form input[type="email"],
    .register_form form input[type="password"] {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }

    .register_form form input[type="submit"] {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #267cfd;
        color: #f2f2f2;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }

    .register_form form input[type="submit"]:hover {
        background-color: #f2f2f2;
        color: black;
    }

    .register_form form input[type="email"]:focus,
    .register_form form input[type="password"]:focus {
        outline: none;
    }
    
</style>