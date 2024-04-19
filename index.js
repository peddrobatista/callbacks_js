function display(some) {
    console.log(some)
}

function calculando(n1, n2, myCallback) {
    let sum = n1 + n2;
    myCallback(sum)
}

calculando(5, 3, display);