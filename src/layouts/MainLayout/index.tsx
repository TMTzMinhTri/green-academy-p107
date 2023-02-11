import { Theme, useMediaQuery } from '@mui/material'
import React, { PropsWithChildren, useEffect } from 'react'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalLayout from 'src/@core/layouts/HorizontalLayout'
import HorizontalAppBarContent from '../components/horizontal/AppBarContent'
import HeaderMenu from '../components/horizontal/HeaderMenu'
import SideNavigation from '../components/horizontal/SideNavigation'
import VerticalNavItems from 'src/navigation/vertical'
import { useAppDispatch } from 'src/@core/redux/store'
import SideWidget from '../components/horizontal/SideWidget'

const MainLayout: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const { settings, saveSettings } = useSettings()
  const dispatch = useAppDispatch()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  useEffect(() => {
    dispatch({ type: 'INIT_MAIN_LAYOUT' })
  }, [dispatch])

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
      horizontalRightContent={() => <SideWidget />}
    >
      {children}
    </HorizontalLayout>
  )
}

export default MainLayout
