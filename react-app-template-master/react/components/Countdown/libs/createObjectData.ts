import createObjectDataInterface from "../../../types/createObjectDataInterface";

const createObjectData = (response: createObjectDataInterface[]) => {
    return {
        productId: response[0].productId,
        duration: response[0].duration,
        active: response[0].active,
        finalDate: response[0].finalDate,
        initialDate: response[0].initialDate,
        currentDuration: response[0].duration
    };
}

export default createObjectData;