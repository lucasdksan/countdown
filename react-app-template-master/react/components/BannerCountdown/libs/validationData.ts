import { getLocalStorageBanner, setFullLocalStorageBanner } from "./localStorageBanner";

const validationData = (duration: string, key: string) => {
    const getTimer = getLocalStorageBanner(key);

    if (getTimer === null) {
        setFullLocalStorageBanner({ currentDuration: duration, duration }, key);

        return duration;
    } else if (getTimer.currentDuration === duration) return getTimer.duration as string;

    else if (getTimer.currentDuration !== duration) {
        setFullLocalStorageBanner({ currentDuration: duration, duration }, key);

        return duration;
    }

    return duration;
}

export { validationData };