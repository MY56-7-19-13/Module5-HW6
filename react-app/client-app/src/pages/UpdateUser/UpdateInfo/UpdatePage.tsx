import React, { FC, ReactElement } from 'react'
import IDataUser from '../../../interfaces/DataUser'
import { Box, Container, Typography } from '@mui/material'

const UpdatePage: FC<any> = (): ReactElement => {
    const updateInfo = localStorage.getItem('upUser')
  return (
    <Container 
    maxWidth="xl"
    sx={{flexGrow: 1,}}>
      <Box
      marginY={20}
      sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
      }
      }>
      <h1>Successfull</h1>
      </Box>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }
         }>
      <Typography variant='h2' color="background.text">{updateInfo}</Typography>
      </Box>
      </Container>
  
  )
}

export default UpdatePage