<script>
import Sorteio from './Sorteio.vue'

export default {
  name: 'Login',
  components: {
    Sorteio
  },
  data() {
    return {
      usuario: "",
      senha: "",
      mensagemErro: "",
      h2mensagem: "Login Dev Proz",
      fezlogin: true,
      sorteioMostrar: false,
    };
  },
  methods: {
    realizarLogin() {
      if (this.usuario.trim() !== '' && this.senha.trim() !== '') {
      const credenciaisCorretas = this.usuario === 'jean' && this.senha === 'jeangostosao'; // Substitua por sua lógica real

      if (credenciaisCorretas) {
        this.fezlogin = false;
        this.sorteioMostrar = true;
        this.h2mensagem = 'Sorteio Amigo Oculto';
      } else {
        // Limpa a mensagem de erro se houver
        this.mensagemErro = "Credenciais incorretas.";
      }
    } else {
      // Se algum campo está vazio
      this.mensagemErro = "Por favor, preencha ambos os campos.";
    }
  },
},
}

</script>

<template>
  <div :style="{ width: clicou ? '400px' : '400px' }" class="containerLogin">
    <h2>{{ h2mensagem }}</h2>
    <form @submit.prevent="realizarLogin" v-if="fezlogin">
      <label for="usuario">Usuario</label>
      <div class="inputBox">
        <input type="text" name="usuario" id="usuario" placeholder="Digite seu usuário" v-model="usuario">
        <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="">
      </div>
      <label for="senha">Senha</label>
      <div class="inputBox">
        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" v-model="senha">
        <img src="https://cdn-icons-png.flaticon.com/512/181/181534.png" alt="">
      </div>
      <button type="submit">Entrar</button>
      <span class="mensagemErro">{{ mensagemErro }}</span>
    </form>

    <div v-show="sorteioMostrar">
      <slot name="Sorteio">
        <Sorteio/>
      </slot>
    </div>

  </div>
</template>

<style scoped>
  .containerLogin {
    border: 2px solid #ffffff;
    border-radius: 5px 0px 0px 5px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 70vh;
    font-family: sans-serif;
    background-color: rgba(39, 39, 190, 0.815);
    box-shadow: 5px 5px 10px 1px #000000;
    transition: 0.5s ease;
    width: 400px;
    max-width: 90vw;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    letter-spacing: 1.3px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    
  }

  form label {
    font-size: 20px;
  }

  .inputBox {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #fff7f7;
    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .inputBox input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #000000;
    font-size: 20px;
  }
  .inputBox input::placeholder {
    color: #1414149d;
  }
  .inputBox img {
    height: 100%;
    widows: auto;
  }

  form button {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    padding: 5px 30px;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 10px;
    transition: 0.5s ease;
  }
  button:hover {
    padding-right: 50px;
    background-color: #000;
    color: #fff;
  }

  .mensagemErro {
    font-size: 14px;
    color: red;
  }
</style>
