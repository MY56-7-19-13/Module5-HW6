import React, { FC, ReactElement, useEffect, useMemo, useState } from 'react'
import IDataUser from '../../interfaces/DataUser'
import { useNavigate } from 'react-router-dom'
import * as userApi from "../../api/modules/users"
import { Avatar, Box, Button, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import { Copyright } from '@mui/icons-material'
import { themeSettings } from '../../theme'

const CreateUser: FC<any> = (): ReactElement => {
    const [newUser, setNewUser] = useState<IDataUser | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [job, setJob] = useState<string>("")
    const navigate = useNavigate()
    const theme = useMemo(() => createTheme(themeSettings), [])

    useEffect(() => {
        setNewUser({ name, job })
    }, [name, job])

    const Create = () => {
        const CreateUser = async () => {
            if (newUser != null) {
                try {
                    setIsLoading(true)
                    const res = await userApi.createUser(newUser)
                    setNewUser(res.data)
                    const createInfo = `Id: ${res.id}; Created At: ${res.createdAt}`
                    localStorage.setItem('IDataUser', JSON.stringify(createInfo))
                } catch (e) {
                    if (e instanceof Error) {
                        console.log(e.message)
                    }
                }
                setIsLoading(false)
                navigate('/show_info')
            }
        }
        CreateUser()
    }
    const Copyright = (props: any) => {
        return (
            <Typography variant="h4" color="background.light" align="center" {...props}>
                {'Copyright © '}
                <Link color="background.text" href="https://a-level.com.ua/?utm_source=google&utm_medium=cpc&utm_campaign=NP_SER_Brand_id-19999403246&utm_content=656588665592&utm_term=alevel&gclid=Cj0KCQjw_O2lBhCFARIsAB0E8B-ieuaoKkA4ogWyN7RZJXH-JD4YtU2eOeVUtOG2hjkJhWuUKgCAmlYaAkDyEALw_wcB" variant='h4'>
                    A-Level
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        )
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline /><Box
                        display="flex"
                        flexDirection={"column"}
                        maxWidth={400}
                        alignItems="center"
                        justifyContent={"center"}
                        margin="auto"
                        marginTop={10}
                        marginBottom={6}
                        padding={3}
                        borderRadius={5}
                        boxShadow={"5px 5px 10px #ccc"}
                        sx={{
                            ":hover": {
                                boxShadow: "10px 10px 20px #ccc",
                            },
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'background.light' }}>
                        </Avatar>
                        <Typography component="h1" variant="h3">
                            Create User
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            variant='outlined'
                            onChange={n => setName(n.target.value)}
                            autoFocus />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Job"
                            id="job"
                            sx={{ border: 'background.text' }}
                            onChange={j => setJob(j.target.value)} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={Create}
                            sx={{ mt: 3, mb: 2, bgcolor: 'background.text' }}
                        >
                            Create
                        </Button>
                    </Box><Copyright sx={{ mt: 10, mb: 7 }} />
            </Container>
        </ThemeProvider>
    )
}

export default CreateUser
