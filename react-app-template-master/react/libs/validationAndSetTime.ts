import localStorageInterface from "../types/LocalStorageInterface";
import { getTimer, setFullTimer } from "./localStorageTimer";

const validationAndSetTime = (key: string, setDataCount: (data: any) => void, data: localStorageInterface, duration: string) => {
    const localCount = getTimer(key);

    if (localCount === null || localCount === "null") {
        setDataCount(data);
        setFullTimer(data, key);
    } else if (duration === localCount.currentDuration && localCount.duration !== "00:00:00") {
        setDataCount(localCount);
    } else if (duration !== localCount.currentDuration && localCount.duration === "00:00:00") {
        setDataCount(data);
        setFullTimer(data, key);
    } else if (duration !== localCount.currentDuration && localCount.duration !== "00:00:00") {
        setDataCount(data);
        setFullTimer(data, key);
    } else if (duration === localCount.currentDuration && localCount.duration === "00:00:00") {
        setDataCount("end");
    }
}

export default validationAndSetTime;