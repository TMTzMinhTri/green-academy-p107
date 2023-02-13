import React from 'react'
import { Grid, IconButton, Box } from '@mui/material'
import NewspaperVariantMultipleOutlineIcon from 'mdi-material-ui/NewspaperVariantMultipleOutline'
import PlayBoxOutlineIcon from 'mdi-material-ui/PlayBoxOutline'
import SealVariantIcon from 'mdi-material-ui/SealVariant'
import Link from 'next/link'

const HeaderMenu = () => {
  return (
    <Grid
      container
      justifyContent={'space-evenly'}
      paddingY='5px'
      bgcolor={'white'}
      sx={{ position: 'sticky', top: 0, zIndex: 2 }}
    >
      <Grid item>
        <Link href={'/'}>
          <IconButton>
            <NewspaperVariantMultipleOutlineIcon fontSize='large' />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Link href={'/'}>
          <IconButton>
            <PlayBoxOutlineIcon fontSize='large' />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Link href={'/tin-tuc'}>
          <IconButton>
            <NewspaperVariantMultipleOutlineIcon fontSize='large' />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <IconButton>
          <SealVariantIcon fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default HeaderMenu
