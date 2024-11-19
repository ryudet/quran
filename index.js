// Toggle settings sidebar
document.getElementById('settings-icon').addEventListener('click', function () {
    document.getElementById('settings-sidebar').classList.toggle('open');
  });
  
  // Close settings sidebar
  document.getElementById('close-settings').addEventListener('click', function () {
    document.getElementById('settings-sidebar').classList.remove('open');
  });
  
  // Toggle dark mode
  document.getElementById('dark-mode-toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
  });
  
  // Adjust font size
  document.getElementById('font-size-select').addEventListener('change', function () {
    const fontSize = this.value;
    if (fontSize === 'small') {
      document.body.style.fontSize = '14px';
    } else if (fontSize === 'large') {
      document.body.style.fontSize = '20px';
    } else {
      document.body.style.fontSize = '16px'; // Default medium size
    }
  });
  document.getElementById('dark-mode-toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
  });
  // Check saved dark mode setting on page load
window.addEventListener('DOMContentLoaded', () => {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
  document.body.classList.toggle('dark-mode', darkModeEnabled);
  document.getElementById('dark-mode-toggle').checked = darkModeEnabled;
});

// Toggle dark mode and save preference
document.getElementById('dark-mode-toggle').addEventListener('change', function () {
  const isEnabled = this.checked;
  document.body.classList.toggle('dark-mode', isEnabled);
  localStorage.setItem('darkMode', isEnabled ? 'enabled' : 'disabled');
});

document.getElementById('play-text').addEventListener('click', function() {
  const audio = document.getElementById('audio-element');
  
  // Check if audio is already playing
  if (audio.paused) {
    audio.play(); // Play the audio if it's paused
  } else {
    audio.pause(); // Pause the audio if it's playing
    audio.currentTime = 0; // Reset audio to start
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const playText = document.getElementById('play-text');
  const playIcon = document.getElementById('play-icon');
  const audio = document.getElementById('audio-element');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressBar = document.getElementById('progressBar');
  const volumeControl = document.getElementById('volumeControl');
  const muteBtn = document.getElementById('muteBtn');
  const currentTimeEl = document.getElementById('currentTime');
  const durationEl = document.getElementById('duration');

  let isMuted = false;
  let previousVolume = 0.5; // Default volume

  // Function to format time in mm:ss
  function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
  }

  // Update duration once metadata is loaded
  audio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audio.duration);
  });

  // Update current time and progress bar as audio plays
  audio.addEventListener('timeupdate', () => {
      currentTimeEl.textContent = formatTime(audio.currentTime);
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progress;
  });

  // Play or pause audio when play text is clicked
  playText.addEventListener('click', () => {
      playIcon.style.display = 'inline'; // Show the play icon
  });

  // Toggle play/pause
  function togglePlayPause() {
      if (audio.paused) {
          audio.play();
          playIcon.innerHTML = '<i class="fas fa-pause"></i>';
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
          audio.pause();
          playIcon.innerHTML = '<i class="fas fa-play"></i>';
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
  }

  // Event listeners for play buttons
  playIcon.addEventListener('click', togglePlayPause);
  playPauseBtn.addEventListener('click', togglePlayPause);

  // Seek audio position when progress bar is changed
  progressBar.addEventListener('input', () => {
      const seekTime = (progressBar.value / 100) * audio.duration;
      audio.currentTime = seekTime;
  });

  // Control volume
  volumeControl.addEventListener('input', () => {
      audio.volume = volumeControl.value;
      if (audio.volume === 0) {
          muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
          isMuted = true;
      } else {
          muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
          isMuted = false;
          previousVolume = audio.volume;
      }
  });

  // Mute or unmute audio
  muteBtn.addEventListener('click', () => {
      if (!isMuted) {
          previousVolume = audio.volume;
          audio.volume = 0;
          volumeControl.value = 0;
          muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
          isMuted = true;
      } else {
          audio.volume = previousVolume;
          volumeControl.value = previousVolume;
          muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
          isMuted = false;
      }
  });

  // Optional: Automatically update the progress bar when audio ends
  audio.addEventListener('ended', () => {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      playIcon.innerHTML = '<i class="fas fa-play"></i>';
      progressBar.value = 0;
      currentTimeEl.textContent = '00:00';
  });
});
const audioBar = document.getElementById("audioBar");
const openAudioBarButton = document.getElementById("openAudioBar");

// Close the audio bar
function closeAudioBar() {
    audioBar.style.display = "none";
    openAudioBarButton.style.display = "inline"; // Show open button
}

// Open the audio bar
function openAudioBar() {
    audioBar.style.display = "flex"; // Set to flex or block, depending on your layout
    openAudioBarButton.style.display = "none"; // Hide open button
}
function replaceTashkeelWithX() {
  // الحصول على جميع النصوص في الصفحة
  var elements = document.body.getElementsByTagName('*');
  
  // المرور على جميع العناصر
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    
    // التحقق إذا كان العنصر يحتوي على نص
    if (element.childNodes.length > 0) {
      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        
        // إذا كانت العقدة هي نص (Text Node)
        if (node.nodeType === 3) {
          var text = node.nodeValue;
          
          // استبدال التشكيل فقط إذا كانت هناك علامة إكس على الحرف
          var newText = text
            // تغيير التشكيل على حرف "ض"
            .replace(/ضٞ/g, 'ضٌ')
            // تغيير التشكيل على حرف "ط"
            .replace(/طٞ/g, 'طٌ')
            // تغيير التشكيل على حرف "ص"
            .replace(/صٞ/g, 'صٌ')
            // تغيير التشكيل على حرف "ق"
            .replace(/قٞ/g, 'قٌ')
            // تغيير التشكيل على حرف "س"
            .replace(/سٞ/g, 'سٌ')
            // تغيير التشكيل على حرف "ش"
            .replace(/شٞ/g, 'شٌ')
            // تغيير التشكيل على حرف "د"
            .replace(/دٞ/g, 'دٌ')
            // تغيير التشكيل على حرف "ت"
            .replace(/تٞ/g, 'تٌ')
            // تغيير التشكيل على حرف "ر"
            .replace(/رٞ/g, 'رٌ')
            // تغيير التشكيل على حرف "ز"
            .replace(/زٞ/g, 'زٌ')
            // تغيير التشكيل على حرف "ع"
            .replace(/عٞ/g, 'عٌ')
            // تغيير التشكيل على حرف "غ"
            .replace(/غٞ/g, 'غٌ')
            // تغيير التشكيل على حرف "ف"
            .replace(/فٞ/g, 'فٌ')
            // تغيير التشكيل على حرف "م"
            .replace(/مٞ/g, 'مٌ')
            // تغيير التشكيل على حرف "ن"
            .replace(/نٞ/g, 'نٌ')
            // تغيير التشكيل على حرف "ه"
            .replace(/هٞ/g, 'هٌ')
            // تغيير التشكيل على حرف "و"
            .replace(/وٞ/g, 'وٌ')
            // تغيير التشكيل على حرف "ي"
            .replace(/يٞ/g, 'يٌ')
            // بقية الحروف العربية مع التشكيلات
            .replace(/أٞ/g, 'أٌ')
            .replace(/بٞ/g, 'بٌ')
            .replace(/جٞ/g, 'جٌ')
            .replace(/حٞ/g, 'حٌ')
            .replace(/خٞ/g, 'خٌ')
            .replace(/ذٞ/g, 'ذٌ')
            .replace(/زٞ/g, 'زٌ')
            .replace(/سٞ/g, 'سٌ')
            .replace(/شٞ/g, 'شٌ')
            .replace(/صٞ/g, 'صٌ')
            .replace(/ضٞ/g, 'ضٌ')
            .replace(/طٞ/g, 'طٌ')
            .replace(/ظٞ/g, 'ظٌ')
            .replace(/عٞ/g, 'عٌ')
            .replace(/غٞ/g, 'غٌ')
            .replace(/فٞ/g, 'فٌ')
            .replace(/قٞ/g, 'قٌ')
            .replace(/كٞ/g, 'كٌ')
            .replace(/لٞ/g, 'لٌ')
            .replace(/مٞ/g, 'مٌ')
            .replace(/نٞ/g, 'نٌ')
            .replace(/هٞ/g, 'هٌ')
            .replace(/وٞ/g, 'وٌ')
            .replace(/ةٞ/g, 'ةٌ') // تغيير التشكيل على حرف "ة"
            .replace(/يٞ/g, 'يٌ')
              // تغيير التشكيل على حرف "ر"
              .replace(/رٖ/g, 'رٍ')
              // تغيير التشكيل على حرف "ض"
              .replace(/ضٖ/g, 'ضٍ')
              // تغيير التشكيل على حرف "ط"
              .replace(/طٖ/g, 'طٍ')
              // تغيير التشكيل على حرف "ص"
              .replace(/صٖ/g, 'صٍ')
              // تغيير التشكيل على حرف "ق"
              .replace(/قٖ/g, 'قٍ')
              // تغيير التشكيل على حرف "س"
              .replace(/سٖ/g, 'سٍ')
              // تغيير التشكيل على حرف "ش"
              .replace(/شٖ/g, 'شٍ')
              // تغيير التشكيل على حرف "د"
              .replace(/دٖ/g, 'دٍ')
              // تغيير التشكيل على حرف "ت"
              .replace(/تٖ/g, 'تٍ')
              // تغيير التشكيل على حرف "ز"
              .replace(/زٖ/g, 'زٍ')
              // تغيير التشكيل على حرف "ع"
              .replace(/عٖ/g, 'عٍ')
              // تغيير التشكيل على حرف "غ"
              .replace(/غٖ/g, 'غٍ')
              // تغيير التشكيل على حرف "ف"
              .replace(/فٖ/g, 'فٍ')
              // تغيير التشكيل على حرف "م"
              .replace(/مٖ/g, 'مٍ')
              // تغيير التشكيل على حرف "ن"
              .replace(/نٖ/g, 'نٍ')
              // تغيير التشكيل على حرف "ه"
              .replace(/هٖ/g, 'هٍ')
              // تغيير التشكيل على حرف "و"
              .replace(/وٖ/g, 'وٍ')
              // تغيير التشكيل على حرف "ي"
              .replace(/يٖ/g, 'يٍ')
              // إضافة التشكيل على حرف "ة"
              .replace(/ةٖ/g, 'ةٍ')
              .replace(/لٖ/g, 'لٍ')
              
              .replace(/بٖ/g, 'بٍ')
              .replace(/ضٗ/g, 'ضً')
            .replace(/رٗ/g, 'رً')
            .replace(/طٗ/g, 'طً')
            .replace(/صٗ/g, 'صً')
            .replace(/قٗ/g, 'قً')
            .replace(/سٗ/g, 'سً')
            .replace(/شٗ/g, 'شً')
            .replace(/دٗ/g, 'دً')
            .replace(/تٗ/g, 'تً')
            .replace(/زٗ/g, 'زً')
            .replace(/عٗ/g, 'عً')
            .replace(/غٗ/g, 'غً')
            .replace(/فٗ/g, 'فً')
            .replace(/مٗ/g, 'مً')
            .replace(/نٗ/g, 'نً')
            .replace(/هٗ/g, 'هً')
            .replace(/وٗ/g, 'وً')
            .replace(/يٗ/g, 'يً')
            .replace(/ةٗ/g, 'ةً')
            .replace(/بٗ/g, 'بً')
            .replace(/لٗ/g, 'لً')
            .replace(/اٗ/g, 'اً')  // حرف ألف
            .replace(/تٗ/g, 'تً')  // حرف ت
            .replace(/ثٗ/g, 'ثً')  // حرف ث
            .replace(/جٗ/g, 'جً')  // حرف ج
            .replace(/حٗ/g, 'حً')  // حرف ح
            .replace(/خٗ/g, 'خً')  // حرف خ
            .replace(/ذٗ/g, 'ذً')  // حرف ذ
            .replace(/دٗ/g, 'دً')  // حرف د
            .replace(/زٗ/g, 'زً')  // حرف ز
            .replace(/وٗ/g, 'وً')  // حرف و
            .replace(/ءٗ/g, 'ءً')  // حرف همزة
            .replace(/اٗ/g, 'اً')  // حرف ألف
            .replace(/فٗ/g, 'فً')  // حرف ف
            .replace(/كٗ/g, 'كً')  // حرف ك
            .replace(/لٗ/g, 'لً')  // حرف ل
            .replace(/مٗ/g, 'مً')  // حرف م
            .replace(/نٗ/g, 'نً')  // حرف ن
            .replace(/وٗ/g, 'وً')  // حرف و
            .replace(/هٗ/g, 'هً')  // حرف ه
            .replace(/جٖ/g, 'جٍ')
            .replace(/ءٖ/g, 'ءٍ')
            .replace(/يٖ/g, 'يٍ')
            .replace(/يٗ/g, 'يً'); // حرف ي; // تغيير التشكيل على حرف "ب"; // تغيير التشكيل على حرف "ة"
            
          
          // تحديث النص الجديد في العقدة
          node.nodeValue = newText;
        }
      }
    }
  }
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = replaceTashkeelWithX;

  // حدد جميع العناصر التي تحتوي على النص "التفسير"
  const links = document.querySelectorAll('li a');

  links.forEach(link => {
      if (link.textContent.includes("التفسير")) {
          // استبدال النص بـ "قصص"
          link.innerHTML = link.innerHTML.replace("التفسير", "القصص");
      }
  });

  // استهداف جميع الروابط التي تحتوي على النص "السورة الماضية"
document.querySelectorAll('a').forEach(link => {
  // التحقق إذا كان النص يحتوي على "السورة الماضية"
  if (link.textContent.includes('السورة الماضية')) {
      // استهداف النص فقط وتغييره دون التأثير على الأيقونة
      link.innerHTML = link.innerHTML.replace('السورة الماضية', 'السورة السابقة');
  }
});
