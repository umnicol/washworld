import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Products } from '../types';


type Props = {
  products: Products[];
};

export default function ProductsList({ products }: Props) {
  return (
    <List>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ListItem
            key={product.id}
            button
            sx={{
              border: '2px solid black',
              backgroundColor: '#06C167',
              color: 'white',
              borderRadius: '3px',
              marginTop: '0.5rem',
              padding: '1rem',
              ':hover': {
                backgroundColor: '#16a25e',
              },
            }}
          >
            <ListItemIcon>
              <span
                style={{
                  display: 'block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  marginLeft: '15px',
                }}
              />
            </ListItemIcon>
            <ListItemText primary={product.name} />
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No products found" />
        </ListItem>
      )}
    </List>
  );
}
