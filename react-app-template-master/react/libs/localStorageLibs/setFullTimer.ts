import localStorageInterface from "../../types/LocalStorageInterface";

const setFullTimer = (data: localStorageInterface, key: string) => {
    const dataString = JSON.stringify(data);

    localStorage.setItem("@N1-CountDown-" + key, dataString);
}

export { setFullTimer };