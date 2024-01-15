// class User {
//     //Fields, Properties (Variables)
//     // username!: string; //! means that telling TS to trust me.
//     private _username!: string;
//     private _password!: string; // Giving the value by empty string, so TS don't get an error.

//     constructor(username: string, password: string) {
//         this.setUsername(username);
//         this.setPassword(password);
//     }

//     // getter and setter methods
//     getUsername() {
//         return this._username;
//     }

//     getPassword() {
//         return this._password;
//     }
    
//     setPassword(password: string) {
//         if(password.length < 3) {
//             throw new Error("Password is too short");
//         }
//         this._password = password;
//     }

//     setUsername(name: string) {
//         if(name.length > 0) {
//             throw new Error("name must be at least 1 character.")
//         }
//         this._username = name;
//     }

//     // the function here, doesn't need name.
//     printInfo(): void {
//         console.log(this._username, this._password);
//     }
//     //void means that nothing is going to return, usually for console.log
// }

// // {} this is not a object, and it called instance. 
// const john = new User("john123", "123");
// john.setUsername("");

// interface Course {
//     location: string;
//     courseNumber: string;
//     courseName: string;
// }

// interface Person { // This is for shared informations
//     name: string;
//     age: number;
//     courses: Course[];
// }

// interface Teacher extends Person { // some unique informations.
    
// }

// interface Student extends Person {
//     gradeNumber: number;
// }

// interface Classroom {
//     teacher: Teacher;
//     student: Student[];
// }

// function registerStudent(student: Student) {
    
// }

// class Users {
//     username: string;
//     password: string;
//     bank: RBCBank;
// }

class SavingsAccount {
    // Data
    private _memberId: number;
    private _balance: number;
    
    constructor(memberId: number, startingBalance: number) {
        this._memberId = memberId;
        this._balance = startingBalance;
    }

    //getter
    getBalance() {
        return this._balance;
    }

    // Methods
    withdraw(amount: number) {
        if(amount > this._balance) {
            throw new Error("There is not enough money to withdraw the amount of money");
        }
        this._balance -= amount;
    }
    deposit(amount: number) {
        this._balance += amount;
    }
}

class BankMember {
    private _name: string;
    private _memberId: number;
    private _savingsAccount!: SavingsAccount;

    constructor(name: string) {
        this._name = name;
        this._memberId = this.generateId();
    }

    depositToSavings(amount: number) {
        this._savingsAccount.deposit(amount);
    }

    withdrawFromSavings(amount: number) {
        this._savingsAccount.withdraw(amount);
    }

    viewSavingsBalance() {
        `Your balance is: 
        ${this._savingsAccount.getBalance()}`;
    }

    craeteSavingsAccount(startingBalance: number) {
        this._savingsAccount = new SavingsAccount(this._memberId, startingBalance);
    }

    private generateId():number {
        return Math.random() * 5000;
    }
}

const james = new BankMember("James");
james.craeteSavingsAccount(40);
james.depositToSavings(10);
james.viewSavingsBalance();