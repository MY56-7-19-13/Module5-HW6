import { Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Pagination, TextField } from '@mui/material'
import React, { ChangeEvent, FC, ReactElement, useEffect, useState, } from 'react'
import { IUser } from '../../interfaces/users'
import * as userApi from "../../api/modules/users"
import UserCard from './components/UserCard'
import ICreateUser   from '../../interfaces/DataUser'
import apiClient from '../../api/client'
import { useNavigate } from 'react-router-dom'

const Home: FC<any> = (): ReactElement => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true)
        const res = await userApi.getByPage(currentPage)
        setUsers(res.data)
        setTotalPages(res.total_pages)
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)
        }
      }
      setIsLoading(false)
      
    }
    getUser()
}, [currentPage]);

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" sx={{
        marginBottom: 13,
        marginTop: 13
      }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            
            {users?.map((item) => (
              
              <Grid key={item.id} item lg={2} md={3} xs={6}>
                <UserCard {...item} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Pagination count={totalPages} page={currentPage} onChange={(event, page) => setCurrentPage(page)} />
      </Box>
    </Container>
  );
};

export default Home;