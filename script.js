// دالة لزيادة العداد عند الضغط على الزر
function incrementCount(button) {
    const countSpan = button.nextElementSibling;
    let currentCount = parseInt(countSpan.textContent, 10);
    countSpan.textContent = currentCount + 1;
  }
  