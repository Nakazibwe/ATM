Feature: ATM Transactions

    ATM Withdraw and Deposit
    Scenario: Withdrawing money 
        Given Account has 200000 current balance
        And Bank charge is 3000
        But Bank minimum balance is 10000
        When  Customer withdraws 100000
        Then  New Account balance 97000
        
    Scenario: Depositing money
        Given Account has 200000
        And Customer enters Account Number 000100023456789
        When Customer deposits 100000
        Then Updated Account balance 300000