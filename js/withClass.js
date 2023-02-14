let $ = document;


class bmiCalender {
    constructor() {
        //دستزسی به تمامی المنت های موردنیاز
        this.weightInput = $.querySelector('#weight')
        this.valueWeightInput = $.querySelector('#weight-val')
        this.heightInput = $.querySelector('#height')
        this.valueHeightInput = $.querySelector('#height-val')
        this.resElem = $.querySelector('#result')
        this.categoryElem = $.querySelector('#category')
        this.render()
    }

    render() {
        //set input event on input
        this.heightInput.addEventListener('input', () => {
            this.calender()
        })

        this.weightInput.addEventListener('input', () => {
            this.calender()
        })



    }
    calender() {
        //calculator
        let valueHeight = this.heightInput.value
        let valueWeight = this.weightInput.value

        this.valueHeightInput.innerHTML = `${valueHeight} cm`
        this.valueWeightInput.innerHTML = `${valueWeight} kg`

        let bmiValue = (valueWeight / (Math.pow(valueHeight / 100, 2))).toFixed(1)
        this.resElem.innerHTML = bmiValue

        this.showMessage(bmiValue)
    }
    
    //show message
    showMessage(bmiValue) {
        if (bmiValue < 18.5) {
            this.categoryElem.innerHTML = 'کمبود وزن'
            this.resElem.style.color = '#ffc44d'
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            this.categoryElem.innerHTML = 'وزن نرمال'
            this.resElem.style.color = '#0be881'
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            this.categoryElem.innerHTML = 'اضافه وزن'
            this.resElem.style.color = '#ff884d'
        } else {
            this.categoryElem.innerHTML = 'خطا'
            this.resElem.style.color = '#ff5e4d'
        }
    }
}

//call class 
new bmiCalender()

