function first(){
    let x="hie \"CSITIANS\" how are you";
    let b=x.substring(26,14);
    let c="cudiee";
    let d="hie";
    document.getElementById("one").innerHTML=x;
    document.getElementById("two").innerHTML=b;
    document.getElementById("two").innerHTML=b.toUpperCase();//uppercase ma lana
    document.getElementById("three").innerHTML=d.concat(" "+c+" <3");
    //document.getElementById("three").innerHTML=d+" "+c; duita string jodna
}
function second(){
    let stringvalue="hello! this is me";
    let stringarrayvalue=stringvalue.split("l");//aaray ma xutyaunxa
    let stringarrayvalue1=stringvalue.indexOf("!");
    let stringarrayvalue2=stringvalue.search("i");
    let stringobject=stringvalue.matchAll(/se/gi);
    let stringobject1=stringvalue.includes("me");//boolean value ma return garxa
    document.getElementById("four").innerHTML=stringvalue;
    document.getElementById("five").innerHTML=stringarrayvalue;
    document.getElementById("six").innerHTML=stringarrayvalue1;
    document.getElementById("seven").innerHTML=stringarrayvalue2;
    document.getElementById("eight").innerHTML=Array.from(stringobject).length;
    document.getElementById("nine").innerHTML=stringobject1;
}