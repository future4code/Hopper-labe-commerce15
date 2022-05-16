import React from "react";
import styled from 'styled-components';
import Delete from '../assets/Delete.svg'

const MainContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5vw;
`
const CardProdutos = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  img {
    width: 15vw;
    height: 15vw;
  }
`

const BotaoAdd = styled.button`
  padding: 10px;
`

const Filtros = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Destaque = styled.div`
   height: 200px;
   margin-bottom: 20px;
   border: 1px solid black;
   width: 70vw;
`;

const PrecoDestaque = styled.p`
  font-size: 35px;
  font-weight: bold;
`;

const ProdutoDestaque = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 30px;
  img {
    height: 100px;
  }
  align-items: center;
  justify-content: center;
`;

const PesquisaNome = styled.input`
  width: 30vw;
  height: 2vw;
`;
const PesquisaValor = styled.input`
  width: 5vw;
`;
const ContainerCarrinho = styled.div`

`;
const Carrinho = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:baseline;
  justify-content: space-between;
`;
const DadosCarrinho = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
`;
const ProdutosECarrinho = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const Promocao = styled.input`
  padding: 0.5rem;
  width: 75%;
`;
class Produtos extends React.Component {

  state = {
    arrayProdutos: [{

      id: 1,
      nomeProduto: 'Pelucia foguete e Astronauta',
      preco: 126.00,
      imgProd: <img src="https://m.media-amazon.com/images/I/517q-6xTC8L._AC_SL1200_.jpg" alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 2,
      nomeProduto: 'Brinquedo Foguete e Astronauta',
      preco: 355.00,
      imgProd: <img src='https://images-americanas.b2w.io/produtos/2481494186/imagens/foguete-astronautas-fun-f0024-3/2481494186_1_xlarge.jpg' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 3,
      nomeProduto: 'Cápsula Espacial com Luz',
      preco: 93.00,
      imgProd: <img src='https://static.netshoes.com.br/produtos/capsula-espacial-com-luz-space-explorer-multikids-br1507/14/AH1-0582-014/AH1-0582-014_zoom1.jpg?ts=1642732935&' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 4,
      nomeProduto: 'Kit Espaço Sideral',
      preco: 74.00,
      imgProd: <img src='https://static.wixstatic.com/media/5bdf06_12c309f9a695484d9fef553dbde0ff04~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/5bdf06_12c309f9a695484d9fef553dbde0ff04~mv2.webp' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 5,
      nomeProduto: 'Astronauta Divertido',
      preco: 137.00,
      imgProd: <img src='https://m.media-amazon.com/images/I/716YwtE-ldL._AC_SL1500_.jpg' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 6,
      nomeProduto: 'Playset Missão Espacial',
      preco: 91.00,
      imgProd: <img src='https://xalingo.vteximg.com.br/arquivos/ids/157768-1000-1000/57043-missao-espacial-playset-xalingo-brinquedos.jpg?v=637707616631330000' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 7,
      nomeProduto: 'Conjunto Espaço Sideral - Torre de Comando',
      preco: 90.00,
      imgProd: <img src='https://images-americanas.b2w.io/produtos/4838201236/imagens/brinquedo-conjunto-espaco-sideral-torre-de-controle-r3174/4838201236_1_xlarge.jpg' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 8,
      nomeProduto: 'Conjunto Espaço Sideral - Team Rocket',
      preco: 159.00,
      imgProd: <img src='https://toymania.vteximg.com.br/arquivos/ids/964643-825-825/104503-a.jpg?v=637844146839930000' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 9,
      nomeProduto: 'Kit Massinha Espaço Sideral e Astronauta',
      preco: 136.00,
      imgProd: <img src='https://img.elo7.com.br/product/zoom/2B20C0A/kit-massinha-no-saquinho-espaco-sideral-astronauta-balinhas.jpg' alt='imagem produto' ></img>,
      carrinho: false
    },

    {
      id: 10,
      nomeProduto: 'Astronauta blocos de construção',
      preco: 146.00,
      imgProd: <img src='https://images-americanas.b2w.io/produtos/4535830684/imagens/astronauta-blocos-de-construcao-kits-de-micro-predio-para-criancas-e-adultos-brinquedos-espaciais/4535830684_1_xlarge.jpg' alt='imagem produto' ></img>,
      carrinho: false
    },
    {
      id: 11,
      nomeProduto: 'Tapete Infantil Astronauta',
      preco: 99.00,
      imgProd: <img src='https://global.cdn.magazord.com.br/vivadecor/img/2022/01/produto/41778/tapavg0162-1.jpg?ims=fit-in/560x560/filters:fill(fff)' alt='imagem produto' ></img>,
      carrinho: false
    },
    {
      id: 12,
      nomeProduto: 'Cesto Para Brinquedos - Astronauta',
      preco: 98.90,
      imgProd: <img src='https://dmhxz00kguanp.cloudfront.net/fotos/151231/cestos-organizadores-para-brinquedos-astronauta-328529.jpg' alt='imagem produto' ></img>,
      carrinho: false
    }],

    order: '',
    addCarrinho: [],
    searchName: '',
    searchNumberMax: 500.0,
    searchNumberMin: 1.00,
    promo: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.addCarrinho !== this.state.addCarrinho) {
      localStorage.setItem("CarrinhoLS", JSON.stringify(this.state.addCarrinho));
    }
  }

  componentDidMount() {
    const produtoSalvo = localStorage.getItem("CarrinhoLS");
    this.setState({ addCarrinho: JSON.parse(produtoSalvo) || [] });
  }

  onClickAdicionaCarrinho = (id) => {
    const salvarProduto = this.state.addCarrinho.find((produto) => id === produto.id)
      if(salvarProduto){
        const novoCarrinho = this.state.addCarrinho.map((produto) => {
          if(id === produto.id){
            return{
              ...produto, quantidade: produto.quantidade + 1
            }
          }
          return produto
        })
        this.setState({addCarrinho: novoCarrinho})
      } else {
        const item = this.state.arrayProdutos.find((produto) => id === produto.id);
        const novoCarrinho = [...this.state.addCarrinho, {...item, quantidade: 1}]
        this.setState({ addCarrinho: novoCarrinho })
      }
    }
    removeItem = (id) => {
      const carrinhoAtualizado = this.state.addCarrinho
      .map((produto) => {
        if (produto.id === id){
          return{
            ...produto, quantidade: produto.quantidade -1
          }
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0)
      this.setState({addCarrinho: carrinhoAtualizado})
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
  getOrder = (event) => {
    this.setState({order: event.target.value})
  }
  promocao = (event) => {
    this.setState({promo: event.target.value})
  }
  comprar = () => {
    this.setState({addCarrinho: []})
  }
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

  valorTotal = () => {
    let valorDaCompra = 0;
    for (let produto of this.state.addCarrinho) {
      valorDaCompra += produto.quantidade * produto.preco;
    }
    if (this.state.promo.toUpperCase() === "LABE15") {
      const desconto = valorDaCompra * 0.15; 
      return (valorDaCompra -= desconto);
    }
    return valorDaCompra;
  };


  render() {

    let produtosFiltrados;

    produtosFiltrados = this.state.arrayProdutos.filter((produto) => {
      if (
        produto.nomeProduto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(this.state.searchName.toLowerCase()) &&
        produto.preco <= this.state.searchNumberMax &&
        produto.preco >= this.state.searchNumberMin
      ) {
        return true;
      } else if (
        produto.nomeProduto
        .toLowerCase()
        .includes(this.state.searchName.toLowerCase()) &&
        produto.preco <= this.state.searchNumberMax &&
        produto.preco >= this.state.searchNumberMin
      ) {
        return true
      }
      return false;
    })
    .sort((previus, next) => {
      switch(this.state.order) {
        case 'Asc':
          return previus.nomeProduto.localeCompare(next.nomeProduto);
        case 'Desc':
          return next.nomeProduto.localeCompare(previus.nomeProduto);
        case 'ValAsc':
          return previus.preco - next.preco;
        case 'ValDesc':
          return next.preco - previus.preco;
        default:
          return false;
      }
    })

    const naTela = produtosFiltrados.map((produto) => {
      return (
        <CardProdutos key={produto.id}>
          {produto.imgProd}
          <p>{produto.nomeProduto}</p>
          <p>
            <strong> R$: {produto.preco.toFixed(2).toString().replace(".", ",")} </strong>
          </p>
          <BotaoAdd onClick={() => this.onClickAdicionaCarrinho(produto.id)}>Comprar</BotaoAdd>
        </CardProdutos>
      );
    });

    const index = Math.floor(Math.random() * this.state.arrayProdutos.length)
    const produtoDestaque = this.state.arrayProdutos[index];

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
            <select value={this.state.order} onChange={this.getOrder}>
              <option value=''>Ordenação</option>
              <option value='Asc'>Nome Crescente</option>
              <option value='Desc'>Nome Decrescente</option>
              <option value='ValAsc'>Valor Crescente</option>
              <option value='ValDesc'>Valor Decrescente</option>
            </select>
        </Filtros>
        <ProdutosECarrinho>
          <MainContainer>
            <Destaque>
              <strong>Destaque</strong>
              <ProdutoDestaque>
                {produtoDestaque.imgProd}
                <div>
                  {produtoDestaque.nomeProduto}
                  <PrecoDestaque>R$ {produtoDestaque.preco.toFixed(2).toString().replace(".", ",")}</PrecoDestaque>
                </div>
                <BotaoAdd onClick={() => this.onClickAdicionaCarrinho(produtoDestaque.id)}>Comprar</BotaoAdd>
              </ProdutoDestaque>
            </Destaque>
            {naTela}
            </MainContainer>
          <ContainerCarrinho>
            <strong>Carrinho de Compras:</strong>
            {this.state.addCarrinho.map((produto) => {
              return(
                <Carrinho key={produto.id}>
                  <DadosCarrinho >
                    <div>  
                      <p><strong>{produto.quantidade}x{' '}{produto.nomeProduto}</strong></p>
                    </div>
                    <div>
                      <img width='30' src={Delete} alt='Lixeira para remover o produto' onClick={() => this.removeItem(produto.id)}/>
                    </div>
                  </DadosCarrinho>
                </Carrinho>
              )
            })}
            <div>
              <Promocao 
              placeholder="Digite seu cupom aqui..."
              type="text" 
              value={this.state.promo} 
              onChange={this.promocao}/>
            </div>

            <p>
              Valor Total: R$:{''}
              {this.valorTotal().toFixed(2).toString().replace(".", ",")}
            </p>

            <button onClick={this.comprar}>Efetuar Compra</button>
          </ContainerCarrinho>
        </ProdutosECarrinho>
      </div>
    )
  }
}

export default Produtos;
