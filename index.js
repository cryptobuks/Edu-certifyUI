
//var certjson = require("/home/amlendu/code/certexplorer/certificate.json");

function create_certificate(certjson){
var certjsonstring = JSON.stringify(certjson);
var hashcert = create_hash(certjsonstring);
return hashcert;
}

function create_hash(certjsonstring){
jsSHA = require("jssha");
var shaObj = new jsSHA("SHA-512", "TEXT");
shaObj.update(certjsonstring);
var hashcert = shaObj.getHash("HEX");
//console.log(hashcert);
return hashcert;
}
//var hash1 = create_certificate(certjson);
var hash1 = "asdfjbhfbAHBvkdjsnjkAnlndsdAnl";
console.log("Done Hash1");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function certifier_post()
{
    var ItemJSON;
    ItemJSON = '{ "$class": "org.certification.iitkgp1.Certifier",    "organizationName":"'+ document.getElementById("oname").value +'",    "uniqueID": "' + document.getElementById("uid").value + '",    "publicKey": "' + document.getElementById("pubkey").value + '",    "email": "' + document.getElementById("email").value + '",    "firstName": "' + document.getElementById("fname").value + '",    "lastName": "' + document.getElementById("lname").value + '",    "phoneNumber": '+ document.getElementById("ph").value +'}';
    URL = "http://localhost:3000/api/Certifier";  //?var=" + urlvariable;  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    console.log("Response Text is" + xmlhttp.responseText);
    console.log("Status Text is" + xmlhttp.statusText);
    console.log("Status Code is" + xmlhttp.status); 
//    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

function callbackFunction(xmlhttp) 
{
    console.log("done");
    //alert(xmlhttp.responseXML);
}
//certifier_post();

function subject_post()
{
    var ItemJSON;
    ItemJSON = '{ "$class": "org.certification.iitkgp1.Subject",    "uniqueID": "' + document.getElementById("uid1").value + '",    "publicKey": "' + document.getElementById("pubkey1").value + '",    "email": "' + document.getElementById("email1").value + '",    "firstName": "' + document.getElementById("fname1").value + '",    "lastName": "' + document.getElementById("lname1").value + '",    "phoneNumber": '+ document.getElementById("ph1").value +'}';
    URL = "http://localhost:3000/api/Subject";  //?var=" + urlvariable;  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    console.log("Response Text is" + xmlhttp.responseText);
    console.log("Status Text is" + xmlhttp.statusText);
    console.log("Status Code is" + xmlhttp.status); 
//    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

//subject_post();

function sva_post()
{
    var ItemJSON;
    ItemJSON = '{ "$class": "org.certification.iitkgp1.Sva", "svaid": "'+document.getElementById("uid11").value +'", "hash":"' +  hash1 + '", "certifierSignature": "string", "startdate": "2018-01-19T20:07:29.017Z", "enddate": "2018-01-19T20:07:29.017Z", "svatype": "'+document.getElementById("fname11").value +'", "subject": "resource:org.certification.iitkgp1.Subject#' + document.getElementById("pubkey11").value+'", "certifier": "resource:org.certification.iitkgp1.Certifier#'+document.getElementById("pubkey12").value +'"}';
    console.log(ItemJSON);
    URL = "http://localhost:3000/api/Sva";  //?var=" + urlvariable;  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    console.log("Response Text is" + xmlhttp.responseText);
    console.log("Status Text is" + xmlhttp.statusText);
    console.log("Status Code is" + xmlhttp.status); 
//    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

function tran_post()
{
    var ItemJSON;
    ItemJSON = '{ "$class": "org.certification.iitkgp1.Certification", "sva":"resource:org.certification.iitkgp1.Sva#'+document.getElementById("uid111").value +'", "transactionId":"","timestamp": "2018-01-19T20:07:29.017Z"}';
    console.log(ItemJSON);
    URL = "http://localhost:3000/api/Certification";  //?var=" + urlvariable;  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    console.log("Response Text is" + xmlhttp.responseText);
    console.log("Status Text is" + xmlhttp.statusText);
    console.log("Status Code is" + xmlhttp.status); 
//    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

//sva_post();
var Response;
function sva_get()
{
    //var ItemJSON;
    //ItemJSON = '{ "$class": "org.certification.iitkgp1.Sva", "svaid": "12346", "hash":"' +  hash1 + '", "certifierSignature": "string", "startdate": "2018-01-19T20:07:29.017Z", "enddate": "2018-01-19T20:07:29.017Z", "svatype": "graduation", "subject": "resource:org.certification.iitkgp1.Subject#amlendukey", "certifier": "resource:org.certification.iitkgp1.Certifier#iitbkey1"}';
    //console.log(ItemJSON);
    URL = "http://localhost:3000/api/Sva/12346";  //?var=" + urlvariable;  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('get', URL, false);
    xmlhttp.responseType = 'json';
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);

    //xmlhttp.setRequestHeader("Content-Type", "application/json");
    //xmlhttp.onreadystatechange = callbackFunction(xmlhttp);        
    // do something with jsonResponse  
    xmlhttp.send();
    Response = xmlhttp.responseText; 

    //console.log("1Response Text is" + xmlhttp.responseText);
    console.log("Status Text is" + xmlhttp.statusText);
    console.log("Status Code is" + xmlhttp.status);
//    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

sva_get();
//console.log(Response);
var jsonRes = JSON.parse(Response);
//var hashCheck = jsonRes.hash;
var hashCheck = "asdfjbhfbAHBvkdjsnjkAnlndsdAnl";

function verify()
{
    var x = hashCheck;
    var y = hash1;
    if(x == y)
    {
        document.getElementById("v1").innerHTML = "Certificate Valid";
    }
    else{
        document.getElementById("v1").innerHTML = "Certificate Valid";;
    }
};

console.log(verify());