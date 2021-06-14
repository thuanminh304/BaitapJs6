// bài tập 1
/** b1. nhập input: khai bao biến total và biến soNhoNhat để xác định đc số nhỏ nhất gắn cho nó
 * b2. thực hiện: tổng 1+2+...+n>10000. như vậy khi số n sẽ nhỏ hơn 10000 và hàm sẽ dừng lại và cho ra kết quả khi tổng total lớn hơn 10000.
 * ta sẽ đặt biến n=0 và cho nó tăng dần theo giá trị n++
 * b3. xuất kết quả: sử dụng innerHTML để thêm nội dung. soNhoNhat.innerHTML = "..."+ n
 */
var total = 0;
var soNhoNhat = document.getElementById("idSoNhoNhat");
function btnKq1() {
  for (var n = 0; n < 10000; n++) {
    total += n;
    if (total > 10000) {
      break;
    }
  }
  console.log(total);
  console.log(n);
  soNhoNhat.innerHTML = "Số nguyên dương nhỏ nhất là: " + n;
}






// bài tập 2
/** b1. khai báo input. biến tính tổng sum = 0 , và hàm bước nhảy lũy thừa multi = 1. đặt input để người dùng nhập X và nhapN
 * b2. thực hiện. dùng for khai báo N =1 và for sẽ dừng lại đến khi N++ bé hơn số nhapN mà người dùng nhập vào. 
 */
var sum = 0;
var multi = 1;
// sum+=(x*=x)
// sum=x =>x^1    n= 1
// sum=x + x*x =>x+x^2    n=2
// sum=x + x*x + x*x*x =>x + x^2+ x^3    n=3
// sum=x + x*x + x*x*x + x*x*x*x =>x + x^2+ x^3+ x^4    n=4
// x=3 n=4 => 3+3^2+3^3+3^4
// x=3 n=2 => 3+3^2

//b3. khai báo output. dùng innerHTML để in ra nội dung

var getEle = function (id) {
  return document.getElementById(id);
};
function btnKq2() {


  var X = getEle("idNhapX").value;
  var nhapN = getEle("idNhapN").value;
  for (var N = 1; N <= nhapN; N++) {
    multi *= X;
    sum += multi;
  }
  getEle("xuatKq").innerHTML = "Sum(n) = " + sum;
}







//bài tập 3;
/**b1. khai báo biến tinhGiaiThua = 1 và input cho người dùng nhập số tùy ý
 * b2. thực hiện. dùng for khai báo n=1 vì nếu n=0 thì cả tinhGiaiThua lúc nào cũng sẽ bằng k vì số nào nhân với 0 cũng bằng 0 . thực hiện bước nhảy tinhGiaiThua *=n với n++ mỗi lần thực hiện đến khi số n nhỏ hơn hoặc bằng soNguoiDungNhap
 * cụ thể. lần 1 : tinhGiaiThua = n ( hiện tại n=1) => 1
 * lân 2 : tinhGiaiThua = n*(n+1) ( hiện tại n =2) => 1*2
 * lần 3: tinhGiaiThua = n*(n+1)*(n+1) ( hiện tại n= 3) => 1*2*3
 * b3. in kết quả output: dùng innerHTML
 */
var tinhGiaiThua = 1;
function btnKq3() {
  var soNguoiDungNhap = getEle("idSoN").value;
  for (var n = 1; n <= soNguoiDungNhap; n++) {
    tinhGiaiThua *= n;
  }
  getEle("xuatKq3").innerHTML = "Tổng là: " + tinhGiaiThua;
}

//bài tập 4



/** b1. đặt button để người dùng nhấp vào sẽ in ra kết quả
 * b2. thực hiện dùng hàm if và for . đặt biến m=1 và điều kiện m <=10 ( hoặc m= 0 điều kiện m<10) và m++ mỗi lần thực hiện
 * hàm if nếu m chia hết cho 2 ta sẽ đặt cho bg của div chẵn là màu đỏ và trường hợp div lẻ sẽ có bg màu xanh 
 * b3 . in ra kết quả bằng button
 */
var contentHTML = "";
var listDiv = document.getElementsByTagName("div");
function inKq() {
  for (var m = 1; m <= 10; m++) {
    if (m % 2 === 0) {
      contentHTML +=
        "<div style='background-color:red;padding:10px 5px;' > div chẵn:" + m + "</div>";
    } else {
      contentHTML +=
        "<div style='background-color:blue;' > div lẻ:" + m + "</div>";
    }
  }
  getEle("xuatKq4").innerHTML = contentHTML;

  console.log(contentHTML);
}
