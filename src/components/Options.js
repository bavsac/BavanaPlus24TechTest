import React from 'react'
import styles from '../styles/Options.module.css'

export default function Options({optionsList, setSelectedOptions, setShowSelection}) {
    return (
        <div className={styles.Options}>
            <h2 className={styles.Options__title}>Please select your options,</h2>
      <ul className={styles.Options__list}>
        {optionsList.map((option) => {
          return (
            <div key={option.name} className={styles.Options__list}>
              <input
                type='checkbox'
                id={option.name}
                value={option.name}
                onClick={(event) => {
                  const selectedInput = event.target.id;

                  setSelectedOptions((currSelected) => {
                    let newOptionList = [...currSelected];
                    if (event.target.checked) {
                      newOptionList.push(event.target.value);
                    } else if (!event.target.checked) {
                      newOptionList = newOptionList.filter(
                        (option) => {
                          return option !== selectedInput;
                        }
                      );
                    }
                    return newOptionList;
                  });
                  setShowSelection(false);
                }}
              ></input>
              <li className={styles.Options__list}>{option.name}</li>
            </div>
          );
        })}
      </ul>  
        </div>
    )
}
