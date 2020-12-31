import SingleColumnLayout from "../../../components/layouts/single-column";
import Bulletin from '../../../components/bulletins/bulletin';
import data from '../../../data/bulletins.json';

const { bulletins } = data;

export async function getStaticProps({ params }) {
    const bulletin = bulletins.find(b => b.id.toString() === params.id);

    return {
        props: {
            bulletin
        }

    };
}

export async function getStaticPaths() {
    return {
        paths: bulletins.map(bulletin => ({
            params: {
                id: bulletin.id.toString()
            }
        })),
        fallback: false
    };
}

const BulletinPage = ({ bulletin }) => (
    <SingleColumnLayout>
        <Bulletin bulletin={bulletin} />
    </SingleColumnLayout>
);

export default BulletinPage;