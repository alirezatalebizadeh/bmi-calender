let $ = document;
//دسترسی به تمامی المنت های مورد نیازمون
let weightInput = $.querySelector('#weight')
let valueWeightInput = $.querySelector('#weight-val')
let heightInput = $.querySelector('#height')
let valueHeightInput = $.querySelector('#height-val')
let resElem = $.querySelector('#result')
let categoryElem = $.querySelector('#category')

let valueWeight, valueHeight, bmiValue


//محاسبه ی شاخص بر اساس اطلاعات وزنی و قدی فرد مورد نظر
function bmiCalender() {

    valueHeight = heightInput.value
    valueWeight = weightInput.value

    valueHeightInput.innerHTML = `${valueHeight} cm`
    valueWeightInput.innerHTML = `${valueWeight} kg`

    bmiValue = (valueWeight / (Math.pow(valueHeight / 100, 2))).toFixed(1)
    resElem.innerHTML = bmiValue

    if (bmiValue < 18.5) {
        categoryElem.innerHTML = 'UnderWeight'
        resElem.style.color = '#ffc44d'
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        categoryElem.innerHTML = 'Normal Weight'
        resElem.style.color = '#0be881'
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        categoryElem.innerHTML = 'OverWeight'
        resElem.style.color = '#ff884d'
    } else {
        categoryElem.innerHTML = 'Obese'
        resElem.style.color = '#ff5e4d'
    }
}


//set input event on rangeInput to calculator bmi
weightInput.addEventListener('input', bmiCalender)
heightInput.addEventListener('input', bmiCalender)

