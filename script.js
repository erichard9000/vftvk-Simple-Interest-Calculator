function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + years;

    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML =
            "            If you deposit <mark>" + principal + "</mark>,<br>\n" +
            "            at an interest rate of <mark>" + rate + "%</mark>.<br>\n" +
            "            You will receive an amount of <mark>" + interest + "</mark>,<br>\n" +
            "            in the year <mark>" + futureYear + "</mark>";
    }
}

function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value + "%";

    function validateAmount() {
        var principal = document.getElementById("principal").value;
        var GreaterThanZero = parseInt(principal);
        if (GreaterThanZero<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
}

}
        
