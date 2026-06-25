# Blueprint: Personal Social Media Marketing Portfolio (Fresher)

## 1) Mục tiêu dự án
- Xây dựng một portfolio 1 trang cho một cá nhân mới ra trường theo hướng Social Media Marketing.
- Tập trung vào: cá tính, chuyên nghiệp, trẻ trung, thể hiện năng lực học tập và tiềm năng đi làm thực chiến.
- Không dùng dependency ngoài để giữ tốc độ tải nhanh, dễ deploy, dễ bảo trì.

## 2) Đối tượng sử dụng
- Nhà tuyển dụng, mentor, agency, team marketing.
- Người xem muốn hiểu rõ bạn là ai, học gì, làm được gì, đã thực hành gì và định hướng nghề ra sao.

## 3) Tông giọng nội dung
- Việt hoá tự nhiên, sắc nét, thân thiện.
- Gen Z vừa đủ: ngắn gọn, tự tin, có “vibe”, nhưng không lố.
- Ưu tiên câu khẳng định rõ ràng, mô tả thật, tránh overclaim.

## 4) Concept thị giác
- Theme đề xuất: sáng, tối giản, hài hòa, nữ tính nhưng vẫn có cá tính.
- Cảm giác: “portfolio cá nhân xịn” + “newbie có tiềm năng”.
- Màu chính:
  - Nền: trắng ngà, be nhạt, xám ấm
  - Accent: hồng dusty, lavender dịu, sage
  - Text: slate đậm, muted gray
- Font: system stack để tối ưu tốc độ và độ ổn định.

## 5) Cấu trúc trang
### 5.1 Header
- Logo/brand name cá nhân.
- Navigation sticky với anchor link.
- Nút CTA nổi bật: “Liên hệ”.
- Mobile menu tối giản.

### 5.2 Hero
- Headline giới thiệu cá nhân + định vị ngành.
- Subheadline thể hiện là fresher nhưng có tư duy tốt, thích content và social.
- 2 CTA:
  - Primary: xem case study
  - Secondary: liên hệ ngay
- Khu vực social proof nhanh:
  - số dự án học tập/thực hành
  - số internship/collab
  - số tool/skill đã dùng
- Visual card dạng dashboard mini + một khối ảnh thật nổi bật ở đầu trang.

### 5.3 Social proof nhẹ
- Không cần “logo khách hàng lớn”.
- Có thể dùng danh sách project types, tools, trường/lớp, cert, hoặc nhận xét từ mentor.
- Ảnh chân dung thật nên được ưu tiên ở hero hoặc section đầu, sau đó mới tới gallery bổ trợ.

### 5.4 Marketing foundations
- Bố cục đầu trang nên đi theo chuỗi:
  - Audience
  - Insight
  - Message
  - Proof
- Mỗi mục cần ngắn, rõ, dễ scan, để người xem hiểu nhanh portfolio này đang phục vụ ai và chứng minh điều gì.

### 5.5 Skills / Services
- 4–6 nhóm năng lực:
  - Content Planning
  - Copywriting
  - Basic Paid Ads Understanding
  - Community Management
  - Reporting & Analytics
  - Creative Research
- Mỗi card có mô tả ngắn, tool hoặc output cụ thể.

### 5.6 Projects
- 3 dự án mẫu theo format:
  - Bối cảnh
  - Mục tiêu
  - Vai trò
  - Kết quả học được
- Ưu tiên mô tả rõ đóng góp cá nhân hơn là số liệu phóng đại.

### 5.7 Process
- Quy trình 4 bước:
  1. Audit
  2. Strategy
  3. Launch
  4. Optimize
- Hiển thị dạng timeline hoặc step cards.

### 5.8 Stats
- Bộ số liệu nhỏ, animate khi vào viewport.
- Ví dụ: projects, tools, presentations, internships.

### 5.9 Testimonials
- 3 nhận xét ngắn từ mentor, teammate, hoặc mô phỏng theo format portfolio cá nhân.

### 5.10 FAQ
- Trả lời các câu hỏi thường gặp:
  - Bạn là fresher nhưng mạnh ở mảng nào?
  - Có kinh nghiệm thực tập chưa?
  - Bạn học và làm nội dung bằng gì?
  - Mục tiêu nghề nghiệp là gì?

### 5.11 Contact
- Form liên hệ tối giản, thân thiện.
- Thông tin email, social link, LinkedIn, CV.
- CTA cuối trang cực rõ.

- Brand signature cá nhân.
- Quick links.
- Copyright.

## 6) Hệ tương tác
- Smooth scroll cho anchor.
- Sticky header đổi style khi scroll.
- Reveal animation khi cuộn.
- Counter animation cho stats.
- FAQ accordion.
- Tab/slider đơn giản cho case studies nếu cần.
- Button ripple/glow tinh tế.
- Back to top.
- Dark theme là mặc định; có thể thêm toggle nếu muốn.

## 7) Nguyên tắc UX/UI
- Mobile-first.
- Tối ưu khoảng trắng và nhịp đọc.
- CTA luôn dễ nhìn.
- Nội dung ngắn, rõ, có trọng tâm.
- Không lạm dụng animation; chỉ dùng để nhấn ý.

## 8) Accessibility
- Semantic HTML đầy đủ.
- Contrast đạt mức tốt.
- Focus state rõ.
- Nút/menu/accordion dùng aria attributes.
- Form có label thật.

## 9) SEO cơ bản
- Title, meta description, Open Graph.
- Heading hierarchy chuẩn.
- URL anchor rõ.
- Nội dung chứa từ khóa chính: Social Media Marketing Portfolio, Social Media Marketing Fresher, Social Media Intern.

## 10) Kỹ thuật triển khai
### File structure
- `index.html`
- `styles.css`
- `script.js`
- `blueprint.md`

### JS responsibilities
- Toggle mobile menu
- IntersectionObserver cho reveal
- Animate counters
- FAQ accordion
- Header shadow on scroll
- Smooth anchor handling

### CSS responsibilities
- Design tokens
- Layout system
- Cards / gradients / glass effects
- Responsive breakpoints
- Motion and transitions

## 11) Nội dung mẫu
- Giọng điệu nhấn vào:
  - “mới ra trường nhưng học nhanh”
  - “content có gu”
  - “làm kỹ, hiểu số”
  - “sẵn sàng vào team”
- Case study sample nên có số liệu vừa phải, ưu tiên thật và dễ thay bằng dữ liệu thật.

## 12) Tiêu chí hoàn thành
- Giao diện đẹp, mượt, hiện đại.
- Đủ đầy các section quan trọng của portfolio.
- Responsive tốt trên mobile/tablet/desktop.
- Không phụ thuộc thư viện ngoài.
- Dễ copy, dễ deploy, dễ chỉnh nội dung.
