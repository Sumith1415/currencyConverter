function process() {
    let amount = document.querySelector("#amount");
    let from = document.querySelector("#from");
    let to = document.querySelector("#to");
    let display = document.querySelector("#display");
    let submit = document.querySelector("#submit");
    
    if(isNaN(amount.value) || amount.value <= 0) {
      alert("Enter Valid Input");
      return;
    }
    if(from.value == "from_opt" || to.value == "to_opt") {
      alert("Choose An Option");
      return;
    }
      
    let baseUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';
     
    let url = `${baseUrl}/${from.value.toLowerCase()}.json`
    function api(s) {
       return new Promise((resolve,reject) => {
         if(s) resolve("success");
         else reject("failed");
       });
     }
    
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new error("Fail to fetch");
      }
      return response.json();
    })
    .then(data => {
      const rate = data[from.value.toLowerCase()][to.value.toLowerCase()];
      let finalAmt = amount.value * rate;
      display.textContent = `${amount.value} ${from.value} = ${finalAmt} ${to.value}`;
      amount.value = "";  
    })
    .catch(error => {
      alert("Error Occurred, "+error);
    });
  }