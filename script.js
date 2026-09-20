const btnPortfolio = document.getElementById('btn-portfolio');
const btnEditor = document.getElementById('btn-editor');
const btnLogin = document.getElementById('btn-login');
const btnGenerate = document.getElementById('btn-generate');

const portfolioPage = document.getElementById('portfolio-page');
const editorPage = document.getElementById('editor-page');
const loginArea = document.getElementById('login-area');

const textInput = document.getElementById('text-input');
const colorInput = document.getElementById('color-input');
const canvasText = document.getElementById('canvas-text');

let isLoggedIn = false;

btnPortfolio.addEventListener('click', () => {
  portfolioPage.classList.remove('hidden');
  editorPage.classList.add('hidden');
  btnPortfolio.classList.add('bg-cyan-500');
  btnEditor.classList.remove('bg-cyan-500');
});

btnEditor.addEventListener('click', () => {
  if (!isLoggedIn) {
    alert('দয়া করে আগে প্রোফাইল পেজে গিয়ে জিমেইল দিয়ে লগইন করুন!');
    return;
  }
  editorPage.classList.remove('hidden');
  portfolioPage.classList.add('hidden');
  btnEditor.classList.add('bg-cyan-500');
  btnPortfolio.classList.remove('bg-cyan-500');
});

btnLogin.addEventListener('click', () => {
  isLoggedIn = true;
  loginArea.innerHTML = `<div class="bg-emerald-900/50 border border-emerald-500 text-emerald-300 p-3 rounded-lg text-sm">✓ লগইন সফল! ওপরের AI এডিটর বাটনে ক্লিক করুন।</div>`;
  alert('লগইন সফল হয়েছে!');
});

btnGenerate.addEventListener('click', () => {
  const value = textInput.value.trim();
  if (!value) return alert('কিছু একটা লিখুন!');
  canvasText.innerText = value;
  canvasText.style.color = colorInput.value;
});

