const API_URL = 'https://script.google.com/macros/s/AKfycbxrk4VOK1w2XNJfrRGYDyWkprMBPONZ5BNGCENr8pig99oMIQX2d9dR6UlwxB5vSp4/exec';

document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = this.querySelector('.btn-submit');
    const toast = document.getElementById('success-toast');

    // Trạng thái đang gửi
    btn.innerText = 'Đang xử lý...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    const formData = {
        name: this.querySelector('input[name="name"]').value,
        ctyName: this.querySelector('input[name="ctyName"]').value,
        email: this.querySelector('input[name="email"]').value,
        phone: this.querySelector('input[name="tel"]').value,
        content: this.querySelector('textarea').value,
        title: "Yêu cầu từ web",
        status: "Đã gửi qua API"
    };

    fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        body: JSON.stringify(formData)
    })
        .then(() => {
            // Hiện thông báo thành công đẹp mắt
            toast.classList.add('show');
            this.reset(); // Xóa dữ liệu form

            // Tự động ẩn thông báo sau 3 giây
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        })
        .catch(() => {
            alert('Có lỗi xảy ra, vui lòng liên hệ hotline.');
        })
        .finally(() => {
            // Khôi phục nút bấm
            btn.innerText = 'Yêu cầu báo giá';
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        });
});