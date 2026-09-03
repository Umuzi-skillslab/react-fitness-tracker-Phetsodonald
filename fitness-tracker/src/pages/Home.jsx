import Header from '../components/common/Header';
import Card from '../components/UI/Card';
import AudioPlayer from '../components/Media/AudioPlayer';

const Home = () => {
    return (
        <>
            <Header title="Build your routine. Track your progress" subtitle="A simple workout planner for consistent training."/>
            <div className='heroGrid'>
                <Card title="Explore">
                    <p>
                        Browse 25 sample exercises by category, muscle group, and difficulity.
                    </p>
                </Card>
                <Card title="Plan">
                    <p>Assign exercises across Monday to sunday.</p>
                </Card>
                <Card title="Track">
                    <p>Log workouts and review activity over time.</p>
                </Card>
            </div>
            <AudioPlayer audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" title="Motivation track" description="Use the controls to play or pause."/>

        </>
    )
}

export default Home;