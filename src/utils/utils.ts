function parseDate(dateString: string): Date | null {
    if (!isNaN(Date.parse(dateString))) {
        return new Date(dateString);
    }

    const parts = dateString.split('/');
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        return new Date(Date.UTC(year, month, day));
    }

    return null;
}

export const areDatesEqual = (dateString1: string, dateString2: string) => {
    // Tạo đối tượng Date từ chuỗi date1 và date2
    const date1 = parseDate(dateString1);
    const date2 = parseDate(dateString2);

    console.log(date1, date2);
    if (!date1 || !date2) {
        return false; // Nếu không thể parse một trong hai chuỗi, trả về false
    }
    // So sánh năm, tháng và ngày của hai đối tượng Date
    return (
        date1.getUTCFullYear() === date2.getUTCFullYear() &&
        date1.getUTCMonth() === date2.getUTCMonth() &&
        date1.getUTCDate() === date2.getUTCDate()
    );
};
