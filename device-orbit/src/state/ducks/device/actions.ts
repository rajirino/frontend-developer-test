import { AnyAction } from "@reduxjs/toolkit"
import { DeviceApiResponse } from "."
import ActionType from "./types"




const createGetDevicesStart = () => {
    return {
        type: ActionType.GET_DEVICES_START
    }
}


const createGetDevicesSuccess = (data: DeviceApiResponse) => {
    return {
        type: ActionType.GET_DEVICES_SUCCESS,
        payload: data
    }
}

const createGetDevicesFailed = () => {
    return {
        type: ActionType.GET_DEVICES_FAILED
    }
}


// const clickNotifyButton = 


export const actions = {
    createGetDevicesStart,
    createGetDevicesSuccess,
    createGetDevicesFailed
}


export type devicePageAction = typeof actions;