


function check(){
    score=0;
    var q1op1=document.getElementById("q1op3")
    var q1op2=document.getElementById("q1op2")
    var q1op3=document.getElementById("q1op1")
if (q1op1.checked==true) {
    alert("Question 1 answer is correct")
    score++;
}
else{
    alert("question 1 answer is wrong")
    }

    var q2op1=document.getElementById("q2op3")
    var q2op2=document.getElementById("q2op2")
    var q2op3=document.getElementById("q2op1") 
    if (q2op2.checked==true) {
        alert("question 2 answer is correct")
        score++;
    }
    else{
        alert("question 2 answer is wrong")
        } 

        var q3op1=document.getElementById("q3op3")
        var q3op2=document.getElementById("q3op2")
        var q3op3=document.getElementById("q3op1") 
        if (q3op1.checked==true) {
            alert("question 3 answer is correct")
            score++;
        }
        else{
            alert("question 3 answer is wrong")
            } 
    
            var q4op1=document.getElementById("q2op3")
            var q4op2=document.getElementById("q2op2")
            var q4op3=document.getElementById("q2op1") 
            if (q4op2.checked==true) {
                alert("question 4 answer is correct")
                score++;
            }
            else{
                alert("question 4 answer is wrong")
                } 
        
                var q5op1=document.getElementById("q2op3")
                var q5op2=document.getElementById("q2op2")
                var q5op3=document.getElementById("q2op1") 
                if (q5op3.checked==true) {
                    alert("question 5 answer is correct")
                    score++;
                }
                else{
                    alert("question 5 answer is wrong")
                    } 
            


        alert("the total score is" +" " +score +"/5");  
}

