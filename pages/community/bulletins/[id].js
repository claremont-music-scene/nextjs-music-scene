import SingleColumnLayout from '../../../components/layouts/single-column';
import Bulletin from '../../../components/bulletins/bulletin';
import {apiGetter} from "../../../util/server";


export async function getServerSideProps({ params }) {
    const post = await apiGetter(`/bulletin_board/items/${params.id}`);
    return { props: { post } };
}

const BulletinPage = ({ post }) => (
    <SingleColumnLayout>
        <Bulletin bulletin={post} />
    </SingleColumnLayout>
);

export default BulletinPage;