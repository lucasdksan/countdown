const getLocalStorageBanner = (key: string) => {
    if (typeof localStorage !== "undefined") {
        const dataAllString = localStorage.getItem("@N1-BannerCountDown-" + key);
        let dataObj;

        if (dataAllString !== null && dataAllString !== "") {
            dataObj = JSON.parse(dataAllString);

            return dataObj;
        } else return null;
    }

    return null;
}

export { getLocalStorageBanner };