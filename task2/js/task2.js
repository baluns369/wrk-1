function clickMe()
    {
        let a = parseInt(document.getElementById('n1').value)
        let b=parseInt(document.getElementById('n2').value)
        document.getElementById("r").textContent=`the anwser is ${a*b}`
        
    }
