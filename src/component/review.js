import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../css/Contents.module.css';
import ReviewPost from './reviewPost';

function Review(props) {

  const params = useParams().storename;

  const storeimg = props.storeimg

  const [reviewdata, setData] = useState()
  var reviewarr = new Array();

  useEffect(() => {
    fetch(`/Review_send_data/${params}`, { //json 데이터를 받아옴
      headers: {
        Accept: 'application/json',
        method: 'GET'
      }
    })
      .then(response => response.json())
      .then(jsonData => {
        var length = Object.keys(jsonData).length
        for (var i = 0; i < length; i++) { //등록된 리뷰 개수만큼 반복
          reviewarr[i] = Object.values(jsonData)[i]
        }
        setData(reviewarr)
      })
      .catch(
        (err) => console.log(err))
  }, [])

  return (
    <div class={styles.outer}>
      <div class={styles.pane}>
        {reviewdata && <div id={styles.paneName}>
          리뷰&#40; {reviewdata.length}건&#41;
        </div>}
        <div class={styles.editPane}>
          <span>여러분의 맛집 후기를 남겨주세요!</span>
          <Link to={`/CreateReview/${params}`}
            state={{
              storeimg: storeimg
            }}
          ><button class={styles.button}>리뷰 등록</button></Link>
        </div>
        <div class={styles.Pane}>
          <div class={styles.list}>
            {reviewdata && reviewdata.map((a => {
              return <ReviewPost reviewimg={a.img_path} reviewdesc={a.reviewdesc} reviewtitle={a.reviewtitle} reviewstorescore={a.storescore} reviewusername={a.username} reviewstorename={a.storename} />
            }))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review