import localStorageInterface from "../../types/LocalStorageInterface";
import localStorageCollectionInterface from "../../types/localStorageCollectionInterface";

const setFullTimer = (data: localStorageInterface | localStorageCollectionInterface, key: string) => {
    const dataString = JSON.stringify(data);

    localStorage.setItem("@N1-CountDown-" + key, dataString);
}

export { setFullTimer };