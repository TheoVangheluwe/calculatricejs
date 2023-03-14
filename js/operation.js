let moduleOpe = (function () {

    let ope = []


    //Bouton AC (clear l'ensemble de la fonction)
    let allClear = () => {
        modulePrint.clearScreen()
        moduleSave.clearSave()
        ope = []
    }

    //ADDITION
    let addition = () => {
        values = moduleSave.save()
        modulePrint.clearScreen()
        ope.push("+")
        return values

    }


    //SOUSTRAIRE
    let moins = () => {
        values = moduleSave.save()
        modulePrint.clearScreen()
        ope.push("-")
        return values

    }


    //MULTIPLIER
    let fois = () => {
        values = moduleSave.save()
        modulePrint.clearScreen()
        ope.push("*")
        return values

    }

    //DIVISER
    let diviser = () => {
        values = moduleSave.save()
        modulePrint.clearScreen()
        ope.push("/")
        return values

    }


    //APPLIQUE TOUTES LES FONCTIONS
    let egale = () => {

        let result = 0
        let btn = document.getElementById('15')
        let display = document.getElementById("print")



        btn.addEventListener('click', function () {
            // console.log(ope)
            // console.log(ope[ope.length-1] == "+")

            if (ope[ope.length - 1] == "+") {
                result = parseFloat(values[0]) + parseFloat(display.value)
                display.value = result
            }

            if (ope[ope.length - 1] == "-") {
                result = parseFloat(values[0]) - parseFloat(display.value)
                display.value = result
            }

            if (ope[ope.length - 1] == "*") {
                result = parseFloat(values[0]) * parseFloat(display.value)
                display.value = result
            }

            if (ope[ope.length - 1] == "/") {
                if (parseFloat(display.value) == 0) {

                    let error = "ERROR"
                    display.value = error
                }
                else {
                    result = parseFloat(values[0]) / parseFloat(display.value)
                    display.value = result
                }
            }

            modulePrint.clearScreen()
            moduleSave.clearSave()
            display.value = result
            // console.log(result)
        })

    }

    return {
        addition() {
            return addition()
        },

        fois() {
            return fois()
        },

        diviser() {
            return diviser()
        },

        egale() {
            return egale()
        },

        moins() {
            return moins()
        },

        allClear() {
            return allClear()
        },


    }
})()