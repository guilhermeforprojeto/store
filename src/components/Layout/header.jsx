import styles from "../../styles/component/layout/header.module.css"

export default function Header(props){
    return(
        <div className={styles.body}>
            {props.title}
            {props.children}
            <button>Cart</button>
            
        </div>
    )
}