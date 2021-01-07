import ReactQuill from 'react-quill';

export default function Wysiwyg({ ref, onChange }) {
    const colors = [/* '#F00', '#0F0', '#00F', '#000', '#FFF' */], // can customize colors for foreground ...
        bgColors = [/* '#F00', '#0F0', '#00F', '#000', '#FFF' */], // ... and background
        //... can even do premium colors based on anon, user type, featured post...

        modules = { // 'premium features' can be dynamic based on anon, user type, featured post... 
            toolbar: [
                [{ 'header': [1, 2, 3, false] }], // up to H6
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'color': colors }, { 'background': [] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link'/* , 'image' */], // can handle inline images--should be able to upload to s3
                ['clean'] // remove formatting from selected text
            ],
        },

        formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'color', 'background',
            'list', 'bullet', 'indent',
            'link', 'image'
        ];

    return <ReactQuill
        ref={ref}
        onChange={(content/* , delta, source, editor */) => onChange(content)}
        modules={modules}
        formats={formats}
    />;
}