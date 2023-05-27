const setFullLocalStorageBanner = (data: { duration: string, currentDuration: string }, key: string) => {
    if (typeof localStorage !== "undefined") {
        const dataString = JSON.stringify(data);

        localStorage.setItem("@N1-BannerCountDown-" + key, dataString);
    }
}

export { setFullLocalStorageBanner };