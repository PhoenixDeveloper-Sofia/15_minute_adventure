import finance from "./finance";

const date = new Date();
const year = date.getFullYear()
let i = -2;
const optionsYear = []
while (i < 2) {
    optionsYear.push(year + i)
    i++
}

const area = finance.map(item => item.area)

const filters = [
    { title: 'Год выполнения проекта', options: optionsYear },
    { title: 'Муниципальное образование', options: area }
]

export default filters;