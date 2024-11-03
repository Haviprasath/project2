
window.onload=function (){
    fetch('https://api.frankfurter.app/currencies ')
    .then((res)=>{
        if(res.ok){
            console.log("The api is working......")
           return  res.json()
        }
        else{
            console.log("The api isn't working.....")
        }
       
    })
    .then((obj)=>
        DisplayCurrency(obj)
    )
    .catch(err=>console.log(err));

    let countries_currency=document.querySelectorAll('#drop_down');
    // console.log(countries_currency[0])
    let options=[];
    function  DisplayCurrency(obj){
    
    let array=Object.entries(obj);
    console.log(Object.entries(obj))
    for(let i=0;i<array.length;i++){
        let opt=`<option value="${array[i][0]}">${array[i][0]}</option>`;
       console.log(opt);
       countries_currency[0].innerHTML+=opt;
      countries_currency[1].innerHTML+=opt;
    }
    
    }
   

    let btn=document.getElementById("btn");
    let currency=document.getElementById('currency');
    let result=document.getElementById('result');
    
   
    btn.addEventListener("click",event=>{
        let curr1=countries_currency[0].value;
        let curr2=countries_currency[1].value;
        let inputVal=currency.value;
        if(curr1===curr2)
            alert("please provide different currencies");
        else
            convertfun(curr1,curr2,inputVal);

    });

    function convertfun(curr1,curr2,inputVal){
        fetch(`https://api.frankfurter.app/latest?base=${curr1}&symbols=${curr2}`)
        .then((resp) => resp.json())
        .then((data) => {
            
        const amt=(inputVal*data.rates[curr2]).toFixed(2);
        result.value=amt;
        console.log(amt );
        });
    }

   
}
document.addEventListener("DOMContentLoaded", () => {

})
