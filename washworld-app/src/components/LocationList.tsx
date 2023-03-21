import { List, ListItem, ListItemText } from '@mui/material';
import { Location } from '../types';

type Props = {
  locations: Location[] | undefined;
};

export default function LocationList({ locations }: Props) {
  return (
<List>
  {locations && locations.length > 0 ? (
    locations.map((location) => (
      <ListItem key={location.id} button>
        <ListItemText primary={location.name} />
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
