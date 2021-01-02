import SingleColumnLayout from '../../../components/layouts/single-column';
import Bulletin from '../../../components/bulletins/bulletin';
import { fetcher } from '../../../util/crud';

export async function getStaticProps({ params }) {
    const post = await fetcher('https://music-scene-api.herokuapp.com/api/bulletin_board/items/' + params.id);
    return { props: { post } };
}

export async function getStaticPaths() {
    const posts = await fetcher('https://music-scene-api.herokuapp.com/api/bulletin_board/items');

    return {
        paths: posts.map(post => ({
            params: {
                id: post.id.toString()
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