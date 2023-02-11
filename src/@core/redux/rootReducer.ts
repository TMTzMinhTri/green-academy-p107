import { globalSlice } from './global/global.slice'
import { combineReducers } from '@reduxjs/toolkit'
import postSlice from './post/post.slice'
import productSlice from './product/product.slice'
import marketSlice from './market/market.slice'
import acticleSlice from './acticle/acticle.slice'
import weatherSlice from './weather/weather.slice'

const combinedReducer = combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [postSlice.name]: postSlice.reducer,
  [productSlice.name]: productSlice.reducer,
  [marketSlice.name]: marketSlice.reducer,
  [acticleSlice.name]: acticleSlice.reducer,
  [weatherSlice.name]: weatherSlice.reducer
})

export default combinedReducer
