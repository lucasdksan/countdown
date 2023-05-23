import React from "react";
import schema from "./libs/schema";
import BannerCountdownInteface from "../../types/BannerCountdownInteface";
import { validationRateTime } from "../../libs/validationRateTimer";
import BannerCountdownController from "../BannerCountdownController";

const BannerCountdown = ({ active, duration, finalDate, initialDate, link, title }: BannerCountdownInteface) => {
    const { isValid } = validationRateTime(finalDate, initialDate);

    if (!isValid || !active) return null;

    return <BannerCountdownController duration={duration} link={link} title={title} />;
}

BannerCountdown.schema = schema;

export default BannerCountdown;