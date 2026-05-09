//access -> modify

class BankAccount {
  readonly userID: number;
  userName: string;
//   private userBalance: number;
 protected userBalance: number;

  constructor(userID: number, userName: string, userBalance: number) {
    this.userID = userID;
    this.userName = userName;
    this.userBalance = userBalance;
  }

   addBalance(amount: number){
    this.userBalance += amount;
   }
  
}


class StudentBankAccount extends BankAccount {
    test(){
        this.userBalance += 1000; // protected access modifier allows access to the property in the child class
    }
}

const ShihabBhaiAccount = new BankAccount(101, "Shihab Bhai", 1000000);
ShihabBhaiAccount.addBalance(500000);
console.log(ShihabBhaiAccount);

const StudentAccount = new StudentBankAccount(102, "Student", 5000);
StudentAccount.test();
console.log(StudentAccount);