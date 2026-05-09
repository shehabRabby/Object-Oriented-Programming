//geetters and setters in typescript

class BankAccount {
  readonly userID: number;
  userName: string;
  private userBalance: number;

  constructor(userID: number, userName: string, userBalance: number) {
    this.userID = userID;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //  addBalance(amount: number){
  //   return this.userBalance += amount;
  //  }

  //  getBalance(){
  //   return this.userBalance;
  //  }

   //setter for userBalance
   set addBalance(amount: number){
    this.userBalance += amount;
   }

   //getter for userBalance
   get getBalance(){
    return this.userBalance;
   }

}



const ShihabBhaiAccount = new BankAccount(101, "Shihab Bhai", 100);
// ShihabBhaiAccount.addBalance(500000);
ShihabBhaiAccount.addBalance = 500; // using setter to add balance
console.log(ShihabBhaiAccount);

// console.log(ShihabBhaiAccount.getBalance());
console.log(ShihabBhaiAccount.getBalance); // using getter to get balance
