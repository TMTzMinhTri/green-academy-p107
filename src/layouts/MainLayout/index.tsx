import { Theme, useMediaQuery } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalLayout from 'src/@core/layouts/HorizontalLayout'
import HorizontalAppBarContent from '../components/horizontal/AppBarContent'
import HeaderMenu from '../components/horizontal/HeaderMenu'
import SideNavigation from '../components/horizontal/SideNavigation'
import VerticalNavItems from 'src/navigation/vertical'

const MainLayout: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const { settings, saveSettings } = useSettings()

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <HorizontalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalAppBarContent={() => (
        <HorizontalAppBarContent hidden={hidden} settings={settings} saveSettings={saveSettings} />
      )}
      afterHorizontalAppBarContent={() => <HeaderMenu />}
      horizontalLeftContent={props => <SideNavigation {...props} verticalNavItems={VerticalNavItems()} />}
      horizontalRightContent={props => <div></div>}
    >
      {children}
    </HorizontalLayout>
  )
}

export default MainLayout
