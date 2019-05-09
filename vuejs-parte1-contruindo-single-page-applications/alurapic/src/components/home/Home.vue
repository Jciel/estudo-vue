
<template>
    <div class="corpo">
        <h1 class="centralizado">{{ titulo }}</h1>

        <input v-model="filtro" type="search" class="filtro" placeholder="filtre">
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto in fotosFiltro">


                <meu-painel :titulo="foto.titulo">

                    <imagem-responsiva :url="foto.url" :tituli="foto.titulo"></imagem-responsiva>

                    <meu-botao
                        @botaoAtivado="remove(foto)"
                        tipo="button"
                        rotulo="REMOVER"
                        :confirmacao="true"
                        estilo="padrao">
                    </meu-botao>

                </meu-painel>



            </li>
        </ul>

    </div>
</template>

<script>

    import Painel from '../shared/painel/Painel';
    import ImagemResponsiva from  '../shared/imagem-responsiva/ImagemResponsiva';
    import Botao from '../shared/botao/Botao';

    export default {

        components: {
            'meu-painel': Painel,
            'imagem-responsiva': ImagemResponsiva,
            'meu-botao': Botao
        },

        data() {
            return {
                titulo: 'Alurapic',

                fotos: [],

                filtro: ''
            }
        },

        computed: {
            fotosFiltro() {
                if (this.filtro) {
                    let exp = new RegExp(this.filtro.trim(), 'i');

                    return this.fotos.filter(foto => exp.test(foto.titulo));
                }
                return this.fotos;
            }
        },

        created() {
            this.$http.get("http://localhost:3000/v1/fotos")
                .then(res => res.json())
                .then(fotos => this.fotos = fotos,
                    err => console.log(err));
        },

        methods: {

            remove(foto) {

                alert("remover a foto" + foto.titulo);

            }

        }

    }
</script>

<style lang="scss">



    .centralizado {
        text-align: center;
    }

    .lista-fotos {
        list-style: none;
    }

    .lista-fotos .lista-fotos-item {
        display: inline-block;
    }

    .filtro {
        display: block;
        width: 100%;
    }
</style>
