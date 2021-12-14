import React, { useState, useEffect } from 'react';
import icon from '../../assets/img/icon-128.png';
import { convertPage } from '../../pages/Content/modules/convertPage';

const Greetings = () => {

  const [currentPrice, setCurrentPrice] = useState(0)

  const baseURL = 'https://api.coingecko.com/api/v3/coins/bitcoin'

  const getCurrentPrice = async (currency) => {
    const response = await fetch(baseURL)
    const { market_data } = await response.json()
    const { current_price } = market_data
    return current_price[currency]
    }

  const handleClick = async () => {
    const price = await getCurrentPrice('cad')
    setCurrentPrice(price)
    console.log(price)
  }

  useEffect(() => {
    const setPrice = async () => {
      const price = await getCurrentPrice('cad')
      setCurrentPrice(price)
    }

    setPrice()
  }, [])

  return (
    <>
      <button onClick={handleClick}>
        Hello
      </button>
      <button id='convertToBTC'>
        convert page
      </button>
      <p>Bitcoin Price: {currentPrice}</p>
    </>
  )

}

export default Greetings