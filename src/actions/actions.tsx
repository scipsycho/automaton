export interface actionType {
    name: string;
    action: Function
    is_system: boolean;
}

export let ACTIONS: { [key: string]: actionType } = {
    "NOOP": {
        name: "No operation",
        action: () => console.debug("NOOP performed."),
        is_system: true
    },
    "asdlkfjaslkdjf":
        {
            name: "Log operation",
            action: () => console.log("Testing the operation."),
            is_system: false
        }
}