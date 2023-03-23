import { useState } from 'react';
import { Button, Typography } from '@mui/material';

type CarWashTimerProps = {
  ProductId: string;
  LocationId: string;
};

const CarWashTimer = ({ ProductId, LocationId }: CarWashTimerProps) => {
  const [seconds, setSeconds] = useState(900); // 15 minutes in seconds
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimerId(id);
  };

  const stopTimer = async () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      try {
        await fetch(`https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/:location/start/:program
        `, {
          method: 'POST',
        });
      } catch (error) {
        console.log(error);
      }
      setSeconds(900);
    }
  };

  const formattedTime = new Date(seconds * 1000).toISOString().substr(14, 5); // format minutes and seconds only

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Typography variant="h6" sx={{ marginBottom: '1rem'}}>
            {`Your car wash program ${ProductId} at location ${LocationId}. Time: 15 min`}
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: '2rem' }}>{formattedTime}</Typography>
          <Button variant="contained" color="primary" sx={{ backgroundColor: '#06C167', '&:hover': { backgroundColor: '#06C168' } }} onClick={startTimer} disabled={timerId !== null}>
            Start Wash
          </Button>
          <Button variant="contained" color="secondary" sx={{ marginTop:'0.5rem', backgroundColor: 'red', '&:hover': { backgroundColor: 'red' } }} onClick={stopTimer} disabled={timerId === null}>
            Stop Wash
          </Button>
        </div>
      );
    };

export default CarWashTimer;
