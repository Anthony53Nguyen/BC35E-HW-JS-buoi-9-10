function Validation() {
 
    this.checkAccNum = function (value, divError, mess) {
        var pattern = /^[0-9]{4,6}$/;

        if (value.match(pattern)) {
          getEle(divError).innerHTML = "";
          getEle(divError).style.display = "none";
          return true;
        } 
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    }
    this.checkAccRepeat = function (value, divError, mess, arr) {
        var isExist = false;
        for (var i = 0; i < arr.length; i++) {
          var sv = arr[i];
          if (sv.accNum === value) {
            isExist = true;
            break;
          }
        }
        if (isExist) {
          getEle(divError).innerHTML = mess;
          getEle(divError).style.display = "block";
          return false;
        } 
        getEle(divError).innerHTML = "";
        getEle(divError).style.display = "none";
        return true;
        
    };
  
  this.checkName = function (value, divError, mess) {
        var pattern = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;

        if (pattern.test(value)) {
          getEle(divError).innerHTML = "";
          getEle(divError).style.display = "none";
          return true;
        } else {
          getEle(divError).style.display = "block";
          getEle(divError).innerHTML = mess;
          
          return false;
        }
  }

  this.checkEmail = function (value, divError, mess) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.match(pattern)) {
        getEle(divError).innerHTML = "";
        getEle(divError).style.display = "none";
        return true;
      } else {
        getEle(divError).style.display = "block";
        getEle(divError).innerHTML = mess;
        
        return false;
      }
  }

  this.checkPass = function (value, divError, mess) {
    var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;

    if (value.match(pattern)) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    } else {
      getEle(divError).style.display = "block";
      getEle(divError).innerHTML = mess;
      
      return false;
    }
  }

  this.checkStartDate = function (value, divError, mess) {
    // var pattern = "^(0[01]|1[0-9])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$";
    var pattern = /^(0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/
    if (value.match(pattern)) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    } 
    getEle(divError).style.display = "block";
    getEle(divError).innerHTML = mess;
    return false;
  
  }
  this.checkBaseSalary = function (value, divError, mess) {
    if (value>=1000000 && value<=20000000) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    } 
    getEle(divError).style.display = "block";
    getEle(divError).innerHTML = mess;
    return false;
  }
  this.checkTitle = function (idSelect, divError, mess) {
      if (getEle(idSelect).selectedIndex !== 0) {
        getEle(divError).innerHTML = "";
        getEle(divError).style.display = "none";
        return true;
      } 
      getEle(divError).innerHTML = mess;
      getEle(divError).style.display = "block";
      return false;
  }
  this.checkHours = function (value, divError, mess) {
    if (value>=80 && value<=200) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    } 
      getEle(divError).style.display = "block";
      getEle(divError).innerHTML = mess;
      return false;
  }
}
  