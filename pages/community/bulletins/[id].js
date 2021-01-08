import SingleColumnLayout from '../../../components/layouts/single-column';
import Bulletin from '../../../components/bulletins/bulletin';
import { fetcher } from '../../../util/crud';


export async function getServerSideProps({ params }) {
    const post = await fetcher(`${process.env.API_URL}/bulletin_board/items/${params.id}`);
    return { props: { post } };
}

const BulletinPage = ({ post }) => (
    <SingleColumnLayout>
        <Bulletin bulletin={post} />
    </SingleColumnLayout>
);

export default BulletinPage;