var firstNum;
var secondNum;
var operand;

$(document).ready(function() {
    $('.num').on('click', function(){
        if(!operand) {
            if(firstNum) {
                firstNum = "" + firstNum + $(this).data("num");
            }else{
                firstNum = $(this).data("num");
            }
            console.log("First num: ", firstNum);
            firstNum = parseInt(firstNum);
            $('.display').text(firstNum);
        }else{
            if(secondNum) {
                secondNum = "" + secondNum + $(this).data("num");
            }else{
                secondNum = $(this).data("num");
            }
            secondNum = parseInt(secondNum);
            $('.display').text(secondNum);
            console.log("Second num: ", secondNum)
        }

    });

    $('.oper').on('click', function() {
        console.log("click worked for " + $(this).data("oper"));
        var oldOperand = operand;
        operand = $(this).data("oper");
        if (operand == "equals") {
            thisEquals(oldOperand);
            console.log("=");
        } else if (operand == "clear") {
            firstNum = undefined;
            secondNum = undefined;
            operand = undefined;
            $('.display').text(0);
        }

        function thisEquals(oldOperand) {
            if (oldOperand == "add") {
                console.log(firstNum + "+" + secondNum);
                firstNum = firstNum + secondNum;
                $('.display').text(firstNum);
            } else if (oldOperand == "sub") {
                firstNum = firstNum - secondNum;
                console.log(firstNum + "-" + secondNum);
                $('.display').text(firstNum);
            } else if (oldOperand == "mult") {
                firstNum = firstNum * secondNum;
                console.log(firstNum + "*" + secondNum);
                $('.display').text(firstNum);
            } else if (oldOperand == "div") {
                console.log(firstNum + "/" + secondNum);
                firstNum = firstNum / secondNum;
                $('.display').text(firstNum);
            }
            operand = undefined;
            secondNum = undefined;
        }
    });
});

