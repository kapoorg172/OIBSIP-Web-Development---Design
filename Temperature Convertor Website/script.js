const convert = document.querySelector(".convert-btn")
const inputval = document.querySelector("#temp-input")
const selected = document.querySelector("#celsiusorfahrenheit")
const celsiusvalue = document.querySelector(".celsius-output")
const fahrenheitvalue = document.querySelector(".fahrenheit-output")
const kelvinvalue = document.querySelector(".kelvin-output")
const reset = document.querySelector(".reset-btn")


convert.addEventListener('click', (e) => {
    console.log('click')
    console.log(inputval.value)
    if (inputval.value === "") {
        alert("Please enter a number!!")
        resetEverything()
        celsiusvalue.innerHTML = `Celsius- 0 &#8451;`
    }
    if (selected.value === "celsius") {
        conCToKandF(inputval.value)
    }
    if (selected.value === "kelvin") {
        conKToCandF(inputval.value)
    }
    if (selected.value === "fahrenheit") {
        conFToKandC(inputval.value)
    }

})

reset.addEventListener('click', resetEverything)

function conCToKandF(c) {
    celsiusvalue.innerHTML = `Celsius- ${c} &#8451;`

    const celsiusToKelvin = parseInt(c) + 273.15;
    kelvinvalue.innerHTML = `Kelvin- ${celsiusToKelvin} K`

    const celsiusToFahrenheit = (parseInt(c) * 9 / 5) + 32
    fahrenheitvalue.innerHTML = `Fahrenheit- ${celsiusToFahrenheit} &#8457;`

}

function conKToCandF(k) {
    kelvinvalue.innerHTML = `Kelvin- ${k} K`

    const kelvinToCelsius = parseFloat(k) - 273.15
    celsiusvalue.innerHTML = `Celsius- ${kelvinToCelsius.toFixed(2)} &#8451;`

    const kelvinToFahrenheit = (parseFloat(k) - 273.15) * 9 / 5 + 32
    fahrenheitvalue.innerHTML = `Fahrenheit- ${kelvinToFahrenheit.toFixed(2)} &#8457;`
}

function conFToKandC(f) {
    fahrenheitvalue.innerHTML = `Fahrenheit- ${f} &#8457;`

    const fahrenheitToCelsius = (parseInt(f) - 32) * 5 / 9
    celsiusvalue.innerHTML = `Celsius- ${fahrenheitToCelsius.toFixed(2)} &#8451;`

    const fahrenheitToKelvin = ((parseInt(f) - 32) * 5 / 9) + 273.15
    kelvinvalue.innerHTML = `Kelvin- ${fahrenheitToKelvin.toFixed(2)} K`
}

function resetEverything() {
    celsiusvalue.innerHTML = "Celsius- 0 &#8451;"
    fahrenheitvalue.innerHTML = "Fahrenheit- 0 &#8457;"
    kelvinvalue.innerHTML = "Kelvin- 0 K"
    inputval.value = "";
}