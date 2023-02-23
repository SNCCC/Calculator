
function init() {

    document.getElementById("textCalculation").innerHTML = "";
    document.getElementById("textResult").innerHTML = "";

    let nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    let numDiv = document.getElementById("numDiv");
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];

        let obj = document.createElement("button");
        obj.className = "btn1";
        obj.innerHTML = value;
        obj.selfVal = value;
        obj.onclick = () => {
            let val = obj.selfVal;
            console.log(val);
            document.getElementById("textCalculation").innerHTML += val;
        }
        numDiv.appendChild(obj);
    }

    let funDiv = document.getElementById("funDiv");
    let funs = ["00", "0", "."];
    for (let i = 0; i < funs.length; i++) {
        let value = funs[i];
        let obj = document.createElement("button");
        obj.className = "btn1";
        obj.innerHTML = value;
        obj.selfVal = value;
        obj.onclick = () => {
            let val = obj.selfVal;
            console.log(val);
            document.getElementById("textCalculation").innerHTML += val;
        }
        funDiv.appendChild(obj);
    }

    let symbolDiv = document.getElementById("symbolDiv");
    let symbols = ["÷", "×", "－", "＋", "＝"];
    for (let i = 0; i < symbols.length; i++) {
        let value = symbols[i];
        let obj = document.createElement("button");
        obj.className = "btn2";
        obj.innerHTML = value;
        obj.selfVal = value;
        obj.onclick = () => {
            let val = obj.selfVal;
            console.log(val);
            if (val == "＝") {
                let str = document.getElementById("textCalculation").innerHTML;
                str = str.replace("＋", "+");
                str = str.replace("－", "-");
                str = str.replace("×", "*");
                str = str.replace("÷", "/");
                try {
                    document.getElementById("textResult").innerHTML = "=" + Math.round(Number(eval(str)) * 1000) / 1000;
                } catch {
                    document.getElementById("textResult").innerHTML = "表达式错误";
                }
            } else {
                document.getElementById("textCalculation").innerHTML += val;
            }
        }
        symbolDiv.appendChild(obj);
    }

    let outDiv = document.getElementById("outDiv");
    let outs = ["C", "←", "%"];
    for (let i = 0; i < outs.length; i++) {
        let value = outs[i];
        let obj = document.createElement("button");
        obj.className = "btn2";
        obj.innerHTML = value;
        obj.selfVal = value;
        obj.onclick = () => {
            let val = obj.selfVal;
            console.log(val);
            if (val == "C") {
                document.getElementById("textCalculation").innerHTML = "";
                document.getElementById("textResult").innerHTML = "";
            } else {
                if (val == "←") {
                    if (document.getElementById("textCalculation").innerHTML.length > 0) {
                        document.getElementById("textCalculation").innerHTML = document.getElementById("textCalculation").innerHTML.substring(0, document.getElementById("textCalculation").innerHTML.length - 1);
                        document.getElementById("textResult").innerHTML = "";
                    }
                } else {
                    if (val == "%") {
                        let str = document.getElementById("textCalculation").innerHTML;
                        str = str.replace("＋", "+");
                        str = str.replace("－", "-");
                        str = str.replace("×", "*");
                        str = str.replace("÷", "/");
                        try {
                            document.getElementById("textResult").innerHTML = "%=" + Math.round((Number(eval(str)) / 100) * 1000) / 1000;
                        } catch {
                            document.getElementById("textResult").innerHTML = "表达式错误";
                        }
                    }
                }
            }
        }
        outDiv.appendChild(obj);
    }
}
