const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

function calcFlujo(peso) {
    let flujo = 0;

    if (peso >= 0 && peso <= 10) {
        flujo = peso * 100 / 24; // Divide por 24 para obtener la tasa por hora.
    } else if (peso > 10 && peso <= 20) {
        flujo = (1000 + (peso - 10) * 50) / 24; // Divide por 24 para obtener la tasa por hora.
    } else if (peso > 20) {
        flujo = (1000 + 500 + (peso - 20) * 20) / 24; // Divide por 24 para obtener la tasa por hora.
    }

    return flujo;
}

CALCULAR.addEventListener('click', () => {
    const DATO = parseFloat(document.getElementById('peso').value);
    
    if (!isNaN(DATO) && DATO >= 0) {
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});
