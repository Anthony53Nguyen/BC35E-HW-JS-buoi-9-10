function EmployeeList() {
    this.arr = [];
    this.addEmpl = function(e) {
        this.arr.push(e);
    }
    this.searchEmpl = function(accNum) {
        var index = -1;
        this.arr.forEach(function(e, i) {
            if (e.accNum === accNum) {
                index = i;
            }
        });
        return index;
    }
    this.delEmpl = function(accNum) {
        var index = this.searchEmpl(accNum);
        if ( index != -1) {
            this.arr.splice(index, 1);
        }
    }
    this.getEmplInfo = function(accNum) {
        var index = this.searchEmpl(accNum);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
        
    }
}