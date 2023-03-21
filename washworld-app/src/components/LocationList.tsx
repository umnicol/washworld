import { List, ListItem, ListItemText } from '@mui/material';
import { Location } from '../types';

type Props = {
  locations: Location[] | undefined;
};

export default function LocationList({ locations }: Props) {
  return (
    <List>
      {Array.isArray(locations) && locations.map((location) => (
        <ListItem key={location.id} button>
          <ListItemText primary={location.name} />
        </ListItem>
      ))}
    </List>
  );
}
