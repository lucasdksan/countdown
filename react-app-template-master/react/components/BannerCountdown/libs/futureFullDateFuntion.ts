const futureFullDateFuntion = (daysStr: string, hoursStr: string, minutesStr: string, secondsStr: string) => {
    const futureDate = new Date();

    futureDate.setDate(futureDate.getDate() + parseInt(daysStr));
    futureDate.setHours(futureDate.getHours() + parseInt(hoursStr));
    futureDate.setMinutes(futureDate.getMinutes() + parseInt(minutesStr));
    futureDate.setSeconds(futureDate.getSeconds() + parseInt(secondsStr));

    return futureDate;
}

export default futureFullDateFuntion;