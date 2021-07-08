document.querySelector('button.calculate').addEventListener('click', function(e) {
    e.preventDefault();
    const steps = parseInt(document.querySelector('input[type="number"]').value);
    const num = steps + 1
    const sqrt5 = Math.sqrt(5);
    const alpha = (1 + sqrt5) / 2;
    const beta = (1 - sqrt5) / 2;
    const gamma = alpha - beta;
    const result = Math.floor((alpha**num - beta**num)/gamma) 
    if(steps > 1) {
        document.querySelector('div.result').innerHTML = `Il à ${result} façons de monter un escalier de ${steps} marches`;  
    } else {
        document.querySelector('div.result').innerHTML = `Il à une façons de monter un escalier de 1 marche`;
    }
});