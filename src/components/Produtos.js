import React from "react";
import styled from styled - components;


class Produtos extends React.components {

    state = {
        arrayProdutos: [{

            id: 1,
            nomeProduto: 'Pelucia foguete e Astronauta',
            preco: 126.00,
            imgProd: 'https://m.media-amazon.com/images/I/517q-6xTC8L._AC_SL1200_.jpg',
        },

        {
            id: 2,
            nomeProduto: 'Brinquedo Foguete e Astronauta',
            preco: 355.00,
            imgProd: 'https://images-americanas.b2w.io/produtos/2481494186/imagens/foguete-astronautas-fun-f0024-3/2481494186_1_xlarge.jpg'
        },

        {
            id: 3,
            nomeProduto: 'Cápsula Espacial com Luz',
            preco: 93.00,
            imgProd: 'https://static.netshoes.com.br/produtos/capsula-espacial-com-luz-space-explorer-multikids-br1507/14/AH1-0582-014/AH1-0582-014_zoom1.jpg?ts=1642732935&'
        },

        {
            id: 4,
            nomeProduto: 'Kit Espaço Sideral',
            preco: 74.00,
            imgProd: 'https://static.wixstatic.com/media/5bdf06_12c309f9a695484d9fef553dbde0ff04~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/5bdf06_12c309f9a695484d9fef553dbde0ff04~mv2.webp'
        },

        {
            id: 5,
            nomeProduto: 'Astronauta Divertido',
            preco: 137.00,
            imgProd: 'https://m.media-amazon.com/images/I/716YwtE-ldL._AC_SL1500_.jpg'
        },

        {
            id: 6,
            nomeProduto: 'Playset Missão Espacial',
            preco: 91.00,
            imgProd: 'https://xalingo.vteximg.com.br/arquivos/ids/157768-1000-1000/57043-missao-espacial-playset-xalingo-brinquedos.jpg?v=637707616631330000'
        },

        {
            id: 7,
            nomeProduto: 'Conjunto Espaço Sideral - Torre de Comando',
            preco: 90.00,
            imgProd: 'https://images-americanas.b2w.io/produtos/4838201236/imagens/brinquedo-conjunto-espaco-sideral-torre-de-controle-r3174/4838201236_1_xlarge.jpg'
        },

        {
            id: 8,
            nomeProduto: 'Conjunto Espaço Sideral - Team Rocket',
            preco: 159.00,
            imgProd: 'https://toymania.vteximg.com.br/arquivos/ids/964643-825-825/104503-a.jpg?v=637844146839930000'
        },

        {
            id: 9,
            nomeProduto: 'Kit Massinha Espaço Sideral e Astronauta',
            preco: 136.00,
            imgProd: 'https://img.elo7.com.br/product/zoom/2B20C0A/kit-massinha-no-saquinho-espaco-sideral-astronauta-balinhas.jpg'
        },

        {
            id: 10,
            nomeProduto: 'Astronauta blocos de construção',
            preco: 146.00,
            imgProd: 'https://images-americanas.b2w.io/produtos/4535830684/imagens/astronauta-blocos-de-construcao-kits-de-micro-predio-para-criancas-e-adultos-brinquedos-espaciais/4535830684_1_xlarge.jpg'
        }],

    }

    // onChangeAdicionaCarrinho = () => {

    //     this.setState({ carrinho: })
    // }

    render() {

        const listaDeProdutos = this.state.arrayProdutos.map((produtos) => {
            return (
                <p>
                    {produtos.nomeProduto} - {produtos.preco} - {produtos.imgProd},
                </p>
            )
        })
            ;

        return (
            <div>
                <h1>Produtos</h1>
                <div>{listaDeProdutos}</div>
                <button>Adicionar</button >

            </div>
        )
    }
}


export default Produtos;


