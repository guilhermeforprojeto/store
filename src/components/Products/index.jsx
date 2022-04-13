import Product from "./Product";

export default function Products(props) {
  return (
    <>
      <Product>{props.children}</Product>
    </>
  );
}
