import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import LocationList from '../components/LocationList';
import { Location } from '../types';

const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    // fetch locations data from the mock endpoint
    fetch('https://my.api.mockaroo.com/locations.json?key=abc123')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Available Locations
      </Typography>
      <LocationList locations={locations} />
    </Container>
  );
};

export default Locations;
