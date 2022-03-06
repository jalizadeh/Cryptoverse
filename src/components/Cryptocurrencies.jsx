import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Col, Row, Card, Input } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'

const Cryptocurrencies = ({ simplified }) => {

  const gutterSize = 20
  const count = simplified ? 10 : 100

  const {data : cryptosList, isFetching, error } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    const filteredList = cryptosList?.data?.coins.filter((coin) => 
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setCryptos(filteredList)
  }, [cryptosList, searchTerm ])


  // console.log(cryptos)

  if(isFetching) return 'Loading...'
  
  return (
    <>
      {!simplified && 
        <div className='search-crypto'>
          <Input placeholder="Search Crypto"
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      }

      <Row gutter={[gutterSize, gutterSize]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card"  key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl}/>}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies