import { Grid } from '@mui/material'
import React from 'react'
import MarketPrice from 'src/features/Widget/MarketPrice'
import News from 'src/features/Widget/News'
import Products from 'src/features/Widget/Products'
import Weather from 'src/features/Widget/Weather'

const SideWidget = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Weather />
      </Grid>
      <Grid item xs={12}>
        <News />
      </Grid>
      <Grid item xs={12}>
        <Products />
      </Grid>
      <Grid item xs={12}>
        <MarketPrice />
      </Grid>
    </Grid>
  )
}

export default SideWidget
