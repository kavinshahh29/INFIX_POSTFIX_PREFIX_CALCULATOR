document.addEventListener("DOMContentLoaded", function() {
    let submit1 = document.getElementById("submit-button1");
    let texta1 = document.getElementById("text1");

    
    submit1.addEventListener("click", () => {
        let press = texta1.value;
        let post = press.trim();
        
        if (post === "") {
            alert("PLEASE ENTER");
            return;
        }

        let rank = 0;
        for (let i = 0; i < post.length; i++) {
            if ((post[i] >= 'A' && post[i] <= 'Z') || (post[i] >= 'a' && post[i] <= 'z') || (post[i] >= '0' && post[i] <= '9')) {
                rank += 1;
            } else {
                rank -= 1;
            }
            if (rank < 1) {
                alert("YOU HAVE ENTERED AN INCORRECT EXPRESSION");
                return;
            }
        }

        if (rank !== 1) {
            alert("INCORRECT EXPRESSION");
        }

        let ans = [];
        for (let i = 0; i < post.length; i++) {
            if ((post[i] >= 'A' && post[i] <= 'Z') || (post[i] >= 'a' && post[i] <= 'z' ||(post[i]>='0'&& post[i]<='9'))) {
                ans.push(post[i]);
            } else {
                let a = ans.pop();
                let b = ans.pop();
                let c = "(" + b + post[i] + a + ")";
                ans.push(c);
            }
        }

        // CREATING NEW DIV AND ADDING IN THE DIV USING APPEND
        let resultDiv = document.createElement("div");
        resultDiv.className = "result";
        resultDiv.textContent = ans.pop();  // TO DISPLAY THE ANSWER

        
        divi1.appendChild(resultDiv);

        // ADDING ERASE OPTION TO REMOVE ANSWER 
        let eraseButton = document.createElement("button");
        eraseButton.textContent = "ERASE";
        eraseButton.addEventListener("click", () => {
           divi1.removeChild(eraseButton);
            divi1.removeChild(resultDiv);

        });
        divi1.appendChild(eraseButton);
    });

        
    let submit2=document.getElementById("submit-button2");
    let texta2=document.getElementById("text2");
    

    submit2.addEventListener("click",()=>{
        let temp=texta2.value;
        let press2=temp.trim();
        
        let ans2="";
        for(let i=press2.length-1;i>=0;i--)
        {
            ans2+=press2[i];
        }
        console.log(ans2);
        if(ans2==="")
        {
            alert("PLEASE ENTER EXPRESSION");
        }
        let rank=0;
        for(let i=0;i<ans2.length;i++)
        {
            if((ans2[i]>='A' && ans2[i]<='Z') || (ans2[i]>='a'&& ans2[i]<='z') || (ans2[i]>='0' && ans2[i]<='9'))
            {
              rank+=1;

            }
            else
            {
                rank-=1;
            }
            if(rank<1)
            {
                alert("PLEASE ENTER VALID EXPRESSION");
                return;
            }
        }
        if(rank!=1)
        {
            alert("ENTER EXPRESSION IS INVALID");
            return;
        }
        let inf=[];
        for(let i=0;i<ans2.length;i++)
        {
            if((ans2[i]>='A' && ans2[i]<='Z') || (ans2[i]>='a' && ans2[i]<='z') ||(ans2[i]>='0'&& ans2[i]<='9'))
            {
                inf.push(ans2[i]);
                
            }
            else
            {
                let x=inf.pop();
                let y=inf.pop();
                let z="(" +x+ans2[i]+y+")";
                inf.push(z);
    
            }


        }
             


        let resultDiv2 = document.createElement("div");
        resultDiv2.className = "result";
        resultDiv2.textContent = inf.pop();  // TO DISPLAY THE ANSWER

        
        divi2.appendChild(resultDiv2);

        // ADDING ERASE OPTION TO REMOVE ANSWER 
        let eraseButton = document.createElement("button");
        eraseButton.textContent = "ERASE";
        eraseButton.addEventListener("click", () => {
           divi2.removeChild(eraseButton);
            divi2.removeChild(resultDiv2);

        });
        divi2.appendChild(eraseButton);



         });












         let submit3 = document.getElementById("submit-button3");
         let texta3 = document.getElementById("text3");
         
         submit3.addEventListener("click", () => {
         
             let txt = texta3.value.trim();
             function check_precedence(a) {
                 if (a === '+' || a === '-')
                     return 1;
                 else if (a === '*' || a === '/' || a === '%')
                     return 2;
                 else if (a === '^')
                     return 3;
                 else 
                     return -1;
             }
         
             let stack = [];
             let ans = "";
             let rnk = 0;
         
             for (let i = 0; i < txt.length; i++) {
                 if ((txt[i] >= 'A' && txt[i] <= 'Z') || (txt[i] >= 'a' && txt[i] <= 'z') || (txt[i] >= '0' && txt[i] <= '9')) {
                     ans += txt[i];
                     rnk += 1;
                 } else if (txt[i] == '(') {
                     stack.push(txt[i]);
                 } else if (txt[i] == ')') {
                     while (stack.length != 0 && stack[stack.length - 1] != '(') {
                         ans += stack.pop();
                         rnk -= 1;
                     }
                     stack.pop(); // Remove the '(' from the stack
                 } else {
                     while (stack.length != 0 && check_precedence(stack[stack.length - 1]) >= check_precedence(txt[i])) {
                         ans += stack.pop();
                         rnk -= 1;
                     }
                     stack.push(txt[i]);
                 }
         
                 // Check the rank after processing each character
                 if (rnk < 1 && ans !== "") {
                     alert("ENTERED EXPRESSION IS INCORRECT");
                     return;
                 }
             }
         
             // Empty the stack after processing the entire string
             while (stack.length != 0) {
                 if (stack[stack.length - 1] == '(') {
                     alert("ENTERED EXPRESSION IS INCORRECT");
                     return;
                 }
                 ans += stack.pop();
             }
         
             let resultdiv=document.createElement("div");
             resultdiv.textContent=ans;
             divi3.appendChild(resultdiv);
             let ebutton=document.createElement("button");
             ebutton.textContent="ERASE";
             divi3.appendChild(ebutton);
             ebutton.addEventListener("click",()=>{
                divi3.removeChild(ebutton);
                divi3.removeChild(resultdiv);
             })   


         });






let submit4 = document.getElementById("submit-button4");
let texta4 = document.getElementById("text4");

submit4.addEventListener("click", () => {

    let text = texta4.value.trim();
    let txt = "";
    for (let i = text.length-1; i>=0; i--) {
        if (text[i] == '(')
            txt += ")";
        else if (text[i] === ')')
            txt += "(";
        else
            txt += text[i];
    }

    function check_precedence(a) {
        if (a === '+' || a === '-')
            return 1;
        else if (a === '*' || a === '/' || a === '%')
            return 2;
        else if (a === '^')
            return 3;
        else
            return -1;
    }

    let stack = [];
    let ans = "";
    let rnk = 0;

    for (let i = 0; i < txt.length; i++) {
        console.log(txt[i]);
        if ((txt[i] >= 'A' && txt[i] <= 'Z') || (txt[i] >= 'a' && txt[i] <= 'z') || (txt[i] >= '0' && txt[i] <= '9')) {
            ans += txt[i];
            rnk += 1; 
        } else if (txt[i] == '(') {
            stack.push(txt[i]);
        } else if (txt[i] == ')') {
            while (stack.length > 0 && stack[stack.length - 1] != '(') {
                ans += stack.pop();
                rnk -= 1; 
                
            }
            stack.pop(); 
        } else {
            while (stack.length >0 && (check_precedence(stack[stack.length-1]) > check_precedence(txt[i]))) 
            { 
                ans += stack.pop();
                rnk -= 1;                
            }
            stack.push(txt[i]);
        }

        
        if (rnk<1 && ans!="") { 
            alert("ENTERED EXPRESSION IS INCORRECT");
            return;
        }
    }

    
    while (stack.length > 0) {
        if(stack[stack.length - 1] == '('){
             alert("ENTERED EXPRESSION IS INCORRECT");
             return;
         }
         ans += stack.pop();
         rnk -=1 ; 
     }

     if(rnk !==1){
         alert("ENTERED EXPRESSION IS INCORRECT");
         return;
     }

     let ansreverse="";
     for(let i=ans.length-1;i>=0;i--)
     {
        ansreverse+=ans[i];
     }
     let resultdiv=document.createElement("div");
     resultdiv.textContent=ansreverse;
     divi4.appendChild(resultdiv);
     let ebutton=document.createElement("button");
     ebutton.textContent="ERASE";
     divi4.appendChild(ebutton);
     ebutton.addEventListener("click",()=>{
         divi4.removeChild(ebutton);
         divi4.removeChild(resultdiv);
      })   
});





















});

      









    







   












