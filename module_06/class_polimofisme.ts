class Company {
  service() {
    return "Sales Services";
  }

  otherServices() {
    return "Other Services";
  }
}

class CarCompany extends Company {
  service() {
    return "Sales Cars";
  }
}

class BreadCompany extends Company {
  service() {
    return "Sales Breads";
  }
}

console.log(new Company().service());
console.log(new CarCompany().service());
console.log(new BreadCompany().service());
console.log(new BreadCompany().otherServices());
