let display = document.querySelector('#display');
  
  function fun() {
    let amount = document.querySelector('#amount');
    let from = document.querySelector('#from');
    let to = document.querySelector('#to');
    
    let accesskey = 'c49957d1801f1bdf2277a3462b42f601';//replace this accesskey with yours accesskey
    let apiurl = 'https://api.currencylayer.com/convert?access_key='+accesskey+'&from='+from.value+'&to='+to.value+'&amount='+amount.value;
    
    if(isNaN(amount.value) || amount.value <= 0) {
      alert("Enter Valid Input");
      return;
    }
    
    if(from.value == "from_opt" || to.value == "to_opt") {
      alert("Choose An Option");
      return;
    }
    
    function fetchData(s) {
      return new Promise((resolve,reject) => {
        if(s) resolve("Success");
        else reject("Failed");
      });
    }
    
    fetch(apiurl)
    .then(response => {
      if(!response.ok) {
        alert("Unsuccessful Fetching");
        return
      }
      return response.json();
    })
    .then(data => {
      if(data.success) {
        display.textContent = amount.value+" "+from.value+" = "+data.result+" "+to.value;
        amount.value = "";
      }
      else alert("Data Not Converted");
    })
    .catch(error => {
      alert("Error Occured");
      console.error("Error Occurred");
    });
  }