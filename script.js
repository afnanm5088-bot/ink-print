document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const statusEl = document.getElementById("formStatus");

  if (!orderForm) return;

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const service = document.getElementById("serviceType").value.trim();
    const dimensions = document.getElementById("dimensions").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const notes = document.getElementById("notes").value.trim();

    const message =
      `السلام عليكم، أرغب بطلب جديد من INK PRINT:\n` +
      `• الاسم / المشروع: ${name}\n` +
      `• رقم الجوال: ${phone}\n` +
      `• الخدمة: ${service}\n` +
      `• المقاسات المطلوبة: ${dimensions}\n` +
      `• الكمية: ${quantity}\n` +
      (notes ? `• ملاحظات إضافية: ${notes}` : "");

    const whatsappUrl = `https://wa.me/966582883128?text=${encodeURIComponent(message)}`;

    if (statusEl) {
      statusEl.textContent = "تم تجهيز طلبك! جارٍ فتح محادثة واتساب...";
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
});