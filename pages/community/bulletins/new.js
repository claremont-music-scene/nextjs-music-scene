import SingleColumnLayout from '../../../components/layouts/single-column';
import { poster } from '../../../util/crud';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const NewBulletin = () => {
    const { register, handleSubmit, errors } = useForm(),
        onSubmit = (data) => {
            console.log('attempting to submit data:', data);
            const fd = new FormData();
            fd.append('title', title);
            fd.append('content', content);
            poster({formData: fd, endpoint: '/bulletin_board/items/', redirectPath: '/community/bulletins'});
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
                    <textarea name='content' id='content' ref={register({ required: true })} />
                    <div className="field-error">{errors.content && 'Please enter some content for your post.'}</div>
                </div>
                <input type='submit' />
                <Link href='/community/bulletins/'>
                    <a>Back to bulletins</a>
                </Link>
            </form>
        </SingleColumnLayout>
    );
}

export default NewBulletin;