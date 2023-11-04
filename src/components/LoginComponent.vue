<template lang="">
    <div>
        <form action="submit">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="Contraseña" />
            <input type="submit" value="Iniciar sesión" />
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    /* Form Styles */

    form {
        width: 100%;
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 0 10px #ddd;
    }

    form input[type="email"],
    form input[type="password"] {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }


    form input[type="submit"] {
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