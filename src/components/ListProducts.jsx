import { Container, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from './../api/fetchApi';
import { ProductCard } from './ProductCard';

export const ListProducts = () => {
  const { data, isError, isLoading } = useQuery(['Products'], getProducts);

  if (isLoading) return <div>Cargando productos...</div>;

  if (isError) return <div>Error al cargar productos</div>;

  return (
    <Container>
      <Grid container spacing={2}>
        {data?.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
