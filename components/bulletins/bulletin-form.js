import {FormProvider, useForm} from 'react-hook-form';
import Link from 'next/link';
import FieldGroup from '../forms/field-group';
import Router from 'next/router';
import {useSession} from 'next-auth/client'
import {apiPoster} from "../../util/client";


const BulletinForm = ({styleOptions}) => {
    const [session, loading] = useSession()
    const methods = useForm(),
        {handleSubmit} = methods,

        onSubmit = (data) => {
            console.log('attempting to submit data:', data);

            // TODO adding category
            data.category = 1

            data.user = session.userId
            apiPoster('/bulletin_board/items/', data).then((result) => {

                if (result.id) {
                    Router.push('/community/bulletins')
                }
            })
        };

    return (
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldGroup
                        fieldId='style'
                        displayName='Layout'
                        isRequired={true}
                        inputType='select'
                        options={styleOptions}
                    />

                    <FieldGroup
                        fieldId='title'
                        displayName='Title'
                        isRequired={true}
                        inputType='text'
                    />

                    <FieldGroup
                        fieldId='content'
                        displayName='Content'
                        isRequired={true}
                        inputType='html'
                    />

                    <input type='submit'/>

                    <Link href='/community/bulletins/'>
                        <a>Back to bulletins</a>
                    </Link>

                </form>
            </FormProvider>
    );
}

export default BulletinForm;