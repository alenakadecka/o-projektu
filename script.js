function changeBackground() {
  var images = [
      'img/padrian1.jpg',
      'img/padrian2.jpg',
      'img/coding.jpg',
      'img/pexels.jpg',
      'img/flower.jpg',
      'img/woman.jpg',
      'img/colors.jpg',
      'img/notebook.jpg',
  ];

  var randomImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = 'url(' + randomImage + ')';
}
