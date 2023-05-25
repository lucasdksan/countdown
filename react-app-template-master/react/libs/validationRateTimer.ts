const validationRateTime = (finalDate: string, initialDate: string) => {
    if (!finalDate && !initialDate) return { isValid: false };

    const [dateFinal, timeFinal] = finalDate.split(" ");
    const [dateInitial, timeInitial] = initialDate.split(" ");
    const dateFinalReverse = dateFinal.split("/").reverse().join("/");
    const dateInitialReverse = dateInitial.split("/").reverse().join("/");

    const dateFormatInitial = new Date(`${dateInitialReverse} ${timeInitial}`);
    const dateFormatFinal = new Date(`${dateFinalReverse} ${timeFinal}`);
    const currentDate = new Date();

    if (currentDate.getTime() >= dateFormatInitial.getTime() && currentDate.getTime() <= dateFormatFinal.getTime()) {
        return { isValid: true };
    } else {
        return { isValid: false };
    }
}

export { validationRateTime };