class Account{
//Attributes 
accountnumber = 000100023456789;
currentbalance = 200000;
minimumbalance = 10000;
withdrawcharge = 3000;
withdrawamount = 100000;
deposit = 100000;
withdraw(){

}
updatedbal(){
 const updatedbal = this.currentbalance + this.deposit;
 return updatedbal;
}
newbal(){
 const totaltransactioncost =  this.withdrawamount + this.withdrawcharge 
 const newbalance = this.currentbalance - totaltransactioncost
 return newbalance;
}
}

module.exports = Account;

