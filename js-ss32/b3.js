
function SinhVien(id, name) {
    this.id = id;
    this.name = name;
}

function inputSinhVien() {
    let soLuongSinhVien = +prompt("Nhập số lượng sinh viên:");
    let sinhVienArr = [];

    for (let i = 0; i < soLuongSinhVien; i++) {
        let id = prompt("Nhập ID của sinh viên thứ " + (i + 1) + ":");
        let name = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ":");
        let sinhVien = new SinhVien(id, name);
        sinhVienArr.push(sinhVien);
    }

    return sinhVienArr;
}


function printSinhVienArray(sinhVienArr) {
    console.log("Danh sách sinh viên:");

    for (let i = 0; i < sinhVienArr.length; i++) {
        console.log("Sinh viên thứ " + (i + 1) + ":");
        console.log("ID: " + sinhVienArr[i].id);
        console.log("Tên: " + sinhVienArr[i].name);
    }
}

let danhSachSinhVien = inputSinhVien();
printSinhVienArray(danhSachSinhVien);
