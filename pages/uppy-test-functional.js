import React, {useState} from 'react'
import Uppy from '@uppy/core'
import {DashboardModal, useUppy} from '@uppy/react'
import Transloadit from '@uppy/transloadit'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


function UppyFuncy({successCallback}) {
    const uppy = useUppy(() => {
        const _u = new Uppy({
            debug: true
        })
        _u.use(Transloadit, {
            service: 'https://api2.transloadit.com',
            params: {
                auth: {key: '45d26714e82643338d4db1ffadad4ae0'},
                template_id: '96f11ec7d74749e48c6a24524c49265b'
            }
        })
        _u.on("complete", result => {
            const url = result.successful[0].uploadURL
            console.log("successful upload", url, result)
            //TODO error checking
            successCallback(result.successful[0])
            _u.close()
        })
        return _u
    })

    return <div><DashboardModal uppy={uppy} open={true} hideProgressAfterFinish={true}/></div>
}

export default function UppyTester() {
    const [imageUrl, setImageUrl] = useState('')
    console.log('image URL is', imageUrl)
    const uploaderCallback = (results) => {
        setImageUrl(results.uploadURL)
    }

    return (<>
        {imageUrl && <img src={imageUrl} width={'50%'}/>}
        {!imageUrl && <UppyFuncy successCallback={uploaderCallback}/>}
    </>)
}

