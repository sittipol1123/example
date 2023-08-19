import { useState } from "react";

const useAlert = (url: string) => {
    const [message, setMessage] = useState<string>();
    console.log("in parameter is: ", url);
    const handlemessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const element = e.target;
        setMessage(element.value);
        console.log(element.name);
    }

    return {
        message,
        handlemessage
    }
}

export default useAlert;