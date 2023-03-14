let moduleSave = (function () {

    let value = []
    

    //On stoke la valeur dans un tableau
    let save = () => {
        if (document.getElementById('print').value != "") {
            value.push(parseFloat(document.getElementById('print').value))
            return value
        }
        else {
            return value
        }
    }

    //On clear le tableau de save
    let clearSave = () => {
        value = []
    }

    return {
        save() {
            return save()
        },
        clearSave() {
            return clearSave()
        },

        result() {
            return result()
        },
    }
})()