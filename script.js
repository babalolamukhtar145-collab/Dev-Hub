// Search books by title
function searchBooks() {
  let input = document.getElementById("search").value.toLowerCase();
  let books = document.getElementsByClassName("book");

  for (let i = 0; i < books.length; i++) {
    let title = books[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (title.includes(input)) {
      books[i].style.display = "block";
    } else {
      books[i].style.display = "none";
    }
  }
}

// Click effect when opening book
document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".book img");

  images.forEach(img => {
    img.addEventListener("click", function () {
      console.log("Opening book...");
    });
  });
});