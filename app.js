// HTML'de '.tab-item' sınıfına sahip tüm öğeleri seç
const tabItems = document.querySelectorAll('.tab-item');
// HTML'de '.tab-content-item' sınıfına sahip tüm öğeleri seç
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Seçili öğeyi belirleme fonksiyonu
function selectItem(e) {
  // Tüm 'show' ve 'tab-border' sınıflarını kaldır
  removeBorder();
  removeShow();
  // Mevcut sekme öğesine 'tab-border' sınıfını ekle
  this.classList.add('tab-border');
  // DOM'dan içerik öğesini al
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // 'show' sınıfını ekle
  tabContentItem.classList.add('show');
}

// Tüm tab öğelerinden alt sınırları kaldırma fonksiyonu
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
}

// Tüm içerik öğelerinden 'show' sınıfını kaldırma fonksiyonu
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

// Tab öğelerinin tıklama olayını dinle
tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});
