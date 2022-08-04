import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const urlBase = 'https://imagenes.preciosclaros.gob.ar/productos/';

export const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component='img' image={`${urlBase}${product.id}.jpg`} alt='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
