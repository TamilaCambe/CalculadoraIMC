window.onload = () => {
    let button = document.querySelector('#bt');

    button.addEventListener("click", calculateIMC);
}

function calculateIMC() {

    let name = document.getElementById('first-name');
    let bodyW = Number.parseInt(document.getElementById('bodyW').value);
    let bodyH = Number.parseInt(document.getElementById('bodyH').value);
    let res = document.getElementById('res');

    let imc = (bodyW / ((bodyH * bodyH) / 10000)).toFixed(2)

    if (imc < 18.5)
        res.innerHTML =
        ` ${name.value}, <span>seu IMC está ${imc}</span>. <br> Você está abaixo do peso ideal. Procure um médico!`;
    else if (imc >= 18.6 && imc < 24.9)
        res.innerHTML =
        `${name.value}, <span>seu IMC está ${imc}</span>. <br> Parabéns! Você está no seu peso ideal!`;
    else if (imc >= 25 && imc < 29.9)
        res.innerHTML =
        `${name.value}, <span>seu IMC está ${imc}</span>. <br> Você está com sobrepeso. Procure um médico!`;
    else if (imc >= 30 && imc < 34.9)
        res.innerHTML =
        `${name.value}, <span>seu IMC está ${imc}</span>. <br> Obesidade grau I. Procure um médico!`;
    else if (imc >= 35 && imc < 39.9)
        res.innerHTML =
        `${name.value}, <span>seu IMC está ${imc}</span>. <br> Obesidade grau II. Procure um médico!`;
    else
        res.innerHTML =
        `${name.value}, <span>seu IMC está ${imc}</span>. <br> Obesidade grau III. Procure um médico!`;

}




//converter string pra number

/*let p = Number(bodyW.value)
let a = Number(bodyH.value)*/