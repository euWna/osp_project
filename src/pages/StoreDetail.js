import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link } from 'react-router-dom';
import NavBar from "../component/NavBar";

function StoreDetail(){
    return(
        <div>
         <head>
        </head>
        <body>
        <NavBar></NavBar>
         <Info/>
            <Menu/>
            <Review/>
        </body>
        </div>
    );
}

export default StoreDetail;