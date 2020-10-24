export interface argument {
    name: string;
    type: string;
    description: string;
}
export interface condition {
    unique_id: string;
    name: string;
    expression: (...args: any) => boolean;
    arguments?: argument[]
}

export const CONDITIONS: condition[] = [
    {
        unique_id: "HOME",
        name: "Is url equal to ",
        expression: () => {
            let url = document.URL;
            return url === "about:home";
        }
    },
]


