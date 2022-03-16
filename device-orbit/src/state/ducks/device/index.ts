export interface Devices {
    id: string
    name: string
}

export interface DeviceApiResponse {
    devices: Devices[]
}


export interface DevicePageState {

    devices: DeviceApiResponse | null
    
}