import React, { FC, ReactElement, useEffect, useState } from "react";
import { IResource } from "../../interfaces/resource";
import { useParams } from "react-router-dom";
import * as resourceApi from "../../api/modules/resources"
import { Card, CardContent, CircularProgress, Container, Grid, Typography } from "@mui/material";

const Resource: FC<any> = (): ReactElement => {
    const [resource, setResource] = useState<IResource | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getResource = async () => {
                try {
                    setIsLoading(true)
                    const res = await resourceApi.getById(id)
                    setResource(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.log(e.message)
                    }
                }
                setIsLoading(false)
            }
            getResource()
        }

    }, [id])

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" my={21}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Card sx={{ width: 250, bgcolor: resource?.color, height: 250 }}>
                            <CardContent>
                                <Typography noWrap gutterBottom variant='h6' component="div" color="wheat">
                                    {resource?.name}
                                </Typography>
                                <Typography variant='body2' color="white">
                                    Year: {resource?.year}
                                </Typography>
                                <Typography variant='body2' color="white">
                                    {resource?.pantone_value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </>
                )}
            </Grid>
        </Container>
    )
}
export default Resource;