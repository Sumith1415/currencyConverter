let from = document.querySelector("#from");
let to = document.querySelector("#to");
  
let url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';
function api(s) {
  return new Promise((resolve,reject) => {
    if(s) resolve("success");
    else reject("failed");
  });
}
    
fetch(url)
.then(response => {
  if(!response.ok) {
    alert("Fetching Failed");
  }
  return response.json();
})
.then(data => {
  for(let i in data) {
    if(i == '1000sats' || i == '1inch') continue;
    let option = document.createElement("option");
    option.setAttribute("value",i.toUpperCase());
    option.textContent = i.toUpperCase();
    from.append(option);
  }
  for(let i in data) {
    if(i == '1000sats' || i == '1inch') continue;
    let option = document.createElement("option");
    option.setAttribute("value",i.toUpperCase());
    option.textContent = i.toUpperCase();
    to.append(option);
  }
  
})
.catch(error => {
  alert("Error Occurred");
});
