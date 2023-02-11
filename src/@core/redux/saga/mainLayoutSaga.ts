import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects'
import acticleApi from 'src/@core/api/news.api'
import postApi from 'src/@core/api/post.api'
import productApi from 'src/@core/api/product.api'
import weatherApi from 'src/@core/api/weather.api'
import marketPriceApi from '../../api/marketPrice.api'
import { acticleAction } from '../acticle/acticle.slice'
import { marketActions } from '../market/market.slice'
import { postActions } from '../post/post.slice'
import { productAction } from '../product/product.slice'
import { RootState } from '../store'
import { weatherActions } from '../weather/weather.slice'

function* fetchProducts() {
  const response = yield call(productApi.getListProduct, { limit: 8, page: 1 })
  const { data } = response
  yield put(productAction.fetchListProductSuccess(data))
}

function* fetchPostCatalogues() {
  const response = yield call(postApi.getListPostCatalogue)
  const { data } = response
  yield put(postActions.fetchPostCatalogueSuccess(data))
}

function* fetchListArticle() {
  const response = yield call(acticleApi.getListArticle, {
    article_type: 'Article',
    is_feature: 1,
    page: 1,
    limit: 5
  })
  const { data } = response
  yield put(acticleAction.fetchListActicleSuccess(data))
}

function* fetchListMarketPrice() {
  const { currentUser } = yield select((state: RootState) => state.global)
  let response
  if (currentUser) {
    response = yield call(marketPriceApi.getListMarketPrice, { province_id: currentUser.priprovince_id || 1 })
  } else {
    response = yield call(marketPriceApi.getListMarketPrice, { province_id: 1 })
  }
  const { data } = response
  yield put(marketActions.fetchListMarketPricesSuccess(data))
}
function* fetchWeatherInLocation() {
  const { currentUser } = yield select((state: RootState) => state.global)
  const { lng, lat } = currentUser
  let response
  if (lng && lat) {
    response = yield call(weatherApi.getCurrentWeather, { lat, lng })
  }
  response = yield call(weatherApi.getCurrentWeather, { lat: '10.8058', lng: '106.6382' })
  const { data } = response
  yield put(weatherActions.fetchCurrentWeatherSuccess(data))
}

function* fetchDataInitLayout() {
  yield all([
    fork(fetchProducts),
    fork(fetchPostCatalogues),
    fork(fetchListMarketPrice),
    fork(fetchListArticle),
    fork(fetchWeatherInLocation)
  ])
}

export default function* mainLayoutSaga() {
  yield takeEvery('INIT_MAIN_LAYOUT', fetchDataInitLayout)
}
