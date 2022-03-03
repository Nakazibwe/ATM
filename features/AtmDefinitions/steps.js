const {Given,When,Then} = require('@cucumber/cucumber');
const {assertThat, is} = require('hamjest')
const Account = require('../../src/ATM');
//First Scenario. 
  Given('Account has {int} current balance', function (accamount) {
    this.account = new Account
    assertThat(this.account.currentbalance, is(accamount));
      
  });


  Given('Bank charge is {int}', function (charge) {
  assertThat(this.account.withdrawcharge, is(charge));  
  
  });


  Given('Bank minimum balance is {int}', function (minbalanceamount) {
  assertThat(this.account.minimumbalance, is(minbalanceamount))    
  
  });


  When('Customer withdraws {int}', function (withdrawamount) {
  assertThat(this.account.withdrawamount, is(withdrawamount));   
  
  });

  Then('New Account balance {int}', function (newbalance) {
  assertThat(this.account.newbal(), is(newbalance));
  });

// Second Scenario.

  Given('Account has {int}', function (amount) {
    this.account = new Account
    assertThat(this.account.currentbalance, is(amount));
  });


  Given('Customer enters Account Number {int}', function (accnumber) {
     assertThat(this.account.accountnumber, is(accnumber));
  });


 
  When('Customer deposits {int}', function (inputmoney) {
  assertThat(this.account.deposit ,is(inputmoney));
  });



  Then('Updated Account balance {int}', function (newaccbal) {
  assertThat(this.account.updatedbal(), is(newaccbal));
  });