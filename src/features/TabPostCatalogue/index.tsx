import React, { FunctionComponent } from 'react'
import { Box, CircularProgress, IconButton, Tab, Tabs } from '@mui/material'
import { Reload } from 'mdi-material-ui'
import { selectListPostCatalogue, selectLoadingPostCatalogue } from 'src/@core/redux/post/post.selector'
import { useAppSelector } from 'src/@core/redux/store'

const TabPostCatalogue: FunctionComponent = () => {
  const isLoading = useAppSelector(selectLoadingPostCatalogue)
  const postCatalogue = useAppSelector(selectListPostCatalogue)
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', backgroundColor: 'background.paper', textAlign: 'center' }}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tabs
            sx={{ backgroundColor: 'background.paper' }}
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
          >
            {postCatalogue.map(item => (
              <Tab key={item.id} label={item.name} />
            ))}
          </Tabs>
          <IconButton>
            <Reload />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default TabPostCatalogue
