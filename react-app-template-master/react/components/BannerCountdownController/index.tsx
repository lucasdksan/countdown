import React from "react";
import BannerCountdownControllerInterface from "../../types/BannerCountdownControllerInterface";
import BannerCountdownContainer from "../BannerCountdownContainer";

const BannerCountdownController = ({ duration, link, title }: BannerCountdownControllerInterface) => {
    const exemplo = {
        day: 1,
        hrs: 0,
        min: 0,
        seg: 0
    }

    return <BannerCountdownContainer timer={exemplo} link={link} title={title} />;
}

export default BannerCountdownController;