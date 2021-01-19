import {DashboardModal, useUppy} from "@uppy/react";
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";


export default function UppyDashboardModal({successCallback}) {
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

    return <DashboardModal uppy={uppy} open={true} hideProgressAfterFinish={true}/>
}
