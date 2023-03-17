import { Link } from 'react-router-dom';
import '../css/ErrorPage.css';

function ErrorPage() {
    return (
        <>
            <h1>ERROR PAGE</h1>
            <Link to={'/'}><button>Home</button></Link>
        </>
    );
}

export default ErrorPage;