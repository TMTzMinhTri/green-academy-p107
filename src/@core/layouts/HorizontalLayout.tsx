import { Container, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { PropsWithChildren, useState } from 'react'
import AppBar from './components/vertical/appBar'
import TabPostCatalogue from 'src/features/TabPostCatalogue'

import { LayoutProps } from './types'

const HorizontalLayout: React.FunctionComponent<PropsWithChildren<LayoutProps>> = ({ children, ...props }) => {
  const { afterHorizontalAppBarContent, horizontalLeftContent, horizontalRightContent } = props
  const [navVisible, setNavVisible] = useState<boolean>(false)

  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <>
      <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />
      {(afterHorizontalAppBarContent && afterHorizontalAppBarContent(props)) || null}
      <Container maxWidth='xl' sx={{ background: grey[300] }}>
        <Grid container paddingY={4} spacing={4}>
          <Grid item xs={12}>
            <TabPostCatalogue />
          </Grid>
          <Grid item md={3} xs={12}>
            {horizontalLeftContent && horizontalLeftContent(props)}
          </Grid>
          <Grid item md={6} xs={12}>
            {children}
          </Grid>
          <Grid item md={3} xs={12}>
            {horizontalRightContent && horizontalRightContent(props)}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default HorizontalLayout
