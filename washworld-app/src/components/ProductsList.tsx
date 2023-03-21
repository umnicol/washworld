import { List, ListItem, ListItemText } from '@mui/material';
import { Products } from '../types';

type Props = {
  products: Products[] | undefined;
};

export default function ProductsList({ products }: Props) {
  return (
    <List>
      {Array.isArray(products) && products.map((products) => (
        <ListItem key={products.id} button>
          <ListItemText primary={products.name} />
        </ListItem>
      ))}
    </List>
  );
}