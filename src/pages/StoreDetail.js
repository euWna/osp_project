import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";

function StoreDetail(){
    return(
        <div>
            <Header/>
            <Info/>
            <Menu/>
            <Review/>
        </div>
    );
}

export default StoreDetail();