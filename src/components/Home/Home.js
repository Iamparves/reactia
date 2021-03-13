import Posts from '../../postData.json';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
    const posts = Posts;
    return (
        <main>
            <div className="container">
                {
                    posts.map(post => <Post post={post} key={post.id} />)
                }
            </div>
        </main>
    );
};

export default Home;