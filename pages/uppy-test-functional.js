import React, {useState} from 'react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import UppyDashboardModal from '../components/forms/uppy/dashboard-modal'


export default function UppyTester() {
    const [imageUrl, setImageUrl] = useState('')
    console.log('image URL is', imageUrl)
    const uploaderCallback = (results) => {
        setImageUrl(results.uploadURL)
    }

    return (<>
        {imageUrl && <img src={imageUrl} width={'50%'}/>}
        {!imageUrl && <UppyDashboardModal successCallback={uploaderCallback}/>}
    </>)
}

