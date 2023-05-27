import React, { useState, useEffect } from "react";
import CountdownContainer from "../CountdownContainer";
import { validationTimer } from "../../libs/validationTimer";
import futureDateFuntion from "../../libs/futureDateFuntion";
import calcTimer from "../../../../libs/calcTimer";
import CountdownControllerInterface from "../../../../types/CountdownControllerInterface";

const CountdownController = ({ timer, productKey }: CountdownControllerInterface) => {
    const [timeLeft, setTimeLeft] = useState({ hrs: 0, min: 0, seg: 0 });
    useEffect(() => {
        let countdownTimeout: ReturnType<typeof setTimeout> | null = null;

        const [hoursStr, minutesStr, secondsStr] = timer.split(":");
        const futureDate = futureDateFuntion(hoursStr, minutesStr, secondsStr);

        const controller = () => {
            const currentDate = new Date();
            const diff = futureDate.getTime() - currentDate.getTime();

            if (diff <= 0) {
                validationTimer(0, 0, 0, productKey);
                return;
            }

            let { hours, minutes, seconds } = calcTimer(diff);

            setTimeLeft({ hrs: hours, min: minutes, seg: seconds });
            validationTimer(hours, minutes, seconds, productKey);

            countdownTimeout = setTimeout(controller, 1000);
        };

        controller();
        return () => clearTimeout(countdownTimeout!);
    }, [timer, productKey]);

    if (timeLeft.hrs <= 0 && timeLeft.min <= 0 && timeLeft.seg <= 0) return null;

    return <CountdownContainer timer={timeLeft} />;
};

export default CountdownController;