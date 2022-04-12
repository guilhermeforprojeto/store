import Layout from "./Layout";
import Footer from "./Layout/footer";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <Layout></Layout>
      <div className="products">
        <Products>
          <ul>
            <li>o preço</li>
            <li>descrição</li>
            <li>nome do produto</li>
            <li>botões para adicionar ao carrinho</li>
            <li>validação de estoque (caso não tenha estoque</li>
            <li>
              validação de estoque (caso não tenha estoque, remova a opção de
              adicionar ao carrinho)
            </li>
            <li>conter resumo</li>
            <li>Deve ter uma imagem de sua escolha.</li>
          </ul>
        </Products>
      </div>
      <Footer></Footer>
    </>
  );
}
