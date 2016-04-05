var Bank = require('./banks/bank.js');
var sampleAccounts = require('./sample.json');
var Account = require('./banks/account.js');

window.onload = function(){
  console.log("webpack app started");

  var bank = new Bank();
  for(var accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }



  var totalDisplay = document.getElementById('total');
  totalDisplay.innerText = "Total: £" + bank.totalCash();

  var business = function(){
  var businessTypes = document.getElementById('businessTypes');
  
    for(var accounts of bank.filteredAccounts('business')){
    var businessAccount = document.createElement('li');
    businessAccount.innerText = accounts.owner
    businessTypes.appendChild(businessAccount)
    }
  }
  business();

  var personal = function(){
  var personalTypes = document.getElementById('personalTypes');
  
    for(var accounts of bank.filteredAccounts('personal')){
    var personalAccount = document.createElement('li');
    personalAccount.innerText = accounts.owner
    personalTypes.appendChild(personalAccount)
    }
  }
  personal();

  var businessTotal = document.getElementById('businessTotal');
  businessTotal.innerText = "Total: £" + bank.totalCash('business');

  var personalTotal = document.getElementById('personalTotal');
  personalTotal.innerText = "Total: £" + bank.totalCash('personal');
};






