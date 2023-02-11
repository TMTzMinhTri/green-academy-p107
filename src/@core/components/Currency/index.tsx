import React, { FunctionComponent } from 'react'
import CurrencyFormat from 'react-currency-format'

const Currency: FunctionComponent = ({ children }) => {
  return (
    <CurrencyFormat value={children} thousandSeparator={'.'} decimalSeparator={','} displayType={'text'} suffix={'đ'} />
  )
}

export default Currency
