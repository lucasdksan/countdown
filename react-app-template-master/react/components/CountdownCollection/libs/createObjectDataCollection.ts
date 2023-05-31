import createObjectDataCollectionInterface from "../../../types/createObjectDataCollectionInterface";

const createObjectDataCollection = (response: createObjectDataCollectionInterface[]) => {
    return {
        duration: response[0].duration,
        active: response[0].active,
        finalDate: response[0].finalDate,
        initialDate: response[0].initialDate,
        currentDuration: response[0].duration,
        collection: response[0].collection
    };
}

export default createObjectDataCollection;