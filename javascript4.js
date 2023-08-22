function variable()
{
    String.length;
    var a="hello \"CSIT\" 2nd sem";
    var c=a.length;
    //let b=a.slice(5,12);
    let b=a.substring(12,5);
    document.getElementById("first").innerHTML=a;
    document.getElementById("second").innerHTML=c;
    document.getElementById("check").innerHTML=b;
}
function edu()
{
    let text ="choose BCA or CSIT!"
    document.getElementById("check1").innerHTML=text;
    let newtext = text.replace("BCA","BBA");
    document.getElementById("check2").innerHTML=newtext;
}
