import React from 'react';
import styles from './panel.module.css'

const Panel = () => {
    return (
        <div className={styles.panelWidth}>
            <h1 className={styles.titlePanel}>Intocode Coding Shopcamp</h1>
            <div className={styles.shopCategories}>
                <div className={styles.gadgets}>Гаджеты и аксессуары</div>
                <hr className={styles.line1}/>
                <div className={styles.houseTehnick}>Бытовая техника</div>
                <hr className={styles.line2} />
                <div className={styles.others}>Прочее</div>
            </div>
        </div>
    );
};

export default Panel;