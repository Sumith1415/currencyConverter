function api(s) {
    return new Promise((resolve,reject) => {
        if(s) resolve("Success");
        else reject("Failed");
    });
}

let from = document.querySelector('#from');
let to = document.querySelector('#to');

let accesskey = 'c49957d1801f1bdf2277a3462b42f601';//replace this accesskey with yours accesskey
let apiurl = 'https://api.currencylayer.com/list?access_key='+accesskey

fetch(apiurl)
.then(response => response.json())
.then(data => {
    if(data.success) {
        for(let i in data.currencies) {
            let option = document.createElement("option");
            option.setAttribute("value",i);
            option.textContent = i;
            from.append(option);
        }
        
        for(let i in data.currencies) {
            let option = document.createElement("option");
            option.setAttribute("value",i);
            option.textContent = i;
            to.append(option);
        }
        
    }
    else {
        alert("Failed to convert in json format");
    }
})
.catch(error => {
    alert("Error Occured While Fetching");
    console.error("Error Occurred");
})
