import { AnyAction, configureStore } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import combinedReducer from './rootReducer'

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const makeStore = () =>
  configureStore({
    reducer,
    devTools: true
  })

export const wrapper = createWrapper(makeStore)
