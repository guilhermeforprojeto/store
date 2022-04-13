import { Image, Box, Button } from "@chakra-ui/react";

export default function Product(props) {
  return (
    <>
      <Box boxSize="sm" alignItems="center">
        <Image
          w="auto"
          h="auto"
          src="https://wallpapercave.com/wp/wp7200985.jpg"
          alt="ProdutoCod01"
        />
        <ul>Nome: Ford Mustang</ul>
        <ul>Preço R$ 356.000,00 </ul>
        <Button>Add to cart</Button>
        <ul>
          validação de estoque (caso não tenha estoque, remova a opção de
          adicionar ao carrinho). conter resumo
        </ul>
        <ul>Carro 0mk, ano 2021, completo</ul>
        <ul></ul>
      </Box>

      {props.children}
    </>
  );
}
