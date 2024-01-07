const ConvTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const unitSelector = document.getElementById('units');
    const unitSelected = unitSelector.options[unitSelector.selectedIndex].value;

    // For Converting Celcius To Fahrenheit...
    const celToFar = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // For Converting Fahrenheit To Celcius...
    const farToCel = (far) => {
        let celcius = ((far - 32) * 5 / 9).toFixed(1);
        return celcius;
    }

    if (unitSelected == 'cel') {
        document.getElementById("result").innerHTML = celToFar(inputTemp) + "&#176; Fahrenheit";
    }
    
    else {
        document.getElementById("result").innerHTML = farToCel(inputTemp) + "&#176; Celcius";
    }
}
