import { Link } from "react-router-dom";

function LinkElement() {
    

    return (
        <>
            <Link to={'/'}><span className='navelement'>Home</span></Link>
        </>
    );
}

export default LinkElement;