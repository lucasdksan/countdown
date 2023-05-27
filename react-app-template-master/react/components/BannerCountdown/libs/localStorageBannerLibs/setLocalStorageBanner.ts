const setLocalStorageBanner = (timer: string, key: string) => {
    const dataString = localStorage.getItem("@N1-BannerCountDown-" + key);
    let dataObj;
    let dataTmp;

    if (dataString !== null && dataString !== "" && dataString !== "null") {
        dataObj = JSON.parse(dataString);
        dataTmp = {
            duration: timer,
            currentDuration: dataObj.currentDuration
        };

        localStorage.setItem("@N1-BannerCountDown-" + key, JSON.stringify(dataTmp));
    }

}

export { setLocalStorageBanner };