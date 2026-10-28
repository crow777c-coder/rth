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
      selection.textContent = `الإصدار المحدد: ${button.dataset.version}`;
    });
    button.setAttribute("aria-pressed", "false");
  });
})();
