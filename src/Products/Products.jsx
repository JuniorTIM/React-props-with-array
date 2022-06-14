import React from 'react';
import styles from '../Body/body.module.css'

const Products = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageBox}>
                <img className={styles.image} src={props.product.image} alt={props.product.name}/>
            </div>
            <div className={styles.textBox}>
                <div className={styles.name}>{props.product.name}</div>
                <p className={styles.price}>Цена: {props.product.price}P</p>
                <p className={styles.left}> В наличии: {props.product.left} шт</p>
            </div>
        </div>
    );
};

export default Products;