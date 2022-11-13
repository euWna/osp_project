import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link } from 'react-router-dom';

function StoreDetail(){
    return(
        <div>
            <Info/>
            <Menu/>
            <Review/>
        </div>
    );
}

export default StoreDetail();