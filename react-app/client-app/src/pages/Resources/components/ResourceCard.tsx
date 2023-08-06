import React, { FC, ReactElement } from 'react'
import { IResource } from '../../../interfaces/resource'
import { useNavigate } from 'react-router-dom'
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';

const ResourceCard: FC<IResource> = (props): ReactElement => {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 250, bgcolor: props.color, height: 250}}>
        <CardActionArea onClick={() => navigate(`/resource/${props.id}`)}>
            <CardContent>
                    <Typography noWrap gutterBottom variant='h6' component="div" color="wheat">
                        {props.name}
                    </Typography>
                    <Typography variant='body2' color="white">
                        Year: {props.year}
                    </Typography>
                    <Typography variant='body2' color="white">
                        {props.pantone_value}
                    </Typography>
            </CardContent>
        </CardActionArea>

    </Card>
  )
}

export default ResourceCard