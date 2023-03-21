import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import LocationList from '../components/LocationList';
import { Location } from '../types';
import axios from 'axios';

const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    // fetch locations data from the mock endpoint
    axios.get('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/locations')
      .then((response) => setLocations(response.data.response.locations))
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <Container maxWidth="sm" sx={{ marginTop: '5rem' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize:'30px' }}>
        Available Locations
      </Typography>
      <LocationList locations={locations} />
    </Container>
  );
};

export default Locations;
