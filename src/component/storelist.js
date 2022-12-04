import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import heart from "../img/heart.png";
import { Stores } from "../pages/StoreListView"
import { StoresInfoOut } from "../pages/StoreListView";
import axios from 'axios';
// 맛집 모아보기 페이지 가게 리스트 컴포넌트


function Storelist(props) {
    <Stores></Stores>
    // StoresInfoOut();
    // storedata = storedata;
    var storedata;
    storedata = JSON.stringify(props.storedata);
    var storename = new Array();

    storename[0] = props.storename;
    /*props.storedata: Stores에서 반환할 때 storedata= 으로 준 값 */


    var i = 0;
    return (

        <div>

            {/* for ({storedata[i]} in {storedata}) */}
            {
                <div class="listbox">
                    <a href="/StoreDetail/{storedata[i].storename}">
                        <div class="ImagePart">
                            <img src="../static/img/sample.PNG" width="295" height="125" />
                        </div>
                    </a>
                    <div class="listdesc">
                        <div class="StoreName"> {storename[0]}</div>
                        <div class="storelocation">
                            <img src="../static/img/location.png" class="locationimg" width="18" height="18" />
                            {/* <p class="locationtext">{props.location}</p> */}
                        </div>
                        {/* <div class="Tag">#{props.food}</div> */}
                        <div class="heart">
                            <img src="../static/img/heart.png" class="heartimg" width="14" height="16" />
                            <div class="heartnum">150</div>
                        </div>
                        <div class="reviewnum">리뷰""개</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Storelist;