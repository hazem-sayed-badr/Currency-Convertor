let currencies=[
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STD",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",  
    "XDR",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
];

//get api From Link
let apikey="f3e9c32e5fd160e52f6f670e";
let apiURl="https://v6.exchangerate-api.com/v6/f3e9c32e5fd160e52f6f670e/latest/USD";
let amount=document.getElementById("amount");
let convertfrom=document.getElementById("convert-from");
let convertto=document.getElementById("convert-to");
let convertbutton=document.querySelector(".convert-button");
let resultp=document.querySelector(".result");
currencies.forEach(currency => {    
    let option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    convertfrom.add(option);
});
currencies.forEach(currency => {    
    let option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    convertto.add(option);
});
convertfrom.value="USD";
convertto.value="EGP";
function CurrencyConverter(){
    let amountvalue=amount.value;
    let fromnumber=convertfrom.value;
    let tonumber=convertto.value;
    if(amountvalue.length !=0){
        fetch(apiURl).then((resp)=>resp.json()).then((data)=>{
            console.log(data);
            let fromexchangerate=data.conversion_rates[fromnumber];
            let toexchangerate=data.conversion_rates[tonumber];
            let convertedamount=(amountvalue / fromexchangerate) * toexchangerate;
            resultp.innerHTML=`${amountvalue} ${fromnumber} = ${convertedamount.toFixed(2)} ${tonumber}`;
            
        })
    }
    else{
        alert("Please Enter Anumber");
    }
}
convertbutton.addEventListener("click",CurrencyConverter);

