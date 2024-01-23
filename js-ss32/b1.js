
function Information(id,name,phone,address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}

function inputInformation() {
    let info = new Information();

    info.id = prompt("Nhập ID:");
    info.name = prompt("Nhập tên:");
    info.phone = prompt("Nhập số điện thoại:");
    info.address = prompt("Nhập địa chỉ:");
    
    return info;
}

function printInformation(info) {
    console.log("Thông tin cá nhân:");
    console.log("ID: " + info.id);
    console.log("Tên: " + info.name);
    console.log("Số điện thoại: " + info.phone);
    console.log("Địa chỉ: " + info.address);
}

let userInformation = inputInformation();
printInformation(userInformation);

