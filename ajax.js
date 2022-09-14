// For some reasons this page is not working correctly.
console.log("Using Ajax");
let fetchBtn = document.getElementById(`fetchBtn`);
fetchBtn.addEventListener('click', buttonClickHandler)
function buttonClickHandler() {
  console.log('The fetch button is clicked');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'description.txt', true);
}

xhr.onload = function() {
  if (this.status ===200) {
    console.log(this.responseText);
  } else {
    console.log("There are some errors");
  }
}

xhr.send()
}
