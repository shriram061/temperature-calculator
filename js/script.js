function ctok()
{
    let c1 = document.getElementById("celcius-1").value;
    let jk= parseFloat(c1);
    let ck=parseFloat(jk+273.15);
    document.getElementById('ctok').innerHTML=ck;
}

function ctof()
{
    let c1= document.getElementById("celcius-1").value;
    let jk=parseFloat(c1);
    // (0°C × 9/5) + 32 = 32°F
    let cf=parseFloat((jk*(9/5)+32));
    document.getElementById('ctof').innerHTML=cf;
}
function ktoc()
{
    let c1= document.getElementById("kelvin-1").value;
    let jk=parseFloat(c1);
    let kc=parseFloat(jk-273.15);
    document.getElementById('ktoc').innerHTML=kc;
}
function ktof()
{
    let c1=document.getElementById("kelvin-1").value;
    // (0K − 273.15) × 9/5 + 32 
    let jk=parseFloat(c1);
    let kf=parseFloat((jk-273.15)*(9/5)+32);
    document.getElementById('ktof').innerHTML=kf;
}
function ftok()
{
    // (0°F − 32) × 5/9 + 273.15 
    let c1=document.getElementById('Fahrenheit-1').value;
    let jk=parseFloat(c1);
    let fk=parseFloat((jk-32)*5/9+273.15);
    document.getElementById('ftok').innerHTML=fk;
}
function ftoc()
{
    let c1=document.getElementById("Fahrenheit-1").value;
    // (32°F−32) × 5/9
    let jk=parseFloat(c1);
    let fc=parseFloat((jk-32)*(5/9));
    document.getElementById('ftoc').innerHTML=fc;
}
