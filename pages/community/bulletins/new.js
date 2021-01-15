import SingleColumnLayout from '../../../components/layouts/single-column';
import {Provider, useSession} from 'next-auth/client'
import NewBulletin from '../../../components/bulletins/bulletin-form'
import SignUp from "../../../components/signup";


export async function getStaticProps() {
    const bulletinItemsEndpoint = `${process.env.API_URL}/bulletin_board/items/`
    return {props: {bulletinItemsEndpoint}}
}


export default function Page (props) {
    const [ session, loading ] = useSession()

    // When rendering client side don't display anything until loading is complete
    if (typeof window !== 'undefined' && loading) return null

    // If no session exists, display access denied message
    if (!session) { return  <SingleColumnLayout><SignUp/></SingleColumnLayout> }

    // If session exists, display content
    return (
        <Provider session={session} >
            <SingleColumnLayout>
                <NewBulletin bulletinItemsEndpoint={props.bulletinItemsEndpoint} session={session}/>
            </SingleColumnLayout>
        </Provider>

    )
}