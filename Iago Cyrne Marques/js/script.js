class Moedas {
    dolar;
    real;
    euro;
    libra;
    constructor() {
        this.dolar = 5.39;
        this.euro = 5.45;
        this.libra = 6.42;
    }

    converterRealDolar() {
       this.real=document.getElementById("real").value;
       console.log(this.real);
       const valoremdolar= this.real/this.dolar;
       console.log(valoremdolar)
       const valorConvertido = valoremdolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
       document.getElementById("resultadoRealDolar").innerText = `o valor convertido em dolar é ${valorConvertido}`
    }
    
    converterRealEuro() {
       this.real=document.getElementById("euro").value;
       console.log(this.real);
       const valoremeuro= this.real/this.euro;
       console.log(valoremeuro)
       document.getElementById("resultadoRealEuro").innerText = valoremeuro;
    }
    converterRealLibra() {
        this.real=document.getElementById("Libra").value;
        console.log(this.real);
        const valoremlibra= this.real/this.libra;
        console.log(valoremlibra)
        document.getElementById("resultadoRealLibra").innerText = valoremlibra;
     }
}

const moeda = new Moedas();