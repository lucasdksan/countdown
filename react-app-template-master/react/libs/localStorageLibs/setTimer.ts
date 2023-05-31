const setTimer = (timer: string, key: string, collection: boolean) => {
    const dataAllString = localStorage.getItem("@N1-CountDown-" + key);
    let dataObj, dataTmp, dataTmpCollection;

    if (dataAllString !== null && dataAllString !== "" && dataAllString !== "null") {
        dataObj = JSON.parse(dataAllString);
        dataTmp = {
            active: dataObj.active,
            productId: dataObj.productId,
            duration: timer,
            finalDate: dataObj.finalDate,
            initialDate: dataObj.initialDate,
            currentDuration: dataObj.currentDuration
        };
        dataTmpCollection = {
            active: dataObj.active,
            collection: dataObj.collection,
            duration: timer,
            finalDate: dataObj.finalDate,
            initialDate: dataObj.initialDate,
            currentDuration: dataObj.currentDuration
        };

        localStorage.setItem("@N1-CountDown-" + key, JSON.stringify(!collection ? dataTmp : dataTmpCollection));
    }
}

export { setTimer };