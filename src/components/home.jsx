import Layout from "./Layout";
import Footer from "./Layout/footer";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <Layout></Layout>
      <div>
        <Products></Products>
      </div>
      <Footer></Footer>
    </>
  );
}
