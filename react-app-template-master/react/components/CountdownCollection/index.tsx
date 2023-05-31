import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import CountdownCollectionInterface from "../../types/CountdownCollectionInterface";
import localStorageCollectionInterface from "../../types/localStorageCollectionInterface";
import createObjectDataCollection from "./libs/createObjectDataCollection";
import validationAndSetTimeCollection from "./libs/validationAndSetTimeCollection";
import { validationRateTime } from "../../libs/validationRateTimer";
import { validationCollection } from "./libs/validationCollection";
import schema from "./libs/schema";
import CountdownCollectionController from "./components/CountdownCollectionController";

const CountdownCollection = ({ active: activeCollection, collection }: CountdownCollectionInterface) => {
    const [dataCount, setDataCount] = useState<localStorageCollectionInterface | null | string>(null);
    const product = useProduct()?.product;
    const clusterHighlights = product?.clusterHighlights;

    useEffect(() => {
        fetch(`/api/dataentities/CD/search?_fields=collection,duration,active,finalDate,initialDate&_where=collection=${collection}`)
            .then((data) => data.json())
            .then((response) => {
                if (response.length !== 0) {
                    let data = createObjectDataCollection(response);

                    validationAndSetTimeCollection(collection, setDataCount, data, response[0].duration);
                } else setDataCount(null);
            });
    }, []);

    if (dataCount === "end" || !dataCount || typeof dataCount === "string" || !activeCollection) return null;

    const { active, duration, finalDate, initialDate } = dataCount;
    const { isValid } = validationRateTime(finalDate, initialDate);
    const { isValidCollection } = validationCollection(collection, clusterHighlights);

    if (!isValid || !active || !isValidCollection) return null;

    return <CountdownCollectionController collection={collection} timer={duration} />;
}

CountdownCollection.schema = schema;

export default CountdownCollection;