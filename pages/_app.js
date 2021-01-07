import '../styles/main.css';
import '../styles/grid.css';
import '../styles/form.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
