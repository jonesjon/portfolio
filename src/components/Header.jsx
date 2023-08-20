import styles from './Header.module.css'

import logosvg from '../assets/logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logosvg} alt="Logo JV Digital Web" />
        </header>
    );
}