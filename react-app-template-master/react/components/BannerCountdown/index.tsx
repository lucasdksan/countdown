import React from "react";
import BannerCountdownInteface from "../../types/BannerCountdownInteface";
import schema from "./libs/schema";
import { validationRateTime } from "../../libs/validationRateTimer";
import BannerCountdownController from "./components/BannerCountdownController";

const BannerCountdown = ({ active, duration, finalDate, initialDate, link, title }: BannerCountdownInteface) => {
    const { isValid } = validationRateTime(finalDate, initialDate);

    if (!isValid || !active) return null;

    return <BannerCountdownController duration={duration} link={link} title={title} />;
}

BannerCountdown.schema = schema;

export default BannerCountdown;