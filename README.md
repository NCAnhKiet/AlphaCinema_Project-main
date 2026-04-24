# 🎬 Alpha Cinema - Premium Movie Booking System

Hệ thống quản lý đặt vé xem phim hiện đại được xây dựng với **ASP.NET Core (Backend)** và **Vue.js 3 (Frontend)**.

## 🚀 Hướng dẫn chạy dự án (Nhanh nhất)

Dự án đã được tự động hóa tối đa. Bạn không cần phải tạo cơ sở dữ liệu hay cài đặt thủ công từng bước.

### 1. Yêu cầu hệ thống
Trước khi chạy dự án, hãy đảm bảo máy tính của bạn đã cài đặt các phần mềm sau:
- **SQL Server** (Local) - Đang chạy.
- **.NET 8 SDK** (hoặc mới hơn).
- **Node.js** (phiên bản mới nhất).

*(Lưu ý: Mặc định chuỗi kết nối SQL Server dùng `Server=.`. Nếu SQL Server của bạn có tên instance khác (ví dụ: `.\SQLEXPRESS`), hãy mở tệp `backend/src/AlphaCinema.API/appsettings.json` và điều chỉnh lại tại phần `DefaultConnection` trước khi chạy).*

### 2. Khởi chạy hệ thống với 1 cú click

Chỉ cần **nhấn đúp chuột vào tệp `run-app.bat`** (nằm ở thư mục gốc của dự án).

Khi bạn chạy tệp này, kịch bản (script) sẽ tự động thực hiện mọi thứ:
1. Tự động chạy `npm install` để cài đặt các gói cần thiết cho ứng dụng.
2. Tự động khởi chạy đồng thời cả Backend (ASP.NET Core) và Frontend (Vue.js).
3. **Tự động tạo Database:** Ngay khi Backend khởi động lần đầu, nó sẽ tự động kết nối với SQL Server, tạo cơ sở dữ liệu `AlphaCinema`, tạo các bảng và **nạp sẵn toàn bộ dữ liệu mẫu** (Phim, phòng chiếu, suất chiếu, đồ ăn vặt, người dùng...).

### 3. Thông tin tài khoản đăng nhập mẫu

Sau khi chạy xong, hãy mở trình duyệt truy cập vào Frontend (thường là `http://localhost:5173`) và sử dụng các tài khoản đã được nạp sẵn dưới đây (tất cả đều có chung mật khẩu là **`admin123`**):

- **Quản trị viên (Admin):** `admin@alpha.com`
- **Nhân viên (Staff):** `staff@alpha.com`
- **Khách hàng (Customer):** `customer@alpha.com` (Tài khoản này đã được cộng sẵn 1000 điểm tích lũy để test tính năng đổi thưởng).

---

## ✨ Các tính năng chính

- 🎟 **Đặt vé trực tuyến**: Luồng đặt vé 2 bước an toàn với cơ chế khóa ghế tạm thời (10 phút) tránh trùng lặp.
- 🍿 **Dịch vụ đi kèm**: Cho phép chọn thêm bắp nước, combo đồ ăn vặt khi đặt vé.
- 🎁 **Khuyến mãi & Thành viên**: Tích điểm sau mỗi giao dịch, đổi điểm lấy quà tặng (vé miễn phí, bắp nước) và áp dụng mã giảm giá.
- 📱 **Vé điện tử & Mã QR**: Tự động sinh mã QR cho từng vé, hỗ trợ nhân viên check-in nhanh tại rạp.
- ⭐ **Đánh giá phim**: Khách hàng chỉ có thể đánh giá phim sau khi đã mua vé thành công.
- 📊 **Hệ thống Quản trị (Admin)**: Quản lý phim, lịch chiếu linh hoạt (chống trùng lịch), quản lý sơ đồ ghế, thống kê doanh thu đa chiều, v.v.

---
*Phát triển bởi Alpha Cinema Team 2026*
