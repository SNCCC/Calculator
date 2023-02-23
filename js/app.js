
function init() {

    document.getElementById("textCalculation").innerHTML = "";
    document.getElementById("textResult").innerHTML = "";

    let numDiv = document.getElementById("numDiv");
    for (let i = 0; i < 10; i++) {
        let value = i + 1;
        if (value == 10) {
            value = 0;
        }
        let numObj = document.createElement("button");
        numObj.className = "btn1";
        numObj.innerHTML = value;
        numObj.selfVal = value;
        numObj.onclick = () => {
            let val = numObj.selfVal;
            console.log(val);
            document.getElementById("textCalculation").innerHTML += val;
        }
        numDiv.appendChild(numObj);
    }

    let symbolDiv = document.getElementById("symbolDiv");
    let symbols = ["+", "-", "*", "/", "."];
    for (let i = 0; i < symbols.length; i++) {
        let value = symbols[i];
        let symbolObj = document.createElement("button");
        symbolObj.className = "btn1";
        symbolObj.innerHTML = value;
        symbolObj.selfVal = value;
        symbolObj.onclick = () => {
            let val = symbolObj.selfVal;
            console.log(val);
            document.getElementById("textCalculation").innerHTML += val;
        }
        symbolDiv.appendChild(symbolObj);
    }

    let outDiv = document.getElementById("outDiv");
    let outs = ["=", "tap", "clear"];
    for (let i = 0; i < outs.length; i++) {
        let value = outs[i];
        let outObj = document.createElement("button");
        outObj.className = "btn1";
        outObj.innerHTML = value;
        outObj.selfVal = value;
        outObj.onclick = () => {
            let val = outObj.selfVal;
            console.log(val);
            if (val == "=") {
                let str = document.getElementById("textCalculation").innerHTML;
                try {
                    document.getElementById("textResult").innerHTML = "" + Math.round(Number(eval(str)) * 1000) / 1000;
                } catch {
                    document.getElementById("textResult").innerHTML = "表达式错误";
                }
            } else {
                if (val == "tap") {
                    if (document.getElementById("textCalculation").innerHTML.length > 0) {
                        document.getElementById("textCalculation").innerHTML = document.getElementById("textCalculation").innerHTML.substring(0, document.getElementById("textCalculation").innerHTML.length - 1);
                        document.getElementById("textResult").innerHTML = "";
                    }
                } else {
                    if (val == "clear") {
                        document.getElementById("textCalculation").innerHTML = "";
                        document.getElementById("textResult").innerHTML = "";
                    }
                }
            }
        }
        outDiv.appendChild(outObj);
    }
}
