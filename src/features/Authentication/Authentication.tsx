import { Box } from '@mui/material'
import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/@core/redux/store'
import { selectAuthReducer } from './redux/authSelector'
import { authActions } from './redux/authSlice'

const Authentication: FunctionComponent<PropsWithChildren<any>> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { isLoading, currentUser } = useAppSelector(selectAuthReducer)

  useEffect(() => {
    dispatch(authActions.getProfile())
  }, [])

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {isLoading ? (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: '200px' }}>
            <img src='/images/logo.png' width={'100%'} height={'100%'} />
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}

export default Authentication
