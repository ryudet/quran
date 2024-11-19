const surahs = [
    { arabic: "الفاتحة", english: "Al Fatihah", link: "/surat/fatihah.html" },
    { arabic: "البقرة", english: "Al Baqarah", link: "/surat/albaqarah.html" },
    { arabic: "آل عمران", english: "Aai Imran", link: "/surat/ali-imran.html" },
    { arabic: "النساء", english: "An Nisa", link: "/surat/al-nisaa.html" },
    { arabic: "المائدة", english: "Al Maidah", link: "/surat/al-maidah.html" },
    { arabic: "الأنعام", english: "Al An'am", link: "/surat/al-anaam.html" },
    { arabic: "الأعراف", english: "Al A'raf", link: "/surat/al-Aaraaf.html" },
    { arabic: "الأنفال", english: "Al Anfal", link: "/surat/al-anfal.html" },
    { arabic: "التوبة", english: "Al Tawbah", link: "/surat/al-tawbah.html" },
    { arabic: "يونس", english: "Yunus", link: "/surat/yunus.html" },
    { arabic: "هود", english: "Hud", link: "/surat/hud.html" },
    { arabic: "يوسف", english: "Yusuf", link: "/surat/yusuf.html" },
    { arabic: "الرعد", english: "Al Raad", link: "/surat/al-raad.html" },
    { arabic: "إبراهيم", english: "Ibrahim", link: "/surat/ibrahim.html" },
    { arabic: "الحجر", english: "Al Hijr", link: "/surat/al-hijr.html" },
    { arabic: "النحل", english: "An Nahl", link: "/surat/al-nahl.html" },
    { arabic: "الإسراء", english: "Al Isra", link: "/surat/al-isra.html" },
    { arabic: "الكهف", english: "Al Kahf", link: "/surat/al-kahf.html" },
    { arabic: "مريم", english: "Maryam", link: "/surat/maryam.html" },
    { arabic: "طه", english: "Ta Ha", link: "/surat/ta-ha.html" },
    { arabic: "الأنبياء", english: "Al Anbiya", link: "/surat/al-anbiya.html" },
    { arabic: "الحج", english: "Al Hajj", link: "/surat/al-hajj.html" },
    { arabic: "المؤمنون", english: "Al Mu'minun", link: "/surat/al-muminun.html" },
    { arabic: "النور", english: "Al Nur", link: "/surat/al-nur.html" },
    { arabic: "الفرقان", english: "Al Furqan", link: "/surat/al-furqan.html" },
    { arabic: "الشعراء", english: "Al Shu'ara", link: "/surat/al-shuara.html" },
    { arabic: "النمل", english: "Al Naml", link: "/surat/al-naml.html" },
    { arabic: "القصص", english: "Al Qasas", link: "/surat/al-qasas.html" },
    { arabic: "العنكبوت", english: "Al Ankabut", link: "/surat/al-ankabut.html" },
    { arabic: "الروم", english: "Al-rum", link: "/surat/al-rum.html" },
    { arabic: "لقمان", english: "Luqman", link: "/surat/luqman.html" },
{ arabic: "السجدة", english: "Al-Sajda", link: "/surat/al-sajda.html" },
{ arabic: "الأحزاب", english: "Al-Ahzab", link: "/surat/al-ahzab.html" },
{ arabic: "سبأ", english: "Saba", link: "/surat/saba.html" },
{ arabic: "فاطر", english: "Fatir", link: "/surat/fatir.html" },
{ arabic: "يس", english: "Ya-Sin", link: "/surat/ya-sin.html" },
{ arabic: "الصافات", english: "Al Saffat", link: "/surat/al-saffat.html" },
{ arabic: "ص", english: "Sad", link: "/sad.html" },
{ arabic: "الزمر", english: "Al Zumar", link: "/surat/al-zumar.html" },
{ arabic: "غافر", english: "Ghafir", link: "/surat/ghafir.html" },
{ arabic: "فصلت", english: "Fussilat", link: "/surat/fussilat.html" },
{ arabic: "الشورى", english: "Ash Shura", link: "/surat/al-shura.html" },
{ arabic: "الزخرف", english: "Al Zukhruf", link: "/surat/al-zukhruf.html" },
{ arabic: "الدخان", english: "Al Dukhan", link: "/surat/al-dukhan.html" },
{ arabic: "الجاثية", english: "Al-Jathiyah", link: "/surat/al-jathiyah.html" },
{ arabic: "الأحقاف", english: "Al-Ahqaf", link: "/surat/al-ahqaf.html" },
{ arabic: "محمد", english: "Muhammad", link: "/surat/muhammad.html" },
{ arabic: "الفتح", english: "Al Fath", link: "/surat/al-fath.html" },
{ arabic: "الحجرات", english: "Al Hujurat", link: "/surat/al-hujurat.html" },
{ arabic: "ق", english: "Qaf", link: "/surat/qaf.html" },
{ arabic: "الذاريات", english: "Al Dhariyat", link: "/surat/al-dhariyat.html" },
{ arabic: "الطور", english: "Al Tur", link: "/surat/al-tur.html" },
{ arabic: "النجم", english: "Al Najm", link: "/surat/al-najm.html" },
{ arabic: "القمر", english: "Al Qamar", link: "/surat/al-qamar.html" },
{ arabic: "الرحمن", english: "Al Rahman", link: "/surat/al-rahman.html" },
{ arabic: "الواقعة", english: "Al Waqi'a", link: "/surat/al-waqia.html" },
{ arabic: "الحديد", english: "Al Hadid", link: "/surat/al-hadid.html" },
{ arabic: "المجادلة", english: "Al-Mujadila", link: "/surat/al-mujadila.html" },
{ arabic: "الحشر", english: "Al-Hashr", link: "/surat/al-hashr.html" },
{ arabic: "الممتحنة", english: "Al Mumtahina", link: "/surat/al-mumtahina.html" },
{ arabic: "الصف", english: "Al Saff", link: "/surat/as-saff.html" },
{ arabic: "الجمعة", english: "Al Jumu'a", link: "/surat/al-jumua.html" },
{ arabic: "المنافقون", english: "Al Munafiqun", link: "/surat/al-munafiqun.html" },
{ arabic: "التغابن", english: "Al Taghabun", link: "/surat/al-taghabun.html" },
{ arabic: "الطلاق", english: "Al Talaq", link: "/surat/al-talaq.html" },
{ arabic: "التحريم", english: "Al Tahrim", link: "/surat/al-tahrim.html" },
{ arabic: "الملك", english: "Al Mulk", link: "/surat/al-mulk.html" },
{ arabic: "القلم", english: "Al Qalam", link: "/surat/al-qalam.html" },
{ arabic: "الحاقة", english: "Al Haqqah", link: "/surat/al-haqqah.html" },
{ arabic: "المعارج", english: "Al Ma'arij", link: "/surat/al-maarij.html" },
{ arabic: "نوح", english: "Nuh", link: "/surat/nuh.html" },
{ arabic: "الجن", english: "Al Jinn", link: "/surat/al-jinn.html" },
{ arabic: "المزمل", english: "Al Muzzammil", link: "/surat/al-muzzammil.html" },
{ arabic: "المدثر", english: "Al Muddaththir", link: "/surat/al-muddaththir.html" },
{ arabic: "القيامة", english: "Al Qiyamah", link: "/surat/al-qiyamah.html" },
{ arabic: "الإنسان", english: "Al Insan", link: "/surat/al-insan.html" },
{ arabic: "المرسلات", english: "Al Mursalat", link: "/surat/al-mursalat.html" },
{ arabic: "النبأ", english: "Al Naba", link: "/surat/al-naba.html" },
{ arabic: "النازعات", english: "Al Nazi'at", link: "/surat/al-naziat.html" },
{ arabic: "عبس", english: "Abasa", link: "/surat/abasa.html" },
{ arabic: "التكوير", english: "Al Takwir", link: "/surat/al-takwir.html" },
{ arabic: "الإنفطار", english: "Al Infitar", link: "/surat/al-infitar.html" },
{ arabic: "المطففين", english: "Al Mutaffifin", link: "/surat/al-mutaffifin.html" },
{ arabic: "الإنشقاق", english: "Al Inshiqaq", link: "/surat/al-inshiqaq.html" },
{ arabic: "البروج", english: "Al Buruj", link: "/surat/al-buruj.html" },
{ arabic: "الطارق", english: "Al Tariq", link: "/surat/at-tariq.html" },
{ arabic: "الأعلى", english: "Al A'la", link: "/surat/al-ala.html" },
{ arabic: "الغاشية", english: "Al Ghashiyah", link: "/surat/al-ghashiyah.html" },
{ arabic: "الفجر", english: "Al Fajr", link: "/surat/al-fajr.html" },
{ arabic: "البلد", english: "Al Balad", link: "/surat/al-balad.html" },
{ arabic: "الشمس", english: "Al Shams", link: "/surat/al-shams.html" },
{ arabic: "الليل", english: "Al Layl", link: "/surat/al-layl.html" },
{ arabic: "الضحى", english: "Al Duha", link: "/surat/ad-duha.html" },
{ arabic: "الشرح", english: "Al Sharh", link: "/surat/ash-sharh.html" },
{ arabic: "التين", english: "Al Tin", link: "/surat/at-tin.html" },
{ arabic: "العلق", english: "Al Alaq", link: "/surat/al-alaq.html" },
{ arabic: "القدر", english: "Al Qadr", link: "/surat/al-qadr.html" },
{ arabic: "البينة", english: "Al Bayyina", link: "/surat/al-bayyina.html" },
{ arabic: "الزلزلة", english: "Al Zalzalah", link: "/surat/al-zalzalah.html" },
{ arabic: "العاديات", english: "Al Adiyat", link: "/surat/al-adiyat.html" },
{ arabic: "القارعة", english: "Al Qari'ah", link: "/surat/al-qariah.html" },
{ arabic: "التكاثر", english: "Al Takathur", link: "/surat/al-takathur.html" },
{ arabic: "العصر", english: "Al-Asr", link: "/surat/al-asr.html" },
{ arabic: "الهمزة", english: "Al Humazah", link: "/surat/al-humazah.html" },
{ arabic: "الفيل", english: "Al Fil", link: "/surat/al-fil.html" },
{ arabic: "قريش", english: "Quraish", link: "/surat/quraish.html" },
{ arabic: "الماعون", english: "Al Ma'un", link: "/surat/al-maun.html" },
{ arabic: "الكوثر", english: "Al Kawthar", link: "/surat/al-kawthar.html" },
{ arabic: "الكافرون", english: "Al Kafirun", link: "/surat/al-kafirun.html" },
{ arabic: "النصر", english: "Al Nasr", link: "/surat/al-nasr.html" },
{ arabic: "المسد", english: "Al Masad", link: "/surat/al-masad.html" },
{ arabic: "الإخلاص", english: "Al Ikhlas", link: "/surat/al-ikhlas.html" },
{ arabic: "الفلق", english: "Al Falaq", link: "/surat/al-falaq.html" },
{ arabic: "الناس", english: "An Nas", link: "/surat/al-nas.html" }


    
    // Add more Surahs as needed
];

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

function filterSurahs() {
    const query = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = ""; // Clear previous results
    resultsDiv.style.display = "none";

    if (query) {
        const filteredSurahs = surahs.filter(surah =>
            surah.arabic.includes(query) || surah.english.toLowerCase().includes(query)
        );

        filteredSurahs.forEach(surah => {
            const resultItem = document.createElement("div");
            resultItem.textContent = `${surah.arabic} - ${surah.english}`;
            resultItem.onclick = () => {
                window.location.href = surah.link; // Redirect to Surah link
                searchInput.value = ""; // Clear the input field after selection
                resultsDiv.innerHTML = ""; // Hide the search results
                resultsDiv.style.display = "none"; // Hide the results dropdown
            };
            resultsDiv.appendChild(resultItem);
        });

        resultsDiv.style.display = filteredSurahs.length > 0 ? "block" : "none";
    }
}

// Hide the search results if clicked outside of the input field or results
document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !resultsDiv.contains(event.target)) {
        resultsDiv.style.display = "none";
    }
});
// Open the search modal
function openSearchModal() {
    document.getElementById("searchModal").style.display = "flex";
    document.getElementById("modalSearchInput").focus(); // Focus on the modal's input
}

// Close the search modal
function closeSearchModal() {
    document.getElementById("searchModal").style.display = "none";
}

// Filter Surahs function for auto-complete in the modal
function filterSurahs() {
    const query = document.getElementById("modalSearchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("modalResults");
    resultsDiv.innerHTML = ""; // Clear previous results

    const filteredSurahs = surahs.filter(surah =>
        surah.arabic.includes(query) || surah.english.toLowerCase().includes(query)
    );

    filteredSurahs.forEach(surah => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.textContent = `${surah.arabic} - ${surah.english}`;
        resultItem.onclick = () => {
            window.location.href = surah.link; // Redirect to Surah link
        };
        resultsDiv.appendChild(resultItem);
    });
}

// Hide modal if clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById("searchModal");
    if (event.target === modal) {
        closeSearchModal();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".surat .box");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Animate scale and opacity on scroll down
          entry.target.classList.remove("hidden"); // Remove hidden state when in view
        } else {
          entry.target.classList.remove("show"); // Remove scale animation on scroll up
          entry.target.classList.add("hidden"); // Fade out opacity only on scroll up
        }
      });
    }, {
      threshold: 0.5  // Adjusts when to trigger the animation (0.5 = halfway)
    });
  
    boxes.forEach(box => observer.observe(box));
  });
  