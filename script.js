function compute()
{
    var principal= document.getElementById("principal").value;
    if (principal <= 0 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;}
    var rate=document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var interest =(principal * years * rate)/100;
    var date =new Date()
    var year= date.getFullYear()+parseInt(years);
        
    var result = document.getElementById("result");
    output = "If you deposit <mark>" + principal + "</mark>,<br>"
            + "at an interest rate of <mark>" + rate + "</mark>%.<br>"
            + "You will receive an amount of <mark>" + interest + "</mark>,<br>"
            + "in the year <mark>" + year + "</mark>";
    result.innerHTML = output;
function updateRate(){
    var ratenum= document.getElementById("rate").value;
    var output = document.getElementById("rate_val");
    var percentage = ratenum.value + "%";
    output.innerHTML = percentage;

    function validateAmount() {
        var principal = document.getElementById("principal").value;
        var GreaterThanZero = parseInt(principal) > 0;
        if (!=GreaterThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
}

}
        
