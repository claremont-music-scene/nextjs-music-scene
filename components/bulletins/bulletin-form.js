import {FormProvider, useForm} from 'react-hook-form';
import Link from 'next/link';
import FieldGroup from '../forms/field-group';
import {poster, securePoster} from '../../util/crud';



const NewBulletin = ({session}) => {
    const methods = useForm(),
        {handleSubmit} = methods,

        onSubmit = (data) => {
            console.log('attempting to submit data:', data);

            // TODO adding category
            data.category = 1

            data.user = session.userId
            securePoster('/bulletin_board/items/', data);
        };

    return (
            <FormProvider {...methods} >
                <p>Welcome {session.username}</p>
                <form onSubmit={handleSubmit(onSubmit)}>

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

export default NewBulletin;