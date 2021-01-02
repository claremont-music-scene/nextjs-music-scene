import SingleColumnLayout from '../../../components/layouts/single-column';
import { poster } from '../../../util/crud';

import { useForm } from 'react-hook-form';

const NewBulletin = () => {
    const { register, handleSubmit, errors } = useForm(),
        onSubmit = (data) => {
            console.log('attempting to submit data:', data);
            poster(data);
        };

    return (
        <SingleColumnLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input name='title' id='title' ref={register({ required: true })} />
                    <div className="field-error">{errors.title && 'A post title is required.'}</div>
                </div>
                <div>
                    <label htmlFor='content'>Content</label>
                    <input name='content' id='content' ref={register({ required: true })} />
                    <div className="field-error">{errors.content && 'Please enter some content for your post.'}</div>
                </div>
                <input type='submit' />
            </form>
        </SingleColumnLayout>
    );
}

export default NewBulletin;