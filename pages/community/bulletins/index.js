import SingleColumnLayout from "../../../components/layouts/single-column";
import BulletinList from '../../../components/bulletins/bulletin-list';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

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
            {<BulletinList bulletins={data} />}
        </SingleColumnLayout>
    );
}