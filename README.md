## Movie Search Application Challenge – React.js + Tailwind CSS

### Giới thiệu

Xây dựng một **Movie Search Application** bằng **React.js** và **Tailwind CSS**.

Ứng dụng cho phép người dùng tìm kiếm phim theo tên và hiển thị thông tin phim từ **OMDb API**, với giao diện và trải nghiệm tương tự bản design mẫu.

---

### Mục tiêu

Xây dựng một ứng dụng tìm kiếm phim hoàn chỉnh với React.js và Tailwind CSS:

- Người dùng có thể tìm kiếm phim theo tên
- Hiển thị danh sách phim hoặc thông báo *Movie not found*
- Giao diện giống design mẫu và responsive trên nhiều kích thước màn hình

**Link website mẫu (Design Prefer):**

https://react-query-movies-app.netlify.app/

---

### Yêu cầu chức năng

### 1. Search Movie

- Người dùng có thể nhập tên phim vào ô search
- Thực hiện tìm kiếm khi:
    - Nhấn **Enter**
    - Hoặc click vào nút **Search**
- Không gọi API nếu input rỗng hoặc chỉ chứa khoảng trắng

---

### 2. Fetch dữ liệu từ API

- Sử dụng **OMDb API**
- Endpoint mẫu: https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=MOVIE_NAME
- Xử lý các trạng thái:
- Loading
- Success
- Error (network error hoặc API error)

---

### 3. Hiển thị kết quả tìm kiếm

- Hiển thị danh sách phim theo design:
- Poster
- Movie Title
- Year
- Type (movie / series)
- Nếu API trả về `Response: "False"`:
- Hiển thị text: **Movie not found**

---

### 4. Responsive UI

- Ứng dụng phải responsive trên:
- Mobile
- Tablet
- Desktop
- Movie list hiển thị dạng grid và tự động scale theo màn hình

---

### Yêu cầu kỹ thuật

### Tech Stack

- **React.js** (18+)
- **Tailwind CSS** (v3+)
- Build tool:
- **Vite** (khuyến khích)
- Hoặc **Create React App**

---

### Yêu cầu về code

### 1. Component Structure

- Tách component rõ ràng:
- SearchBar
- MovieList
- MovieCard
- Loading / Empty State
- Sử dụng **functional components**
- Có props validation (PropTypes hoặc TypeScript)

---

### 2. State Management

- Sử dụng:
- `useState`
- `useEffect`
- (Bonus) Có thể dùng:
- React Query
- Custom hook cho logic search & fetch

---

### 3. Styling

- Sử dụng **Tailwind CSS utility classes**
- Mobile-first approach
- Bám sát layout, spacing của design mẫu
- Có hover effect cho movie card (optional)

---

### 4. Best Practices

- Code sạch, dễ đọc
- Tách UI và logic rõ ràng
- Handle edge cases:
- Movie không có poster
- API trả kết quả rỗng
- Tránh gọi API không cần thiết

---

### API Support

- **Link lấy API Key:**https://www.omdbapi.com/apikey.aspx

> **Lưu ý:** Không commit API key trực tiếp lên GitHub.
> 
> 
> Sử dụng file `.env` để lưu API key.
>
