import { Devices, DeviceApiResponse, DevicePageState } from ".";
import {AnyAction} from 'redux';
import ActionType from './types';


const initState: DevicePageState = {
   
    devices: null
    
  };



  const devicePageReducer = (
    state: DevicePageState = initState,
    action: AnyAction
): DevicePageState => { 

    switch(action.type){
    
    case ActionType.INIT:
        return {
            ...initState
            
        };

    case ActionType.GET_DEVICES_START:
        return {
            ...state,
            devices: action.payload
        };
     

    default:

        return state

    }   
}

export default devicePageReducer;