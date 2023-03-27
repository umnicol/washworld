import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Location } from '../types';

type Props = {
  locations: Location[] | undefined;
};

export default function LocationList({ locations }: Props) {
  return (
    <List>
      {locations && locations.length > 0 ? (
        locations.map((location) => (
          <ListItem
            key={location.id}
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
                  backgroundColor: location.status === 'maintenance' ? 'orange' : 'white',
                }}
              />
            </ListItemIcon>

            <ListItemText
              primary={<span style={{ fontWeight: 'bold' }}>{location.name}</span>}
              secondary={location.status}
            />
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No locations found" />
        </ListItem>
      )}
    </List>
  );
}
