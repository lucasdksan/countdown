import React from "react";
import BannerCountdownController from "./components/BannerCountdownController";
import schema from "./libs/schema";
import { validationRateTime } from "../../libs/validationRateTimer";
import { validationData } from "./libs/validationData";
import BannerCountdownInteface from "../../types/BannerCountdownInteface";

const BannerCountdown = ({ active, duration, finalDate, initialDate, link, title, name }: BannerCountdownInteface) => {
    const { isValid } = validationRateTime(finalDate, initialDate);

    if (!isValid || !active) return null;

    const timer = validationData(duration, name);

    return <BannerCountdownController duration={timer} link={link} title={title} name={name} />;
}

BannerCountdown.schema = schema;

export default BannerCountdown;