import Header from "./header";
import Footer from "./footer";

import styles from "../../styles/component/layout/layout.module.css";
import Products from "../Products";

export default function Layout() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.header}>
          <Header title="Successfull Store(Layout)"></Header>
        </div>
      </div>
    </>
  );
}
