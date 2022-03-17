import { History } from 'history'
import { ThunkDispatch } from 'redux-thunk'
import { actions } from './actions'
import { deviceApi } from './api'

type Dispatch = ThunkDispatch<any, void, any>

const initialize = () => (dispatch : Dispatch) => {

    dispatch(actions.initialize())

    getDevices(dispatch)

}


const getDevices = async(dispatch: Dispatch) => {

    dispatch(actions.createGetDevicesStart())

    try {

        const {status, data } = await deviceApi.getDevices()

        if(status === 200)
        dispatch(actions.createGetDevicesSuccess(data))
        else
        dispatch(actions.createGetDevicesFailed())

    }catch(err){

        dispatch(actions.createGetDevicesFailed())
    }

    
    return undefined

}



export const operations = {
    initialize
};