import Footer from '../components/Footer';

function NowPlaying() {

    // async function getNowPlaying() {
    
    //     try {
    //         const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=80d6b9230ce78ade0f28875feacec7e2&language=en-US&page=1`);
    //         const data = await response.json();
    //         setMovies(data.results)
    //         return data;
    
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <div>
            <div className="welcome-container">
                <h1>Welcome to the Kdrama Reviewer Hub</h1>
                <p>Explore Kdramas, from historical to the tear jerking ones we got them all. Interact with each drama by commenting and rating which one is your favorite!</p>
            </div>
            {/* 
            <div className={styles.nowPlaying}>
                <div className={styles.nowPlayingList}>
                    {
                        movies.map((movie) => (
                            <article key={movie.id} className={styles.card}>
                                <img className={styles.poster} src={movie.poster} alt={movie.title} />
                                <div className={styles.details}>
                                    <h3>
                                        <span>
                                            <span className={styles.rating}>{movie.rating}</span>
                                        </span>
                                        <span>{movie.release}</span>
                                    </h3>
                                    <h2 className={styles.title}>{movie.title}</h2>

                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
            */}
            

            <Footer />
        </div>
    );
}

export default NowPlaying;