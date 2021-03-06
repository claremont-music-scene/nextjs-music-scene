import SingleColumnLayout from '../../../components/layouts/single-column';
import {useSession} from 'next-auth/client'
import BulletinForm from '../../../components/bulletins/bulletin-form'
import SignUp from "../../../components/signup";
import {apiGetter} from "../../../util/server";

export async function getServerSideProps({ params }) {
    const postStyles = await apiGetter('/bulletin_board/styles/');
    return { props: { postStyles } };
}

export default function Page (props) {
    const [ session, loading ] = useSession()

    // When rendering client side don't display anything until loading is complete
    if (typeof window !== 'undefined' && loading) return null

    // If no session exists, display sign up / login view
    if (!session) { return  <SingleColumnLayout><SignUp/></SingleColumnLayout> }

    // If session exists, display content
    return (
            <SingleColumnLayout>
                <BulletinForm styleOptions={props.postStyles}/>
            </SingleColumnLayout>
    )
}