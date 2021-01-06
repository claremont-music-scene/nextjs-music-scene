import SingleColumnLayout from "../../../components/layouts/single-column";
import BulletinList from '../../../components/bulletins/bulletin-list';
import {fetcher} from '../../../util/crud';
import Link from 'next/link';

export async function getServerSideProps(context) {
    const posts = await fetcher('https://music-scene-api.herokuapp.com/api/bulletin_board/items/');
    return {props: {posts}};
}

export default function Bulletins({posts}) {

    return (
        <SingleColumnLayout>
            <div>
                <Link href='/community/bulletins/new'>
                    <a>New bulletin</a>
                </Link>
            </div>
            <BulletinList bulletins={posts}/>
        </SingleColumnLayout>
    );
}