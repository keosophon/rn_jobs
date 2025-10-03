import { useState } from "react";

const useFetch= (endpoint) => {


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'x-rapidapi-key': process.env.RAPID_JSEARCH_API_KEY,
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  },
  params: {
    query: 'developer jobs in chicago',
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  },
  
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}

fetchData();

    return { isLoading: false, data: [], error: false };
}

export default useFetch;