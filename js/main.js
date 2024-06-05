function r_n(){
    event.preventDefault('but1');
    var max = document.getElementById('num').valueAsNumber;
    var rrr = Math.floor(Math.random(max) * max + 1);

    document.getElementById('sp1').innerHTML = `Случайное число : ${rrr}`;
}
