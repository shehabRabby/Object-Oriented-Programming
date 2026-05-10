//encaptulation

class BankAccount {
  readonly userID: number;
  userName: string;
  private userBalance: number;

  constructor(userID: number, userName: string, userBalance: number) {
    this.userID = userID;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private addBalance(amount: number) {
    this.userBalance += amount;
  }
  
  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

// class StudentBankAccount extends BankAccount {
//     test(){
//         this.userBalance += 1000; // protected access modifier allows access to the property in the child class
//     }
// }

const ShihabBhaiAccount = new BankAccount(101, "Shihab Bhai", 1000000);
