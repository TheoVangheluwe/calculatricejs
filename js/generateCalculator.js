class Calculatrice {
    constructor () {
        this.keys = document.form;
        this.Accumulate = 0;
        this.NewNumber = false;
        this.PendingOp = "";
        this.Affichage = document.getElementById("Affichage");
    }

    NumPressed(Num) {
        if (this.NewNumber) {
            this.keys.txt1.value = Num;
            this.NewNumber = false;
        }
        else {
            if (this.keys.txt1.value == "0")
                this.keys.txt1.value = Num;
            else
                this.keys.txt1.value += Num;
        }
    }

    //on effectue les opérations
    Operation(Op) {
        var txt1 = this.keys.txt1.value
        if (this.NewNumber && this.PendingOp != "=");
        else {
            this.NewNumber = true;
            if ('+' == this.PendingOp)
                this.Accumulate += parseFloat(txt1); //parsefloat tranforme les chaines de caractères en nombre 
            else if ('-' == this.PendingOp)
                this.Accumulate -= parseFloat(txt1);
            else if ('/' == this.PendingOp)
                this.Accumulate /= parseFloat(txt1);
            else if ('*' == this.PendingOp)
                this.Accumulate *= parseFloat(txt1);
            else
                this.Accumulate = parseFloat(txt1);
            this.keys.txt1.value = this.Accumulate;
            this.PendingOp = Op;
        }
    }

    //pour les nombres décimaux
    Decimal() {
        var curtxt1 = this.keys.txt1.value;
        if (this.NewNumber) {
            curtxt1 = "0.";
            this.NewNumber = false;
        }
        else {
            if (curtxt1.indexOf(".") == -1)
                curtxt1 += ".";
        }
        this.keys.txt1.value = curtxt1;
    }

    // clear l'écran
    ClearEntry() {
        this.keys.txt1.value = "0";
        this.NewNumber = true;
    }
    Clear() {
        this.Accumulate = 0;
        this.PendingOp = "";
        calto.ClearEntry();
    }

    Delete() {
        this.Affichage.value = this.Affichage.value.slice(0, -1);
    }
}

const calto = new Calculatrice;