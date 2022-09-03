export const dateConvertor = (selectedDate) => {
    const dateObj = new Date(selectedDate).toDateString().split(' ')
    const date = `${dateObj[1]} ${dateObj[2]}, ${dateObj[3]}`
    return date
}