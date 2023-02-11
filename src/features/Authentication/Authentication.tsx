import { Box } from '@mui/material'
import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { selectGlobalLoading } from 'src/@core/redux/global/global.selector'
import { globalActions } from 'src/@core/redux/global/global.slice'
import { useAppDispatch, useAppSelector } from 'src/@core/redux/store'

const Authentication: FunctionComponent<PropsWithChildren<any>> = ({ children }) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectGlobalLoading)

  useEffect(() => {
    dispatch(globalActions.fetchUser())
  }, [dispatch])

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {isLoading ? (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: '200px' }}>
            <img src='/images/logo.png' width={'100%'} height={'100%'} alt='' />
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}

export default Authentication
