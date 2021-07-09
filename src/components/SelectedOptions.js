import React from 'react';
import styles from '../styles/SelectedOptions.module.css'

const SelectedOptions = ({selectedOptions}) => {
    return selectedOptions.length>0?(
        <ul className={styles.SelectedOptions}>
        <h3>Your Selection is -</h3>
        {selectedOptions.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ul>
    ): null;
};

export default SelectedOptions;