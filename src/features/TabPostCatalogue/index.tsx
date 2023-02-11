import { CircularProgress, Tab, Tabs } from '@mui/material'
import React, { FunctionComponent } from 'react'
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
    <Tabs
      sx={{ backgroundColor: 'background.paper' }}
      value={value}
      onChange={handleChange}
      variant='scrollable'
      scrollButtons='auto'
      aria-label='scrollable auto tabs example'
    >
      {isLoading ? (
        <CircularProgress sx={{ margin: 'auto' }} />
      ) : (
        postCatalogue.map(item => <Tab key={item.id} label={item.name} />)
      )}
    </Tabs>
  )
}

export default TabPostCatalogue
