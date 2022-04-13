import { Image, Box } from "@chakra-ui/react";
import Product from "./Product";

export default function Products(props) {
  return (
    <>
      <Product>{props.children}</Product>
    </>
  );
}
