//BÀI TẬP 3:
import { updateArrayValue } from "./method.js";

let arrNumber = [11, 17, 19, 25, 17, 31, 37]; // Khởi tạo mảng

document.getElementById('btnUpdate').addEventListener('click', function() {
  let giaTriGoc = parseInt(document.getElementById('giaTriGoc').value);
  let giaTriMoi = parseInt(document.getElementById('giaTriMoi').value);
  
  let ketQua = updateArrayValue(arrNumber, giaTriGoc, giaTriMoi);
  let updateMang = document.getElementById('update-info');

  if (ketQua.updated) {
    arrNumber = ketQua.updatedArray; // Cập nhật lại mảng
    updateMang.innerHTML = `Đã cập nhật giá trị ${giaTriGoc} thành ${giaTriMoi}`;
    document.getElementById('arrNumber').innerHTML = arrNumber.join(', ');
  } else {
    updateMang.innerHTML = `Không tìm thấy giá trị ${originalValue} trong mảng`;
  }
});