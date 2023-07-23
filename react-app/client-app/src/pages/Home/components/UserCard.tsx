import React, { FC, ReactElement } from 'react'
import { IUser } from '../../../interfaces/users'
import { useNavigate } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const UserCard: FC<IUser> = (props): ReactElement => {
    const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 250 }}>
        <CardActionArea onClick={() => navigate(`/user/${props.id}`)}>
            <CardMedia 
                component="img"
                height="250"
                image={props.avatar}
                alt={props.email}
            />
            <CardContent>
                <Typography noWrap gutterBottom variant='h6' component="div">
                    {props.email}
                </Typography>
                <Typography variant='body2' color="background.text">
                    {props.first_name} {props.last_name}
                </Typography>
            </CardContent>
        </CardActionArea>
        
    </Card>
  )
}

export default UserCard