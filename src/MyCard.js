import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MyCard() {
    return (
        <Card sx={{ width: 300, height:200, backgroundColor: 'inherit', border: 'none', boxShadow: 'none', alignItems: 'center', alignContent: 'center' }}>
            <CardMedia
                sx={{ height: 90 }}
                image="logo.svg"
                title="green iguana"
            />
            <CardContent sx={{ backgroundColor: 'inherit' }} style={{ backgroundColor: 'inherit' }}>
                <Typography gutterBottom variant="h7" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MyCard;