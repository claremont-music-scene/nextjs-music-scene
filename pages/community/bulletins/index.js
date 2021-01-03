import SingleColumnLayout from "../../../components/layouts/single-column";
import BulletinList from '../../../components/bulletins/bulletin-list';
import { fetcher } from '../../../util/crud';
import useSWR from 'swr';
import Link from 'next/link';

export async function getStaticProps() {
    const posts = await fetcher('https://music-scene-api.herokuapp.com/api/bulletin_board/items/');
    return { props: { posts } };
}

export default function Bulletins(props) {
    const { data, error } = useSWR('https://music-scene-api.herokuapp.com/api/bulletin_board/items/', fetcher, { initialData: props.posts });

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

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