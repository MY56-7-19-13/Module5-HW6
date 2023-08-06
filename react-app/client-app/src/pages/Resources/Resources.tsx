import React, { FC, ReactElement, useEffect, useState } from 'react'
import { IResource } from '../../interfaces/resource'
import * as resourceApi from '../../api/modules/resources'
import { Box, Container, CssBaseline, Grid, Pagination } from '@mui/material';
import ResourceCard from './components/ResourceCard';

const Resources: FC<any> = ():ReactElement => {
    const [resources, setResources] = useState<IResource[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const getResource = async () => {
            try {     
                setIsLoading(true)
                const res = await resourceApi.getByPage(currentPage)
                setResources(res.data)
                setTotalPages(res.total_pages)
            } catch (e) {
                if(e instanceof Error){
                    console.log(e.message)
                }
            }
            setIsLoading(false)
        }
        getResource()
    }, [currentPage])
  return (
    <Container>
            <Grid container spacing={4} justifyContent="center" sx={{
                 marginTop: 17, marginBottom: 17,
            }}>
                {isLoading ? (
                    <CssBaseline/>
                ) : (
                    <>
                        {resources?.map((item) => (
                            <Grid key={item.id} item lg={2} md={3} xs={6}>
                                <ResourceCard {...item}/>
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
                <Pagination count={totalPages} page={currentPage} onChange={(event, page) => setCurrentPage(page)}/>
            </Box>
        </Container>
  )
}

export default Resources