import React from "react"
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";
function Navigation(){
    return (
        <nav className={styles.nav}>
          <div><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></div>
          <div><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></div>
            <div><NavLink to="/users" activeClassName={styles.active}>Friends</NavLink></div>
          <div><NavLink to="/news" activeClassName={styles.active}>News</NavLink></div>
          <div><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></div>
          <div><NavLink to="/setting" activeClassName={styles.active}>Setting</NavLink></div>
        </nav>

    )
}
export default Navigation