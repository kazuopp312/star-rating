const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  philips: 4.1
}

// Total stars
const starsTotal = 5;

// Run getRating when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product
let product

// Product select change
productSelect.addEventListener('change',(e) => {
  product = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// Rating control change
ratingControl.addEventListener('blur',(e) => {
  const rating = e.target.value;

  // Make sure 5 or under
  if(rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }

  // Change rating
  ratings[product] = rating;

  getRatings();
});

//Get ratings
function getRatings() {
  // rating = プロパティ名 ratings[rating] = プロパティの値
  for(let rating in ratings) {
    // Get percentage
    const starPercentage = `${(ratings[rating]) / starsTotal * 100}%`;

    // Round to nearest 10
    // const starPercentageRounded = `${Math.round
    //   (starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating}
    .stars-inner`).style.width = starPercentage;

    //  console.log(starPercentage);

    // Add number rating
    document.querySelector(`.${rating}
    .number-rating`).innerHTML = ratings[rating];
  }
}