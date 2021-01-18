import React from 'react'
import Uppy from '@uppy/core'
import { DashboardModal, useUppy } from '@uppy/react'
import Transloadit from '@uppy/transloadit'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


class DashboardTester extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            modalOpen: false
        }
        //TODO move creds out
        console.log("init Uppy")
        this.uppy = new Uppy()
            .use(Transloadit, {
            service: 'https://api2.transloadit.com',
            params: {
                // To avoid tampering, use Signature Authentication
                auth: { key: '45d26714e82643338d4db1ffadad4ae0' },
                template_id: '96f11ec7d74749e48c6a24524c49265b'
            }
            // waitForEncoding: false,
            // waitForMetadata: false,
            // importFromUploadURLs: false,
            // alwaysRunAssembly: false,
            // signature: null,
            // fields: {},
            // limit: 0
        }).on('transloadit:result', (stepName, result) => {
                console.log(result)
                this.setState({'modalOpen': false})
            })

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentWillUnmount () {
        this.uppy.close()
    }

    handleOpen () {
        this.setState({
            modalOpen: true
        })
    }

    handleClose () {
        this.setState({
            modalOpen: false
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.handleOpen}>Upload image</button>
                <DashboardModal
                    uppy={this.uppy}
                    closeModalOnClickOutside
                    open={this.state.modalOpen}
                    onRequestClose={this.handleClose}
                />
            </div>
        );
    }
}

export default DashboardTester