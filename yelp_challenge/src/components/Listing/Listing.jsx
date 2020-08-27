import React, { useState, useEffect } from 'react';
import './listing.style.scss';
import zero from '../../yelp_stars/web_and_ios/regular/regular_0.png';
import one from '../../yelp_stars/web_and_ios/regular/regular_1.png';
import oneH from '../../yelp_stars/web_and_ios/regular/regular_1_half.png';
import two from '../../yelp_stars/web_and_ios/regular/regular_2.png';
import twoH from '../../yelp_stars/web_and_ios/regular/regular_2_half.png';
import three from '../../yelp_stars/web_and_ios/regular/regular_3.png';
import threeH from '../../yelp_stars/web_and_ios/regular/regular_3_half.png';
import four from '../../yelp_stars/web_and_ios/regular/regular_4.png';
import fourH from '../../yelp_stars/web_and_ios/regular/regular_4_half.png';
import five from '../../yelp_stars/web_and_ios/regular/regular_5.png';

function Listing(props) {
  const { name, address, img, rating, rateCount, score, link } = props
  const [star, setStar] = useState(null);

  useEffect(() => {
    //TODO convert to switch; 
    rating === 0 && setStar(zero);
    rating === 1 && setStar(one);
    rating === 1.5 && setStar(oneH);
    rating === 2 && setStar(two);
    rating === 2.5 && setStar(twoH);
    rating === 3 && setStar(three);
    rating === 3.5 && setStar(threeH);
    rating === 4 && setStar(four);
    rating === 4.5 && setStar(fourH);
    rating === 5 && setStar(five);

  }, [rating]);

  return (
    <div className="listing-wrapper">
      <div className="card-container">
        <div className="img-container">
          <img src={img} alt="listing_img" />
        </div>
        <div className="content-container">
          <h3 className='listing-name'>{name}</h3>
          <h4 className='listing-score'>{`Score ${score}`}</h4>
          <div className="rating-container">
            <img src={star} alt="" className="stars" />
            <p className="review-count">{rateCount}</p>
          </div>
          <div className="address-container">
            {address && address.map(a => <p>{a}</p>)}
          </div>
          <a href={link} target="_blank">Visit Yelp Page</a>
        </div>
      </div>
    </div>
  );
}

export default Listing;