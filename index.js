// FAQ__title sınıfına sahip tüm öğeleri seç
let accordian = document.getElementsByClassName("FAQ__title");

// Her bir öğe için bir olay dinleyici ekleyerek döngüyü başlat
for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    // Eğer ikinci çocuk öğe "fa-plus" sınıfını içeriyorsa
    if (this.childNodes[1].classList.contains("fa-plus")) {
      // "fa-plus" sınıfını kaldır ve "fa-times" sınıfını ekle
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      // Aksi halde "fa-times" sınıfını kaldır ve "fa-plus" sınıfını ekle
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    // Şu anki öğenin bir sonraki kardeşini seç
    let content = this.nextElementSibling;

    // Eğer içerik öğesinin "maxHeight" özelliği varsa
    if (content.style.maxHeight) {
      // "maxHeight" özelliğini kaldır
      content.style.maxHeight = null;
    } else {
      // Aksi halde "maxHeight" özelliğini içeriğin yüksekliği kadar ayarla
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
