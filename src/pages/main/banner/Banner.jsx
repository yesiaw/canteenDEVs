import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardActionArea, CardMedia } from '@material-ui/core'

export default function Banner(props)
{
    var items = [
        {
            name: "Random Name #1",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAgaEZcKKG23vql-qtHQjoBPuwZ8MQvxdqTCotTtpzzsHZbslf_U_-5AXU4kONXATayM&usqp=CAU"
        },
        {
            name: "Random Name #2",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWn9gZTIHg4zcEk6UIWW3VbVTuf95m5XIhiojcz-c-FMNoNdCv6uLXMRYvPuj3kl6TJ8w&usqp=CAU"
        }
    ]

    return (
        <Carousel >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Card style={{maxWidth:'500px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.item.image}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    )
}