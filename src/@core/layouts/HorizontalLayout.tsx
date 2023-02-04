import { Container, Grid } from '@mui/material'
import React, { PropsWithChildren, useState } from 'react'
import AppBar from './components/vertical/appBar'

import { LayoutProps } from './types'

const HorizontalLayout: React.FunctionComponent<PropsWithChildren<LayoutProps>> = ({ children, ...props }) => {
  const { afterHorizontalAppBarContent, horizontalLeftContent, horizontalRightContent } = props
  const [navVisible, setNavVisible] = useState<boolean>(false)

  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <div>
      <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />
      {(afterHorizontalAppBarContent && afterHorizontalAppBarContent(props)) || null}
      <Container>
        <Grid container paddingY={4} spacing={4}>
          <Grid item md={3}>
            {horizontalLeftContent && horizontalLeftContent(props)}
          </Grid>
          <Grid item md={6}>
            {children}
          </Grid>
          <Grid item md={3}>
            {horizontalRightContent && horizontalRightContent(props)}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default HorizontalLayout
