import '../css/Contents.css';
import homelogo from '../img/symbol-mark.png'


function Info(){
    return(
        <div class="outer">
            <div class="pane">
                <div id="paneName">
                    음식점 정보
                </div><br/>
                <div>
                <img class="image" src={homelogo}/><br/><br/>
                </div>

                <div class="info">
                    <div id="info1">
                        <div id="name">"맛집 이름"</div>
                        <div id="address">"주소"</div>
                        <div id="intro">"소개 한 줄 문구"</div>
                    </div>
                    <br/>
                    <div id="info2">
                        <div id="site">사이트 </div>
                        <div id="category">카테고리 </div>
                        <div id="phone">전화번호 </div>
                        <div id="hours">운영시간 </div>
                        <div id="parking">주차장 </div>
                    </div>
                </div>
                <div class="buttons">
                    <a href=""><button class="button">정보 수정</button></a>
                    <a href=""><button class="button">리뷰 등록</button></a>
                </div>

                <div class="map">
                    지도API
                </div>
            </div>
        </div>
    );
}

export default Info