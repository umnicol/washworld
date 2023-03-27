import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { RootState } from "../../store";
import { startProgram, stopProgram } from "<washworld>/carWashActions";

type CarWashTimerProps = {
  productId: string;
  locationId: string;
};

const CarWashTimer = ({ productId, locationId }: CarWashTimerProps) => {
  const [seconds, setSeconds] = useState(900); // 15 minutes in sec
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const dispatch = useDispatch();

  const startTimer = () => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimerId(id);
    const startWashAction = startProgram(locationId, productId);
    dispatch(startWashAction);
  };

  const stopTimer = async () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      await dispatch(stopProgram());
      setSeconds(900);
    }
  };

  const formattedTime = new Date(seconds * 1000)
    .toISOString()
    .substr(14, 5); // formated minutes and seconds

  const isWashing = useSelector((state: RootState) => state.isWashing);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h5" sx={{ marginBottom: '1rem'}}>
        {`Your car wash program ${productId} at location ${locationId}. Time: 15 min`}
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
