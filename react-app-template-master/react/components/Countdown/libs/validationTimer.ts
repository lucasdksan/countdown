import { setTimer } from "./localStorageTimer";

const validationTimer = (hours: number, minutes: number, seconds: number, key: string) => {
    if (hours > 0 && minutes > 0 && seconds > 0) {
        setTimer(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`, key);
    } else if (minutes > 0 && seconds > 0) {
        setTimer(`00:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`, key);
    } else if (seconds > 0) {
        setTimer(`00:00:${String(seconds).padStart(2, "0")}`, key);
    } else {
        setTimer("00:00:00", key);
    }
}

export { validationTimer };