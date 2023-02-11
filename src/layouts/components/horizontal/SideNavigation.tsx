import { List, Paper } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import { Settings } from 'src/@core/context/settingsContext'
import VerticalNavItems from 'src/@core/layouts/components/vertical/navigation/VerticalNavItems'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

interface ISideNavigation {
  settings: Settings
  saveSettings: (values: Settings) => void
  verticalNavItems?: VerticalNavItemsType
}

const SideNavigation: FunctionComponent<ISideNavigation> = ({ ...props }) => {
  const [groupActive, setGroupActive] = useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([])

  return (
    <Paper
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'sticky', top: 77 }}
    >
      <List className='nav-items' sx={{ transition: 'padding .25s ease', pr: 4.5 }}>
        <VerticalNavItems
          groupActive={groupActive}
          setGroupActive={setGroupActive}
          currentActiveGroup={currentActiveGroup}
          setCurrentActiveGroup={setCurrentActiveGroup}
          {...props}
        />
      </List>
    </Paper>
  )
}
export default SideNavigation
