import SingleColumnLayout from "../../../components/layouts/single-column";
import BulletinList from '../../../components/bulletins/bulletin-list';
import { fetcher } from '../../../util/crud';
import useSWR from 'swr';
import Link from 'next/link';

export async function getStaticProps() {
    const posts = await fetcher('http://local.music-scene-data.com:8000/api/bulletin_board/items/');
    return { props: { posts } };
}

export default async function Bulletins(props) {
    /*const { data, err } = useSWR('http://local.music-scene-data.com:8000/api/bulletin_board/items/', fetcher, { initialData: props.posts });

    if (err) {
        console.log('Error fetching: ', err);
        return <div>failed to load</div>;
    }
    if (!data) return <div>loading...</div>
    */

    const data = fetcher('http://local.music-scene-data.com:8000/api/bulletin_board/items/');
    console.log(data)

    return (
        <SingleColumnLayout>
            <div>
                <Link href='/community/bulletins/new'>
                    <a>New bulletin</a>
                </Link>
            </div>
            <BulletinList bulletins={data} />
        </SingleColumnLayout>
    );
}