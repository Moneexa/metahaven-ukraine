export interface Stream {
    streamId: string;
    region: string;
}

export interface AssignStreamMachineApiBody {
    region: string;
    user_id?: string;
}

export interface Headers {
    "Content-Type": string;
    Authorization: string;

}

export interface StreamResponse {
    streams: {
        id: string;
        attributes: {
            capacities: {
                attributes: {
                    region: string;
                }
            }[]
        }
    }[]
}
