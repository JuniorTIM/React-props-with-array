import React from 'react';
import styles from './body.module.css'
import Products from '../Products/Products';
import products from '../Products/Array'

const Body = (props) => {
    return (
        <div className={styles.cards}>
            {products.map(product => {
                return (
                    <Products 
                    key={product.id}
                    product={product}
                    />
                )
            })}
        </div>
    );
};

export default Body;