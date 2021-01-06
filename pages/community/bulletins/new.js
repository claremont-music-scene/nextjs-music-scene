import SingleColumnLayout from '../../../components/layouts/single-column';
import { useForm, FormProvider } from 'react-hook-form';
import { poster } from '../../../util/crud';
import Link from 'next/link';

import FieldGroup from '../../../components/forms/field-group';

const NewBulletin = () => {
    const methods = useForm(),
        { handleSubmit } = methods,

        onSubmit = (data) => {
            console.log('attempting to submit data:', data);
            poster(data);
        };

    const tempUserId = 0;

    return (
        <SingleColumnLayout>
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)}>

                    {!tempUserId && <FieldGroup
                        fieldId='email'
                        displayName='Your Email Address'
                        description='Email address is required for anonymous posts'
                        isRequired={true}
                        inputType='email'
                    />}

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
                        inputType='textarea'
                    />
                    
                    <input type='submit' />
                    
                    <Link href='/community/bulletins/'>
                        <a>Back to bulletins</a>
                    </Link>

                </form>
            </FormProvider>
        </SingleColumnLayout>
    );
}

export default NewBulletin;