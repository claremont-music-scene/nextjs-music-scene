import SingleColumnLayout from "../../../components/layouts/single-column";
import Bulletin from '../../../components/bulletins/bulletin';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export async function getStaticProps({ params }) {
    const post = await fetcher('https://music-scene-api.herokuapp.com/api/bulletin_board/items/' + params.id);
    return { props: { post } };

}

export async function getStaticPaths() {
    const posts = await fetcher('https://music-scene-api.herokuapp.com/api/bulletin_board/items');

    return {
        paths: posts.map((post, idx) => ({
            params: {
                id: post.id ? post.id.toString() : (idx + 1).toString() // need dynamic id
            }
        })),
        fallback: false
    };
}

const BulletinPage = ({ post }) => (
    <SingleColumnLayout>
        <Bulletin bulletin={post} />
    </SingleColumnLayout>
);

export default BulletinPage;