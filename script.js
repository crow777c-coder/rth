// Detect only browser-provided information; a normal webpage cannot reliably read PS4 firmware.
(() => {
  const ua = navigator.userAgent || "";
  const device = document.getElementById("device-type");
  if (/PlayStation 4|PS4/i.test(ua)) {
    device.textContent = "PlayStation 4 (بحسب معلومات المتصفح)";
  } else {
    device.textContent = "لم يتم تأكيد PS4 من المتصفح";
  }

  const buttons = [...document.querySelectorAll(".version-button")];
  const selection = document.getElementById("selection");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(item => {
        item.classList.remove("selected");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");
      const version = button.dataset.version;
      selection.textContent = `تم اختيار ${version} — جارٍ فتح Golden Hen للتحقق من إصدار الجهاز...`;
      // Open the bundled Golden Hen launcher. It checks the console's actual
      // firmware and chooses its own matching files; this UI selection does
      // not override firmware detection.
      window.location.href = `goldhen/index.html?selected=${encodeURIComponent(version)}`;
    });
    button.setAttribute("aria-pressed", "false");
  });
})();
