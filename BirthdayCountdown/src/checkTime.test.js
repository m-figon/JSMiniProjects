const checkDate = (newDate) =>{
    const MILLI_SECOND = 1;
    const SECOND = 1000 * MILLI_SECOND;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    let currentDate = new Date();
    let birthdayDate = new Date(newDate)
    if (birthdayDate.getTime() - currentDate.getTime() >= 0) {
        let days = Math.floor((birthdayDate.getTime() - currentDate.getTime()) / (DAY));
        let hours = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY)) / (HOUR));
        let minutes = Math.floor((birthdayDate.getTime() - currentDate.getTime() - (days * DAY) - (hours * HOUR)) / (MINUTE));
        let seconds = Math.floor(((birthdayDate.getTime() - currentDate.getTime()) - (days * DAY) - (hours * HOUR) - (minutes * MINUTE)) / (SECOND));
        return (days + hours + minutes + seconds);
    } else {
        return ("0")
    }
}
test('checking if date is correct', () => {
    expect(checkDate("April 29, 2020 00:00:00")).toBe("0")
});
test('checking if date is correct', () => {
    expect(checkDate("April 29, 2021 00:00:00")).toBeGreaterThan(0)
});