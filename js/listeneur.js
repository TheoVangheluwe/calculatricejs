let moduleListeneur = (function () {


    let nombre = () => {

        let nbr = ""
        let display = document.getElementById("print")

        for (let i = 1; i <= 11; i++) {
            let id = i
            let btn = document.getElementById(id);

            btn.addEventListener('click', function () {
                nbr += btn.value
                display.value = nbr

            })

        }
    }


    return {
        nombre() {
            return nombre()
        }
    }

})();