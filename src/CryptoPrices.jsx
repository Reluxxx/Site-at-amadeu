import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoPrices = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(props.url, {
          headers: {
            'X-CoinAPI-Key': "60CB82C1-1151-4395-BBAA-3DE52CC86C8A"
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='p-error'>Erro ao carregar os dados: {error.message}</p>;

  return (
    <div className='crypto-container'>
      {data && (
        <div className='crypto-container'>
          <img className='crypto-img' src={props.image} alt=""></img>
          <h2 className='crypto-title'>{props.title} :</h2>
          <p className='crypto-price'>{data.rate.toFixed(0)} {data.asset_id_quote}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoPrices;
