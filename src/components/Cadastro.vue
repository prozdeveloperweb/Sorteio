<script>
export default {
  name: 'Cadastro',
  data() {
    return {
      clicou: true,
      aparecer: false,
      user: '',
      email: '',
      pw: ''
    };
  },
  methods: {
    cadastroAparecer() {
      this.clicou = false;
      this.aparecer = true;
    },
  },
};

</script>

<template>
<div class="container" :style="{ width: clicou ? '300px' : '400px' }">
    <div class="preCadastro" v-show="clicou">
      <h2>Ainda não tem login?</h2>
      <button @click="cadastroAparecer">Cadastrar</button>
    </div>
    <form v-show="aparecer" @submit.prevent="enviarCadastro">
        <h2>Cadastro</h2>
        <div class="inputBox">
            <label for="user">Usuário</label>
            <input type="text" name="user" id="user" v-model="user" placeholder="Digite seu usuario">
        </div>
        <div class="inputBox">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="email" placeholder="Digite seu email">
        </div>
        <div class="inputBox">
            <label for="pw">Senha</label>
            <input type="text" name="pw" id="pw" v-model="pw" placeholder="Digite sua senha">
        </div>
        <button type="submit">Enviar</button>
    </form>
</div>
</template>

<style scoped lang="scss">

.container {
    background-color: #fff;
    height: 70vh;
    width: 300px;
    max-width: 80%;
    border-radius: 0px 5px 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins',sans-serif;
    transition: 0.5s ease;

    .preCadastro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: 0.5s ease;

    h2 {
        color: rgba(39, 39, 190, 0.815);
    }
    button {
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        color: #000;
        background: none;
        border: none;
        cursor: pointer;
        text-decoration: underline;
        letter-spacing: 1.4px;
    }
    }
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: 0.5s ease-in;
    width: 100%;

    h2 {
        color: rgba(39, 39, 190, 0.815);
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
    }
    .inputBox {
        display: flex;
        flex-direction: column;
        gap: 5px;

        input {
            background-color: rgb(39, 39, 190);
            color: #fff;
            padding: 10px 10px;
            width: 250px;
            border: 1px solid #000;
            border-radius: 5px;
            font-size: 18px;

            &::placeholder {
                color: #ffffffc0;
            }
        }
    }
    button {
            font-size: 24px;
            background-color: rgba(39, 39, 190, 0.815);
            border: 1px solid #000;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
            padding: 10px 30px;
            transition: 0.5s ease;

            &:hover {
                transform: scale(1.05);
                box-shadow: 5px 5px 10px 1px #000000;
            }
        }
}

</style>