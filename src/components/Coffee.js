import React from 'react'
import styles from '../styles/Coffee.module.css'

export default function Coffee({showSelection}) {
    return showSelection ? (
        <div className={styles.Coffee} id='coffee-made'>
          <img src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80' alt='Enjoy your coffee'></img>
          <div className={styles.Coffee__made}>
            <p>
              Enjoy your coffee
            </p>
          </div>
        </div>
      ) : null;
}
