function Product(id, name, price, quantity){
    this.id = id;
    this.name = name;
    this.name = price;
    this.name = quantity;
}
let product = new Product("P001", "Product 1", 29.99, 50);

console.log("Thông tin sản phẩm:");
console.log("ID: " + product.id);
console.log("Tên: " + product.name);
console.log("Giá: $" + product.price.toFixed(2));
console.log("Số lượng: " + product.quantity);