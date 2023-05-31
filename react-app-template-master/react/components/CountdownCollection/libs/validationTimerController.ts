import { setTimer } from "./localStorageTimerCollection";


const validationTimerController = (hours: number, minutes: number, seconds: number, key: string) => {
    if (hours > 0 && minutes > 0 && seconds > 0) {
        setTimer(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`, key, true);
    } else if (minutes > 0 && seconds > 0) {
        setTimer(`00:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`, key, true);
    } else if (seconds > 0) {
        setTimer(`00:00:${String(seconds).padStart(2, "0")}`, key, true);
    } else {
        setTimer("00:00:00", key, true);
    }
}

export default validationTimerController;