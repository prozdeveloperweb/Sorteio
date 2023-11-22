<script>
export default {
  name: 'Sorteio',
  data() {
    return {
      nomes: ['Jean', 'Luiza', 'Miguel', 'Tales', 'Otávio', 'Marcos', 'Matheus', 'Ana', 'Fillip', 'Nicole', 'De Paula'],
      nomeSelecionado: '',
      mensagemSorteio: 'Você saiu com: ',
      contador: 20,
    };
  },
  methods: {
    sortear() {
      // Sorteia um nome da array
      this.nomeSelecionado = this.nomes[Math.floor(Math.random() * this.nomes.length)];

      // Remove o nome sorteado da array
      this.nomes.splice(this.nomes.indexOf(this.nomeSelecionado), 1);

      this.mensagemSorteio = 'Você saiu com: ' + this.nomeSelecionado;

      // Inicia um contador de 20 segundos
      this.startCountdown();
    },
    startCountdown() {
      // Define um intervalo de 1 segundo para atualizar o contador
      this.interval = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    },
    updateCountdown() {
      // Decrementa o contador
      this.contador--;

      // Se o contador chegar a zero, redefine a mensagem de sorteio, oculta o contador e remove o nome sorteado da array
      if (this.contador === 0) {
        this.mensagemSorteio = 'Você saiu com: ';
        this.contador = 20;
        this.nomeSelecionado = '';
        clearInterval(this.interval);
      }
    },
  },
};
</script>

<template>
    <div class="containerSorteio">
        <button @click="sortear">Sortear</button>
        <span>{{ mensagemSorteio }}</span>
        <span>Espere o tempo acabar: {{ contador }}s</span>
    </div>
</template>

<style scoped lang="scss">
    .containerSorteio {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        transition: 0.5s ease;
    }

    span {
        font-size: 20px;
        color: #ffff;
        font-family: 'Poppins',sans-serif;
    }

    button {
        font-size: 22px;
        font-family: 'Poppins',sans-serif;
        background-color: #fff;
        color:  rgba(39, 39, 190, 0.815);
        padding: 5px 20px;
        border: 1px solid #000;
        cursor: pointer;
        transition: 0.5s ease;

        &:hover {
                transform: scale(1.05);
                box-shadow: 5px 5px 10px 1px #000000;
            }
    }
    .inputSelect {
        font-size: 18px;
        color: #fff;
        font-family: 'Poppins',sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        select {
            padding: 5px;
            font-size: 14px;
            font-family: 'Poppins',sans-serif;
        }
    }


</style>
