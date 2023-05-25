const getTimer = (key: string) => {
    if (typeof localStorage !== "undefined") {
        const dataAllString = localStorage.getItem("@N1-CountDown-" + key);
        let dataObj;

        if (dataAllString !== null && dataAllString !== "") {
            dataObj = JSON.parse(dataAllString);

            return dataObj;
        } else return null;
    }

    return null;
}

export { getTimer };