

const POSTS = [
    {
        "id": 1,
        "title": "Dự báo giá Ván Ép Phủ Phim 2026 – Chiến lược Sống còn cho Nhà thầu",
        "excerpt": "Giá ván ép phủ phim 2026, thị trường ván ép xây dựng, xu hướng vật liệu xây dựng, chi phí logistics ván ép, quản trị rủi ro giá vật tư.",
        "date": "2025-03-15",
        "image": "../../assets/images/blog_1.png",
        "url": "./blog_1.html"
    },
    {
        "id": 2,
        "title": "Ván Phủ Phim Cho Kho Lạnh – Bí quyết chống ẩm và tiết kiệm chi phí bảo trì",
        "excerpt": "Ván phủ phim kho lạnh, thi công kho lạnh, ván ép chịu ẩm, sàn gác xép kho lạnh, chống cong vênh ván ép.",
        "date": "2025-04-15",
        "image": "../../assets/images/blog_2.png",
        "url": "./blog_2.html"
    },
    {
        "id": 3,
        "title": "Trọng Lượng Ván Phủ Phim 18mm Chuẩn – Mẹo kiểm tra giúp Nhà thầu tránh gian lận",
        "excerpt": "Trọng lượng ván ép phủ phim 18mm, thông số kỹ thuật ván coppha, ván ép 18mm, kiểm tra chất lượng ván bằng trọng lượng, cách tính trọng lượng ván ép.",
        "date": "2025-05-15",
        "image": "../../assets/images/blog_3.png",
        "url": "./blog_3.html"
    },
    {
        "id": 4,
        "title": "Mẹo Đàm Phán Giá Ván Ép Phủ Phim Giúp Tối Ưu Hàng Tỷ Đồng Dòng Tiền",
        "excerpt": "Báo giá ván ép Hà Nam 2026, giá ván ép phủ phim KCN Đồng Văn, mua ván ép Hà Nam, mẹo đàm phán giá ván ép.",
        "date": "2025-06-15",
        "image": "../../assets/images/blog_4.png",
        "url": "./blog_4.html"
    },
    {
        "id": 5,
        "title": "Nhu cầu ván ép phủ phim 2026: Làn sóng đầu tư công và FDI",
        "excerpt": "Nhu cầu ván ép 2026, thị trường ván ép xây dựng, ván phủ phim cho dự án FDI, xu hướng sử dụng ván ép chất lượng cao.",
        "date": "2025-07-15",
        "image": "../../assets/images/blog_5.png",
        "url": "./blog_5.html"
    },
    {
        "id": 6,
        "title": "Lót sàn khu vực máy móc bằng ván phủ phim chịu lực cao",
        "excerpt": "Lót sàn máy móc, ván phủ phim chịu lực, kê lót máy móc, bảo vệ nền nhà xưởng, so sánh ván ép và thép tấm lót sàn.",
        "date": "2025-08-15",
        "image": "../../assets/images/blog_6.png",
        "url": "./blog_6.html"
    },
    {
        "id": 7,
        "title": "Ván phủ phim giúp giảm 32% chi phí coppha tại dự án KCN",
        "excerpt": "Giảm chi phí coppha, ván phủ phim tối ưu chi phí, Case study ván ép KCN, quản lý vật tư coppha, chi phí sử dụng trên mỗi mét vuông.",
        "date": "2025-09-15",
        "image": "../../assets/images/blog_7.png",
        "url": "./blog_7.html"
    },
    {
        "id": 8,
        "title": "Ván phủ phim có phù hợp làm sàn gác xép?",
        "excerpt": "Ván phủ phim làm gác xép, sàn gác lửng giá rẻ, so sánh ván ép và Cemboard, thi công gác xép nhanh.",
        "date": "2025-10-15",
        "image": "../../assets/images/blog_8.png",
        "url": "./blog_8.html"
    },
    {
        "id": 9,
        "title": "Ván ép phủ phim dày 15mm nặng bao nhiêu kg? Thông số & cách tính chi tiết",
        "excerpt": "Ván ép 15mm trọng lượng, thông số ván ép 15mm, kiểm tra ván ép thiếu ly, ván 15mm cho coppha.",
        "date": "2025-11-15",
        "image": "../../assets/images/blog_9.png",
        "url": "./blog_9.html"
    }
];

const POSTS_PER_PAGE = 3;
let currentPage = 1;

/* ================= RENDER ================= */
const blogList = document.querySelector(".blog-list");
const pagination = document.querySelector(".pagination");
const latestList = document.querySelector(".latest-posts");

function renderPosts() {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const posts = POSTS.slice(start, end);

    blogList.innerHTML = posts.map(post => `
        <article class="blog-card">
            <a href="${post.url}" class="blog-link"><img src="${post.image}" class="blog-thumb" alt="${post.title}"></a>
            <div class="blog-content">
                <time class="blog-date">${formatDate(post.date)}</time>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.url}" class="blog-link">Đọc thêm →</a>
            </div>
        </article>
    `).join("");
}

function renderPagination() {
    const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);

    pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => `
        <button class="page-btn ${i + 1 === currentPage ? "active" : ""}"
            onclick="goToPage(${i + 1})">
            ${i + 1}
        </button>
    `).join("");
}

function renderLatest() {
    latestList.innerHTML = POSTS.slice(0, 4).map(post => `
        <li>
            <img src="${post.image}">
            <div class="blog-laster"><a href="${post.url}">${post.title}</a>
                   <time class="blog-date">${formatDate(post.date)}</time></div>
        </li>
    `).join("");
}

function goToPage(page) {
    currentPage = page;
    renderPosts();
    renderPagination();
}

function formatDate(date) {
    return new Date(date).toLocaleDateString("vi-VN");
}

/* INIT */
POSTS.sort((a, b) => new Date(b.date) - new Date(a.date));
renderPosts();
renderPagination();
renderLatest();
