import ReactQuill from 'react-quill';

export default function Wysiwyg({ ref, onChange }) {
    return <ReactQuill
        ref={ref}
        onChange={(content/* , delta, source, editor */) => onChange(content)}
    />;
}