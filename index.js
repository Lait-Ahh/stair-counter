document.querySelector('button.calculate').addEventListener('click', function(e) {
    e.preventDefault();
    const steps = parseInt(document.querySelector('input[type="number"]').value);
    var counter = [0, 0];
    for(let i = 0; i < steps; i++) {
        if(i === 0 || i === 1) {
            counter = [1, 2];
        } else {
            var temp = counter[0] + counter[1];
            counter[0] = counter[1];
            counter[1] = temp;
        }
    }
    if(steps > 1) {
        document.querySelector('div.result').innerHTML = `Il à ${counter[1]} façons de monter un escalier de ${steps} marches`;  
    } else {
        document.querySelector('div.result').innerHTML = `Il à une façons de monter un escalier de 1 marche`;
    }
});