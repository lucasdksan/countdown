import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import CountdownController from "../CountdownController/index";
import { validationRateTime } from "../../libs/validationRateTimer";
import validationAndSetTime from "../../libs/validationAndSetTime";
import localStorageInterface from "../../types/LocalStorageInterface";

const Countdown = () => {
    const [dataCount, setDataCount] = useState<localStorageInterface | null | string>(null);
    const product = useProduct()?.product;
    const currentProductId = product?.productId;

    useEffect(() => {
        fetch(`/api/dataentities/CD/search?_fields=productId,duration,active,finalDate,initialDate&_where=productId=${currentProductId}`)
            .then((data) => {
                return data.json();
            })
            .then((response) => {
                if (response.length !== 0) {
                    let data = {
                        productId: response[0].productId,
                        duration: response[0].duration,
                        active: response[0].active,
                        finalDate: response[0].finalDate,
                        initialDate: response[0].initialDate,
                        currentDuration: response[0].duration
                    };
                    validationAndSetTime(currentProductId, setDataCount, data, response[0].duration)
                } else {
                    setDataCount(null);
                }
            });
    }, []);

    if (dataCount === "end" || !dataCount || typeof dataCount === "string") return null;

    const { active, productId, duration, finalDate, initialDate } = dataCount;
    const { isValid } = validationRateTime(finalDate, initialDate);

    if (!isValid || !active || productId !== currentProductId) return null;

    return <CountdownController timer={duration} productKey={`${currentProductId}`} />;
}

export default Countdown;