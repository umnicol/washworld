import { Dispatch } from "redux";
import {
  CarWashActionTypes,
  START_WASH,
  STOP_WASH,
  StartWashAction,
  StopWashAction,
} from "./types";


export const startProgram =
  (locationId: string, program: string) =>
  async (dispatch: Dispatch<CarWashActionTypes>) => {
    try {
      await fetch(
        `https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/:${locationId}/start/:${program}`,
        {
          method: "POST",
        }
      );
      const startWashAction: StartWashAction = {
        type: START_WASH,
      };
      dispatch(startWashAction);
    } catch (error) {
      console.log(error);
    }
  };

export const stopProgram = () => (dispatch: Dispatch<CarWashActionTypes>) => {
  const stopWashAction: StopWashAction = {
    type: STOP_WASH,
    payload: "",
  };
  dispatch(stopWashAction);
};
