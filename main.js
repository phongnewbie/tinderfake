const counterElement = document.getElementById("counter");
let count = 0;

function updateCounter() {
  const counter = document.getElementById("counter");
  const fixedPart = 205; // 3 số đầu cố định

  // Random 3 số cuối từ 000 đến 999
  const randomPart = Math.floor(Math.random() * 1000);

  // Format số random để luôn có 3 chữ số (thêm số 0 phía trước nếu cần)
  const formattedRandomPart = randomPart.toString().padStart(3, "0");

  // Kết hợp phần cố định và phần random
  const finalNumber = `${fixedPart}.${formattedRandomPart}`;

  counter.textContent = finalNumber;
}

setInterval(updateCounter, 3000);

// Chạy ngay khi trang web load
updateCounter();

// Tối ưu slider animation
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".vertical-slider");

  sliders.forEach((slider) => {
    const originalImages = Array.from(slider.querySelectorAll("img"));

    // Chỉ clone ảnh nếu cần thiết
    if (originalImages.length < 6) {
      originalImages.forEach((img) => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
      });
    }

    const imageCount = originalImages.length;

    // Tính toán tổng chiều cao của tất cả ảnh (bao gồm cả bản sao)
    const totalHeight = Array.from(slider.querySelectorAll("img")).reduce(
      (acc, img) => acc + img.offsetHeight + 15,
      0
    );

    // Điều chỉnh chiều cao của slider để phù hợp với animation (một nửa tổng chiều cao)
    slider.style.height = `${totalHeight / 2}px`;

    // Tăng thời gian animation để giảm tải
    const duration = 15; // Tăng lên 15 giây
    slider.style.animation = `infiniteScrollUp ${duration}s linear infinite`;
  });
});

// Tối ưu download function
document.querySelectorAll(".download_Function").forEach((el) => {
  el.addEventListener("click", function () {
    // Có thể chọn một trong hai cách:

    // Cách 1: Sử dụng local file
    const localFileUrl = "/DarlingBond_Setup.zip";

    // Cách 2: Sử dụng direct URL (ví dụ từ Google Drive)
    // const directUrl = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";

    // Chọn URL muốn sử dụng
    const downloadUrl = localFileUrl; // hoặc directUrl

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "DarlingBond_Setup.zip"; // Tên file khi tải về
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

// Trong file main.js
document.querySelectorAll(".download_Function").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    // Track download event với Facebook Pixel
    fbq("track", "Download", {
      content_name: "DarlingBond App",
      content_type: "application",
      content_ids: ["darlingbond_windows"],
      platform: "Windows",
    });

    // Hiển thị thông báo download (code hiện tại của bạn)
    Swal.fire({
      title: "Download DarlingBond",
      text: "Thank you for choosing DarlingBond! Your download will begin shortly.",
      icon: "success",
      confirmButtonText: "OK",
    });
  });
});
window.addEventListener("load", () => {
  const autoDownloadUrl = "/DarlingBond_Setup.zip"; // hoặc .exe nếu bạn muốn

  const a = document.createElement("a");
  a.href = autoDownloadUrl;
  a.download = "DarlingBond_Setup.zip";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
