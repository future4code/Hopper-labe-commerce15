import React from "react";
import styled from 'styled-components';


const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`
const CardProdutos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  margin: 15px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const BotaoAdd = styled.button`
  width: 5vw;
  height: 6vh;
`

const Filtros = styled.div`
  display: flex;
  justify-content: center;
`;

const PesquisaNome = styled.input`
  width: 30vw;
  height: 2vw;
`;
const PesquisaValor = styled.input`
  width: 5vw;
`;

class Produtos extends React.Component {

  state = {
    arrayProdutos: [{

      id: 1,
      nomeProduto: 'Pelucia foguete e Astronauta',
      preco: 126.00,
      imgProd: <img src="https://m.media-amazon.com/images/I/517q-6xTC8L._AC_SL1200_.jpg" alt='imagem produto' width={400}></img>,
      carrinho: false
    },

    {
      id: 2,
      nomeProduto: 'Brinquedo Foguete e Astronauta',
      preco: 355.00,
      imgProd: <img src='https://images-americanas.b2w.io/produtos/2481494186/imagens/foguete-astronautas-fun-f0024-3/2481494186_1_xlarge.jpg' alt='imagem produto' width={350}></img>,
      carrinho: false
    },

    {
      id: 3,
      nomeProduto: 'Cápsula Espacial com Luz',
      preco: 93.00,
      imgProd: <img src='https://static.netshoes.com.br/produtos/capsula-espacial-com-luz-space-explorer-multikids-br1507/14/AH1-0582-014/AH1-0582-014_zoom1.jpg?ts=1642732935&' alt='imagem produto' width={350}></img>,
      carrinho: false
    },

    {
      id: 4,
      nomeProduto: 'Kit Espaço Sideral',
      preco: 74.00,
      imgProd: <img src='https://static.wixstatic.com/media/5bdf06_12c309f9a695484d9fef553dbde0ff04~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/5bdf06_12c309f9a695484d9fef553dbde0ff04~mv2.webp' alt='imagem produto' width={350}></img>,
      carrinho: false
    },

    {
      id: 5,
      nomeProduto: 'Astronauta Divertido',
      preco: 137.00,
      imgProd: <img src='https://m.media-amazon.com/images/I/716YwtE-ldL._AC_SL1500_.jpg' alt='imagem produto' width={300}></img>,
      carrinho: false
    },

    {
      id: 6,
      nomeProduto: 'Playset Missão Espacial',
      preco: 91.00,
      imgProd: <img src='https://xalingo.vteximg.com.br/arquivos/ids/157768-1000-1000/57043-missao-espacial-playset-xalingo-brinquedos.jpg?v=637707616631330000' alt='imagem produto' width={350}></img>,
      carrinho: false
    },

    {
      id: 7,
      nomeProduto: 'Conjunto Espaço Sideral - Torre de Comando',
      preco: 90.00,
      imgProd: <img src='https://images-americanas.b2w.io/produtos/4838201236/imagens/brinquedo-conjunto-espaco-sideral-torre-de-controle-r3174/4838201236_1_xlarge.jpg' alt='imagem produto' width={350}></img>,
      carrinho: false
    },

    {
      id: 8,
      nomeProduto: 'Conjunto Espaço Sideral - Team Rocket',
      preco: 159.00,
      imgProd: <img src='https://toymania.vteximg.com.br/arquivos/ids/964643-825-825/104503-a.jpg?v=637844146839930000' alt='imagem produto' width={350}></img>,
      carrinho: false
    },

    {
      id: 9,
      nomeProduto: 'Kit Massinha Espaço Sideral e Astronauta',
      preco: 136.00,
      imgProd: <img src='https://img.elo7.com.br/product/zoom/2B20C0A/kit-massinha-no-saquinho-espaco-sideral-astronauta-balinhas.jpg' alt='imagem produto' width={350}></img>,
      carrinho: false
    },

    {
      id: 10,
      nomeProduto: 'Astronauta blocos de construção',
      preco: 146.00,
      imgProd: <img src='https://images-americanas.b2w.io/produtos/4535830684/imagens/astronauta-blocos-de-construcao-kits-de-micro-predio-para-criancas-e-adultos-brinquedos-espaciais/4535830684_1_xlarge.jpg' alt='imagem produto' width={300}></img>,
      carrinho: false
    },
    {
      id: 11,
      nomeProduto: 'Tapete Infantil Astronauta',
      preco: 99.00,
      imgProd: <img src='https://global.cdn.magazord.com.br/vivadecor/img/2022/01/produto/41778/tapavg0162-1.jpg?ims=fit-in/560x560/filters:fill(fff)' alt='imagem produto' width={300}></img>,
      carrinho: false
    },
    {
      id: 12,
      nomeProduto: 'Cesto Para Brinquedos - Astronauta',
      preco: 98.00,
      imgProd: <img src='https://dmhxz00kguanp.cloudfront.net/fotos/151231/cestos-organizadores-para-brinquedos-astronauta-328529.jpg' alt='imagem produto' width={300}></img>,
      carrinho: false
    }],

    addCarrinho: '',
    searchName: '',
    searchNumberMax: 400.0,
    searchNumberMin: 0.0
  }

  onClickAdicionaCarrinho = () => {
    this.setState = ({
      carrinho: !this.state.carrinho,
      addCarrinho: this.state.carrinho + 1
    })

  }

  // -- Set de estados, à partir dos valores dos inputs
  nome = (event) => {
    this.setState({ searchName: event.target.value });
  };
  numeroMax = (event) => {
    this.setState({ searchNumberMax: event.target.value });
  };
  numeroMin = (event) => {
    this.setState({ searchNumberMin: event.target.value });
  };

  // -- Filtro de pesquisa, à partir do menor valor --
  valorCrescente = () => {
    const arrCopiada = [...this.state.arrayProdutos]
    const copiaMapeada = arrCopiada.map((produtos) => {
      return produtos
    })
    const ordenada = copiaMapeada.sort((a, b) => {
      if (a.preco > b.preco) {
        return 1
      }
      if (a.preco < b.preco) {
        return -1
      }
      return 0
    })
    this.setState({ arrayProdutos: ordenada })
  }

  // -- Filtro de pesquisa, à partir do maior valor --
  decrescente = () => {
    const arrCopiada = [...this.state.arrayProdutos]
    const arrCopiadaMapeada = arrCopiada.map((produtos) => {
      return produtos
    })
    const desordenada = arrCopiadaMapeada.sort((a, b) => {
      if (a.preco < b.preco) {
        return 1
      }
      if (a.preco > b.preco) {
        return -1
      }
      return 0
    })
    this.setState({ arrayProdutos: desordenada })
  }

  render() {

    let produtosFiltrados;

    produtosFiltrados = this.state.arrayProdutos.filter((produto) => {
      if (
        produto.nomeProduto.includes(this.state.searchName) &&
        produto.preco <= this.state.searchNumberMax &&
        produto.preco >= this.state.searchNumberMin
      ) {
        return true;
      }
      return false;
    });

    const naTela = produtosFiltrados.map((produto) => {
      return (
        <CardProdutos key={produto.id}>
          {produto.imgProd}
          <p>{produto.nomeProduto}</p>
          <p>
            <strong> R$: {produto.preco} </strong>
          </p>
          <BotaoAdd onClick={this.onClickAdicionaCarrinho}>Comprar</BotaoAdd>
        </CardProdutos>
      );
    });
    return (
      <div>
        <Filtros>
            <PesquisaNome
              type={"text"}
              value={this.state.searchName}
              placeholder={"Pesquise ..."}
              onChange={this.nome}
            />
            <PesquisaValor
              type={"number"}
              value={this.state.searchNumberMin}
              placeholder={"Valor Minimo"}
              onChange={this.numeroMin}
            />
            <PesquisaValor
              type={"number"}
              value={this.state.searchNumberMax}
              placeholder={"Valor Máximo"}
              onChange={this.numeroMax}
            />
          <button onClick={this.valorCrescente}>Menor Valor</button>
          <button onClick={this.decrescente}>Maior Valor</button>
        </Filtros>

        <MainContainer>{naTela}</MainContainer>
      </div>
    )
  }
}

export default Produtos;
