import TabProvider from './_component/TabProvider';
import Tab from './_component/Tab';
import PostForm from './_component/PostForm';
import Post from '../_component/Post';
import style from './home.module.css';


export default function Home() {

    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post noImage={false} />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </main>
    )
}