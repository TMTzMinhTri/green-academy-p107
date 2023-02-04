import { styled, Container, Grid } from '@mui/material'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { Settings } from 'src/@core/context/settingsContext'
import SearchIcon from 'mdi-material-ui/Magnify'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'

interface IAppBarContent {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
}

const InputSearch = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-root': {
    borderRadius: '100px',
    backgroundColor: theme.palette.background.default
  },
  '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    boxShadow: '0 0 0 0.25rem rgb(223 229 233)'
  }
}))

const AppBarContent: FunctionComponent<IAppBarContent> = (props: IAppBarContent) => {
  const { hidden } = props
  return (
    <Container>
      <Grid container sx={{ width: '100%' }}>
        <Grid item md={3} sx={{ display: 'flex', alignItems: 'center' }}>
          <Image width={116} height={47} src='/images/logo.png' alt='logo-company' />
        </Grid>
        <Grid item md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <InputSearch
            type='search'
            placeholder='Tìm kiếm'
            fullWidth
            size='small'
            InputProps={{
              startAdornment: <SearchIcon />
            }}
          />
        </Grid>
        <Grid item md={3} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <NotificationDropdown />
          <UserDropdown />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppBarContent
