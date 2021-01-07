import SingleColumnLayout from '../../../components/layouts/single-column';
import Bulletin from '../../../components/bulletins/bulletin';
import { fetcher } from '../../../util/crud';

export async function getStaticProps({ params }) {
    const post = await fetcher('http://dev.claremontmusicscene.com:8000/api/bulletin_board/items/' + params.id);
    return { props: { post } };
}

export async function getStaticPaths() {
    const posts = await fetcher('http://dev.claremontmusicscene.com:8000/api/bulletin_board/items');

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