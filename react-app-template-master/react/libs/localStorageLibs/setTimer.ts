const setTimer = (timer: string, key: string) => {
    const dataAllString = localStorage.getItem("@N1-CountDown-" + key);
    let dataObj;
    let dataTmp;

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

        localStorage.setItem("@N1-CountDown-" + key, JSON.stringify(dataTmp));
    }
}

export { setTimer };