class Employees{
    #Employee_id;
    #Employee_name;
    #Employee_gender;
    #Employee_salary;
    #Employee_position;

    info(id,name,gender,salary,position){
        this.#Employee_id = id;
        this.#Employee_name = name;
        this.#Employee_gender = gender;
        this.#Employee_position = position;
        this.#Employee_salary = salary;
    }
    
    bonus() {
        if(this.#Employee_salary  >= 1000 ){
            return this.#Employee_salary * 0.2 }
            else {
                return this.#Employee_salary * 0.1
            }
    }

    totalSalary() {
        return this.#Employee_salary + this.bonus()    }

    show() {
        console.log("Employee_id = " + this.#Employee_id)
        console.log("Employee_name = " + this.#Employee_name)
        console.log("Employee_gender = " + this.#Employee_gender)
        console.log("Employee_position = " + this.#Employee_position)
        console.log("Employee_salary = " + this.#Employee_salary)
    }


}
let emp1 = new Employees();
emp1.info(1,"Rathanak","Female",1000,"Manager")
emp1.show();

emp2 = new Employees();
emp2.info(2,"Panha","Male",800,"Developer")
emp2.show();

emp3 = new Employees();
emp3.info(3,"Sophea","Female",1200,"Designer")
emp3.show();

