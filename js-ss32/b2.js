function Information(id,name,phone,address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}

let userInformation = new Information();

delete userInformation.address;

userInformation.email = "";

console.log("Thông tin cá nhân:");
console.log("ID: " + userInformation.id);
console.log("Tên: " + userInformation.name);
console.log("Số điện thoại: " + userInformation.phone);
console.log("Email: " + userInformation.email);