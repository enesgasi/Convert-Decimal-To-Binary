const convertToBinary = (x) => {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Adım ${step++}: ${x}/2, Kalan = ${rem}, Bölüm = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    const binary = console.log(`Binary: ${bin}`);

}


const form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault()

    const data = document.getElementById("data").value

    const convertedData = convertToBinary(data);   
})








