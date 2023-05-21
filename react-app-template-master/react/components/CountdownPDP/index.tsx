import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import CountdownController from "../CountdownController";
import localStorageInterface from "../../types/LocalStorageInterface";
import validationAndSetTime from "../../libs/validationAndSetTime";
import { validationRateTime } from "../../libs/validationRateTimer";

const CountdownPDP = () => {
    const [dataCount, setDataCount] = useState<localStorageInterface | null | string>(null);
    const product = useProduct()?.product;
    const currentProductId = product?.productId;

    useEffect(() => {
        fetch(`/api/dataentities/CD/search?_fields=productId,duration,active,finalDate,initialDate&_where=productId=${currentProductId}`)
            .then((data) => {
                return data.json();
            })
            .then((response) => {
                if (response.lenght !== 0) {
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

    if (dataCount === "end") return null;
    if (!dataCount) return null;
    if (typeof dataCount === "string") return null;

    const { active, productId, duration, finalDate, initialDate } = dataCount;

    const { isValid } = validationRateTime(finalDate, initialDate);

    if (!isValid) return null;
    if (!active) return null;
    if (productId !== currentProductId) return null;

    return <CountdownController timer={duration} productKey={`${currentProductId}`} />;
}

export default CountdownPDP;