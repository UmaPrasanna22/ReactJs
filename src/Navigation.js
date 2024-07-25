import { Link } from "react-router-dom";

function Navigation1(){
return(
    <div>
        <Link to="/" >Home</Link>
        <Link to="/productList">Products</Link>
    </div>
);
}
export default Navigation1;