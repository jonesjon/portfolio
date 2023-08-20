import styles from '../components/Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/jonesjon.png" />
                    <div className={styles.authorInfo}>
                        <strong>
                            João Victor
                        </strong>
                        <span>
                            Computer Engineer
                        </span>
                    </div>
                </div>

                <time title="20 de Agosto às 14:40" dateTime="2023-08-20 14:40:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Teste</p>
                <p><a>Teste 1</a></p>
                <p>Teste 2</p>
                <p><a>Teste 3</a></p>
            </div>
        </article>
    );
}