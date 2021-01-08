import SingleColumnLayout from '../../../components/layouts/single-column';
import { useForm, FormProvider } from 'react-hook-form';
import {fetcher, poster} from '../../../util/crud';
import Link from 'next/link';

import FieldGroup from '../../../components/forms/field-group';

export async function getStaticProps() {
    const bulletinItemsEndpoint = `${process.env.API_URL}/bulletin_board/items/`
    return {props: {bulletinItemsEndpoint}}
}

const NewBulletin = ({ bulletinItemsEndpoint }) => {
    const methods = useForm(),
        { handleSubmit } = methods,

        onSubmit = (data) => {
            console.log('attempting to submit data:', data);
            poster(data, bulletinItemsEndpoint, '/community/bulletins/');
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
                        fieldId='layout'
                        displayName='Layout'
                        isRequired={true}
                        inputType='select'
                        options={[
                            'No Image',
                            'Full-Size Image (no background or text)',
                            'Full-Size Image with Title as caption',
                            'Split Vertical Image and Text',
                            'Small Square Thumbnail in Corner',
                        ]}
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