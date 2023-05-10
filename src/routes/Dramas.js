import DramaCard from '../components/DramaCard';
import Footer from '../components/Footer';

function Dramas(){
    return (
        <div>
            <h1>Welcome to the DRAMA SECTION</h1>
            <p>
                Feel free to explore the latest and greatest Kdramas
            </p>
           
           <div>
                <DramaCard 
                    title="Run On"
                    info="2020 | 16 episodes | MyDramaList"
                    img="https://koreanbinge.files.wordpress.com/2022/04/runon-poster.jpg?w=428"
                    alt="Run On Poster"
                    description="Ki Seon-Gyeom was once a popular sprinter for the national team. Due to a case, he quit the sport. He then begins to work as a sports agent. Meanwhile, Oh Mi-Joo writes subtitle translations for movies. She was thrilled when she first she her name as a translator during the end credits. She meets Ki Seon-Gyeom, who just quit being a sprinter. She feels they were destined to meet."
                    vid="https://www.youtube.com/embed/KVsok-tMcYw"
                    category="Romance | Sports | Drama"
                />
                <DramaCard 
                    title="Our Beloved Summer"
                    info="2021 | 16 episodes | MyDramaList"
                    img="https://koreanbinge.files.wordpress.com/2022/04/ourbelovedsummer-poster.jpg?w=427"
                    alt="Our Beloved Summer Poster"
                    description="Choi Ung (Choi Woo-Sik) and Kook Yeon-Su (Kim Da-Mi) broke up 5 years ago. A documentary they filmed during their high school days becomes popular. They don’t want to, but they have to stand in front of the camera."
                    vid="https://www.youtube.com/embed/wpW6aVWgvMc"
                    category="Romance | Coming-of-Age"
                />
                <DramaCard 
                    title="Snowdrop"
                    info="2021 | 16 episodes | MyDramaList"
                    img="https://koreanbinge.files.wordpress.com/2022/04/poster-snowdrop.jpg?w=427"
                    alt="Snowdrop Poster"
                    description="Set in 1987, when South Korea was governed by a dictatorial government.Graduate student Lim Soo-Ho (Jung Hae-In) is covered in blood and he jumps into the female dormitory at Hosu Women’s University. Eun Yeong-Ro (Kim Ji-Soo) finds him and helps to hide him. They develop a romantic relationship."
                    vid="https://www.youtube.com/embed/5j0jtb7yR5o"
                    category="Romance | Action | Melodrama"
                />
                <DramaCard 
                    title="Alchemy of Souls"
                    info="2022 | 30 episodes | MyDramaList"
                    img="https://asianwiki.com/images/a/a9/Alchemy_of_Souls-p1.jpg"
                    alt="Run On Poster"
                    description="The fate of these people become twisted due to hwanhonsool the soul of the dead return to the living.
                    
                    In the country of Daeho, Jang Uk (Lee Jae-Wook) comes from the noble Jang family. He holds an unpleasant secret about his birth, which people all around the country talk about. He is troublemaker. Jang Ukk happens to meet Mu-Deok (Jung So-Min). She is an elite warrior, but her soul is trapped in a physically weak body. She becomes Jang Wook’s servant, but she also secretly teaches him how to fight.
"
                    vid="https://www.youtube.com/embed/50kLmhGpt1s"
                    category="Romance | Action | Fantasy"
                />
                <DramaCard 
                    title="The Glory"
                    info="2022 | 16 episodes | MyDramaList"
                    img="https://asianwiki.com/images/e/e5/The_Glory-p2.jpg"
                    alt="The Glory Poster"
                    description="A high school student dreamed of one day working as an architect. She became a victim of high school violence perpetrated by her fellow students. She dropped out of high school because of the bullying. She then planned revenge on her tormentors and also the bystanders who did nothing.

                    That student is now an adult. She has waited for the leader of her tormentors to get married and have a child. That child is now an elementary school student. The women who was once a victim of school violence, is now the homeroom teacher of her tormentor's child. Her cruel revenge plot begins in earnest."
                    vid="https://www.youtube.com/embed/tqVVrTvrI8U"
                    category="Romance | Thriller | Melodrama"
                />
           </div>

           <Footer />
        </div>
    );
}

export default Dramas;