import SingleColumnLayout from '../../../components/layouts/single-column';
import {Provider, useSession} from 'next-auth/client'
import NewBulletin from '../../../components/bulletins/bulletin-form'
import SignUp from "../../../components/signup";


export async function getStaticProps() {
    const bulletinItemsEndpoint = `${process.env.API_URL}/bulletin_board/items/`
    return {props: {bulletinItemsEndpoint}}
}



export default function Page () {
    const [ session, loading ] = useSession()

    // Fetch content from protected route
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const res = await fetch('/api/examples/protected')
    //         const json = await res.json()
    //         if (json.content) { setContent(json.content) }
    //     }
    //     fetchData()
    // },[session])

    // When rendering client side don't display anything until loading is complete
    if (typeof window !== 'undefined' && loading) return null

    // If no session exists, display access denied message
    if (!session) { return  <SingleColumnLayout><SignUp/></SingleColumnLayout> }

    // If session exists, display content
    return (
        <Provider
            // Provider options are not required but can be useful in situations where
            // you have a short session maxAge time. Shown here with default values.
            options={{
                // Client Max Age controls how often the useSession in the client should
                // contact the server to sync the session state. Value in seconds.
                // e.g.
                // * 0  - Disabled (always use cache value)
                // * 60 - Sync session state with server if it's older than 60 seconds
                clientMaxAge: 0,
                // Keep Alive tells windows / tabs that are signed in to keep sending
                // a keep alive request (which extends the current session expiry) to
                // prevent sessions in open windows from expiring. Value in seconds.
                //
                // Note: If a session has expired when keep alive is triggered, all open
                // windows / tabs will be updated to reflect the user is signed out.
                keepAlive: 0
            }}
            session={session} >

            <SingleColumnLayout>
                <NewBulletin/>
            </SingleColumnLayout>
        </Provider>

    )
}