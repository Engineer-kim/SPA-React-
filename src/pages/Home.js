import { Link ,useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate();

    return (<>
        <h1>My Home Page</h1>
        <p>
            Go To <Link to="products">the list of Product</Link>
        </p>
    </>
    )
}

export default HomePage