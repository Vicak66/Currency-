document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("form").onsubmit = function () {

        fetch("https://open.er-api.com/v6/latest/USD")
            .then((response) => response.json())
            .then((data) => {
                const cy = document.querySelector("#currency").value.toUpperCase();
                const rate = data.rates[cy];

                if (rate !== undefined) {
                    document.querySelector("#result").textContent = `တဒေါ်လာလျှင် ${rate.toFixed(2)} ${cy}.`;
                }
                else {
                    document.querySelector("#result").textContent = `ယနေ့ဒေါ်လာစျေး မသတ်မှတ်ရသေးပါ`;
                }
            })

            
            .catch((error) => {
                console.log("Error", error);
            });


        return false;
    };
    

    
});