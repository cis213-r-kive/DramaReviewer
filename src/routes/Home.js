import Main from '../components/Main';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <div className="welcome-container">
                <h1>Welcome to the Kdrama Reviewer Hub</h1>
                <p>Explore Kdramas, from historical to the tear jerking ones we got them all. Interact with each drama by commenting and rating which one is your favorite!</p>
            </div>

            <h2 className="reco">Our Recommended</h2>
            <Main />
            <Footer />
        </div>
    );
}

export default Home;