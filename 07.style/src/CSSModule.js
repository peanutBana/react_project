import React from 'react';
import styles from './CSSModule.moudle,css'

const CSSModule = () => {
    console.log(styles);
    return (
        <div className={styles.wrapepr}>
            안녕하세요 . 저는 <span className='something'>css module</span>
        </div>
    );
}

export default CSSModule;
