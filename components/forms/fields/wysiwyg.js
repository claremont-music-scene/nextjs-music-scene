import ReactQuill from 'react-quill';

export default function Wysiwyg({ ref, onChange }) {
    const colors = ['#1b75bc','#00aeef','#2b3990','#262262','#131131','#39b54a','#8dc63f','#dfd723','#fff200','#be1e2d','#ed1c24','#f5f6f7','#dde1e2'],

        modules = { 
            toolbar: [
                [{ 'header': [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'color': colors }, { 'background': colors }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link'/* , 'image' */],
                ['clean']
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