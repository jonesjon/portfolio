import { GitBranch } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/jonesjon.png" />

                <strong>João Victor</strong>
                <span>Computer Engineer</span>
                <span>Web Developer</span>
            </div>

            <footer>
                
                <a href="https://github.com/jonesjon"><GitBranch size={24} />GitHub Profile</a>
            </footer>
        </aside>
    );
}