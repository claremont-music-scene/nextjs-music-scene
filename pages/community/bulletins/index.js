import BulletinList from '../../../components/bulletins/bulletin-list';
import Link from 'next/link';
import {apiGetter} from "../../../util/server";
import SectionPageLayout from "../../../components/layouts/section-page";


export async function getServerSideProps(context) {
    const posts = await apiGetter(`/bulletin_board/items/`);
    return {props: {posts}};
}

export default function Bulletins({ posts }) {
    return (
        <SectionPageLayout>
            <div>
                <Link href='/community/bulletins/new'>
                    <a>New bulletin</a>
                </Link>
            </div>
            <h1 className='text-green text-3xl w-28 bg-cream transform -rotate-12'>Bulletins</h1>
            <BulletinList bulletins={posts}/>
        </SectionPageLayout>
    );
}