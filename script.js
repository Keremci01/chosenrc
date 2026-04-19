const toast = document.getElementById("toast");
const rewardBtn = document.getElementById("rewardBtn");
const coinCount = document.getElementById("coinCount");
const steamBtn = document.getElementById("steamBtn");
const joinBtn = document.getElementById("joinBtn");
const loginForm = document.getElementById("loginForm");

let coins = Number(localStorage.getItem("chosenrc_coins")) || 1200;
coinCount.textContent = coins;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

rewardBtn.addEventListener("click", () => {
  coins += 50;
  coinCount.textContent = coins;
  localStorage.setItem("chosenrc_coins", coins);
  showToast("50 coin eklendi");
});

steamBtn.addEventListener("click", () => {
  showToast("Steam giriş testi yakında bağlanacak");
});

joinBtn.addEventListener("click", () => {
  document.getElementById("features").scrollIntoView();
});

document.querySelectorAll(".join-server").forEach((btn) => {
  btn.addEventListener("click", () => {
    showToast("Sunucuya katılma testi");
  });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showToast("Alanları doldur");
    return;
  }

  localStorage.setItem("chosenrc_user", username);
  showToast(`${username} olarak giriş yapıldı`);
  loginForm.reset();
});
