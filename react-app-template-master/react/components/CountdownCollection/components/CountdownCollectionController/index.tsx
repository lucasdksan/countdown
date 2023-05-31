import React, { useState, useEffect } from "react";
import CountdownCollectionContainer from "../CountdownCollectionContainer";
import CountdownCollectionControllerInterface from "../../../../types/CountdownCollectionControllerInterface";
import futureDateFuntion from "../../../../libs/futureDateFuntion";
import validationTimerController from "../../libs/validationTimerController";
import calcTimer from "../../../../libs/calcTimer";

const CountdownCollectionController = ({ collection, timer }: CountdownCollectionControllerInterface) => {
    const [timeLeft, setTimeLeft] = useState({ hrs: 0, min: 0, seg: 0 });

    useEffect(() => {
        let countdownTimeout: ReturnType<typeof setTimeout> | null = null;

        const [hoursStr, minutesStr, secondsStr] = timer.split(":");
        const futureDate = futureDateFuntion(hoursStr, minutesStr, secondsStr);

        const controller = () => {
            const currentDate = new Date();
            const diff = futureDate.getTime() - currentDate.getTime();

            if (diff <= 0) {
                validationTimerController(0, 0, 0, collection);
                return;
            }

            let { hours, minutes, seconds } = calcTimer(diff);

            setTimeLeft({ hrs: hours, min: minutes, seg: seconds });
            validationTimerController(hours, minutes, seconds, collection);

            countdownTimeout = setTimeout(controller, 1000);
        }

        controller();
        return () => clearTimeout(countdownTimeout!);
    }, [timer, collection]);

    if (timeLeft.hrs <= 0 && timeLeft.min <= 0 && timeLeft.seg <= 0) return null;

    return <CountdownCollectionContainer timer={timeLeft} />;
}

export default CountdownCollectionController;