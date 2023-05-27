import React, { useEffect, useState } from "react";
import BannerCountdownContainer from "../BannerCountdownContainer";
import BannerCountdownControllerInterface from "../../../../types/BannerCountdownControllerInterface";
import futureFullDateFuntion from "../../libs/futureFullDateFuntion";
import calcTimer from "../../../../libs/calcTimer";
import { setLocalStorageBanner } from "../../libs/localStorageBanner";

const BannerCountdownController = ({ duration, link, title, name }: BannerCountdownControllerInterface) => {
    const [timeLeft, setTimeLeft] = useState({ day: 0, hrs: 0, min: 0, seg: 0 });

    useEffect(() => {
        let countdownTimeout: ReturnType<typeof setTimeout> | null = null;

        const [daysStr, hoursStr, minutesStr, secondsStr] = duration.split(":");
        const futureDate = futureFullDateFuntion(daysStr, hoursStr, minutesStr, secondsStr);
        const controller = () => {
            const currentDate = new Date();
            const diff = futureDate.getTime() - currentDate.getTime();

            if (diff <= 0) return;

            const { days, hours, minutes, seconds } = calcTimer(diff);
            const stringDate = `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

            setTimeLeft({ day: days, hrs: hours, min: minutes, seg: seconds });
            setLocalStorageBanner(stringDate, name);

            countdownTimeout = setTimeout(controller, 1000);
        }
        controller();

        return () => clearTimeout(countdownTimeout!);
    }, [duration]);

    if (timeLeft.day <= 0 && timeLeft.hrs <= 0 && timeLeft.min <= 0 && timeLeft.seg <= 0) return null;

    return <BannerCountdownContainer timer={timeLeft} link={link} title={title} />;
}

export default BannerCountdownController;