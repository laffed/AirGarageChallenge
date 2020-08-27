import React, { useState, useEffect } from 'react';
import './main.style.scss';
import axios from 'axios';
import Listing from '../Listing/Listing';

function Main() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleInput = e => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleSearch = e => {
    e.preventDefault();
    setError(null);

    let yelpReq = axios.create({
      baseURL: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
        'Content-type': 'application/json'
      }
    });

    yelpReq('businesses/search', {
      params: {
        location: query,
        term: 'Parking',
        limit: 50
      }
    }).then(({ data }) => {
      setData(data.businesses);
    }).catch(error => {
      setError('Please Enter a Valid Location')
    })
  }

  const sorter = (a, b) => {
    const sortA = (a.review_count * a.rating) / (a.review_count + 1);
    const sortB = (b.review_count * b.rating) / (b.review_count + 1);
    return sortA - sortB;
  }

  const mapper = d => {
    const score = (d.review_count * d.rating) / (d.review_count + 1);
    //name, address, img, rating, rateCount, score, link
    return <Listing name={d.name} address={d.location.display_address} img={d.image_url} rating={d.rating} rateCount={d.review_count} score={score.toFixed(2)} link={d.url} />
  }

  return (
    <div className="main-wrapper">
      <h1>Lowest Score in Desired Location</h1>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={handleInput} value={query} />
        <button>Search</button>
      </form>
      {error && <p>{error}</p>}
      {data && data.sort(sorter).map(mapper)}
    </div>
  );
}


export default Main;