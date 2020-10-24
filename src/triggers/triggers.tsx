export interface trigger {
    unique_id: string;
    name: string;
    eventName: string;
}

export const TRIGGERS: trigger[] = [
    {
        unique_id: "WL",
        name: "When the window loads up",
        eventName: "onload"
    }
]
