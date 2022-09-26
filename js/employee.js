function Employee(_accNum, _name, _email,_pass, _startDate, _baseSalary, _title, _monthlyWorkHours) {
    this.accNum = _accNum;
    this.name = _name;
    this.email = _email;
    this.pass = _pass;
    this.startDate = _startDate;
    this.baseSalary = _baseSalary;
    this.title = _title;
    this.monthlyWorkHours = _monthlyWorkHours;
    this.salary = 0;
    this.rank = "";

    this.calSalary = function() {
        if (this.title == "Sếp") {
            this.salary = this.baseSalary*3;
        } else if (this.title == "Trưởng phòng") {
            this.salary = this.baseSalary*2;
        } else {
            this.salary = this.baseSalary*1;
        }
        
    }
    this.ranking = function() {
        if (Number(this.monthlyWorkHours) >= 192) {
            this.rank = "Xuất sắc";
        } else if (Number(this.monthlyWorkHours) >= 176) {
            this.rank = "Giỏi";
        } else if (Number(this.monthlyWorkHours) >= 160) {
            this.rank = "Khá";
        } else {
            this.rank = "Trung bình";
        }    
    }
}