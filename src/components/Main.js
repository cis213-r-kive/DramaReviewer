import Card from './Card';

function Main() {
    return (
        <div>
            <div className="drama-cards">
                <Card 
                    img="https://koreanbinge.files.wordpress.com/2022/04/runon-poster.jpg?w=428"
                    alt="run-on poster"
                    title="Run On"
                />
                <Card 
                    img="https://koreanbinge.files.wordpress.com/2022/04/ourbelovedsummer-poster.jpg?w=427"
                    alt="run-on poster"
                    title="Our Beloved Summer"
                />
                <Card 
                    img="https://koreanbinge.files.wordpress.com/2022/04/poster-snowdrop.jpg?w=427"
                    alt="run-on poster"
                    title="Snowdrop"
                />       
            </div>
        </div>
    );
}

export default Main;