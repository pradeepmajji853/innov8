const products = [
  { name: "Iphone 15", description: "", image: "" ,link:"https://www.apple.com/iphone-15/" },
  { name: "MacBookPro", description: "", image: "MacBookPro.png",link:"https://www.apple.com/macbook-pro/" },
  { name: "ipad mini", description: "", image: "ipad.png" ,link:"https://www.apple.com/ipad-mini/"},
  { name: "OnePlus 11R", description: "", image: "oneplus.png",link:"https://www.oneplus.in/11r" },
  { name: "SamsungS23", description: "", image: "SamsungS23.png",link:"https://www.samsung.com/in/smartphones/galaxy-s23/buy/" },
  { name: "LGgram", description: "", image: "LGgram.png",link:"https://www.lg.com/in/lg-gram" },
  { name: "ElectricalDrumSet", description: "", image: "ElectricalDrumSet.png",link:"https://www.amazon.in/Kadence-Acoustic-Professional-Complete-Drumset/dp/B0CDXCQZXX/ref=sr_1_2?adgrpid=1315017513583810&hvadid=82188866231840&hvbmt=be&hvdev=c&hvlocph" },
  { name: "GooglePixel7", description: "", image: "GooglePixel7.png" ,link:"https://store.google.com/in/product/pixel_7?hl=en-GB"},
  { name: "JBLspeaker", description: "", image: "JBLspeaker.png" ,link:"https://in.jbl.com/SBSeries/SB190.html?cgid=SBSeries"},
  { name: "lenovo TAB4", description: "", image: "lenovo TAB4.png",link:"https://www.lenovo.com/in/en/?cid=in%3Aaffiliate%3Afiv7n7&acid=ww%3Aaffiliate%3Alx67i4&irgwc=1&irclickid=QXsX6xRZzxyPU5oX-9Vr7WYXUkH0S-xFOwfuUo0&Program=9634&pid=5010661" },
  { name: "MagneticRingForIphone", description: "", image: "MagneticRingForIphone.png" ,link:"https://www.amazon.in/ESR-HaloLock-MagSafe-Compatible-Compatible-Reinforced/dp/B0B8CTCQYC/ref=sr_1_1_sspa?adgrpid=1322714093386249&hvadid=82669902127508&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82670507912660%3Aloc-90&hydadcr=24542_2369315&keywords=magnetic%2Bring%2Biphone&qid=1702752647&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"},
  { name: "Mobile stand", description: "", image: "Mobile stand.png",link:"https://www.amazon.in/Ambrane-Adjustment-Compatibility-Multipurpose-Anti-Skid/dp/B09ZPL5VYM/ref=sr_1_1_sspa?adgrpid=1317216588716340&hvadid=82326304005312&hvbmt=be&hvde" },
  { name: "mobileholder", description: "", image: "mobileholder.png",link:"https://www.amazon.in/dp/B0CD4DJNSC/ref=syn_sd_onsite_desktop_0?ie=UTF8&pd_rd_plhdr=t&aref=57125027DEF05BA8D4A73B6746126BE23089A98D086AA8D0E93C2074F7D" },
  { name: "Motorola G", description: "", image: "Motorola G.png",link:"https://www.motorola.in/smartphones-moto-g-5g/p" },
  { name: "Nokia G20", description: "", image: "Nokia G20.png",link:"https://www.amazon.in/s?k=nokia+g+20&adgrpid=1312818536667616&hvadid=82051426339103&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82052089871634%3Aloc-90&hydadcr=24573_2369377&tag=msndeskstdin-21&ref=pd_sl_47rxitfiyu_e" },
  { name: "TCL 4", description: "", image: "TCL 4.png",link:"https://www.tcl.com/global/en/mobile/tcl-40-nxtpaper-5g" },
  


  
  
];
//redirecting to cash back and offers
document.getElementById("cashbackandoffers").addEventListener("click",function(){
  window.location.href="cashbacks&offers.html";
})
//redirecting to cart
document.getElementById("cart").addEventListener("click",function(){
  window.location.href="cart.html";
})
// Function to create and append product elements
function createProductElements() {
  const productContainer = document.getElementById("productContainer");

  products.forEach(product => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;

      const productName = document.createElement("h3");
      productName.textContent = product.name;

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;

      

      // Append elements to product item
      productItem.appendChild(productImage);
      productItem.appendChild(productName);
      productItem.appendChild(productDescription);
      
      
      productItem.addEventListener("click", () => {
          window.location.href = product.link;
      });

      // Append product item to container
      productContainer.appendChild(productItem);
      
  });
}
window.onload=createProductElements;
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let counter = 1;
  
    setInterval(() => {
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = 'translateX(' + (-counter * 100) + '%)';
  
      counter++;
  
      if (counter === 4) {
        counter = 1;
        setTimeout(() => {
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(' + (-counter * 100) + '%)';
        }, 500);
      }
    }, 3000);
  });
// Sample array of products with details

// Add this function to your existing script.js
function showHiddenButtons() {
  const hiddenButtons = document.querySelector('.hidden-buttons');
  hiddenButtons.style.display = 'flex';
}

// Add this function to handle the scratch card and redirect to the cashback page
function redirectToCashback() {
  // Simulate scratching the card
  const cashbackAmount = Math.floor(Math.random() * 100) + 1; // Generate a random cashback amount

  // Redirect to the cashback&offers.html page with the cashback amount as a query parameter
  window.location.href = `cashbacks&offers.html?cashback=${cashbackAmount}`;
}

// Call this function when you want to reveal the hidden buttons (e.g., after some time, user interaction, etc.)
// For example, you can call it inside your existing window.onload event.
showHiddenButtons();
document.addEventListener('DOMContentLoaded', function () {
  // ... Your existing code

  // Function to show scratch card and give cashback
  function showScratchCard() {
      // Create a scratch card element
      const scratchCard = document.createElement('div');
      scratchCard.classList.add('scratch-card');

      // Add content to the scratch card
      const scratchCardContent = document.createElement('div');
      scratchCardContent.innerHTML = '<p>Congratulations! You won <span id="cashbackAmount"></span> cashback.</p>';
      scratchCard.appendChild(scratchCardContent);

      // Append scratch card to the body
      document.body.appendChild(scratchCard);

      // Add event listener for scratching
      let isDragging = false;
      scratchCardContent.addEventListener('mousedown', () => {
          isDragging = true;
      });

      document.addEventListener('mouseup', () => {
          isDragging = false;
      });

      scratchCardContent.addEventListener('mousemove', function (e) {
          if (!isDragging) return;

          const rect = scratchCardContent.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const percentScratched = (x * 100) / rect.width;

          // If more than 50% is scratched, reveal the cashback amount
          if (percentScratched > 50) {
              const cashbackAmount = Math.floor(Math.random() * 101); // Random cashback amount
              document.getElementById('cashbackAmount').innerText = `$${cashbackAmount}`;
          }
      });
  }

  // Add click event listeners to hidden buttons
  const hiddenButton1 = document.getElementById('hiddenButton1');
  const hiddenButton2 = document.getElementById('hiddenButton2');

  hiddenButton1.addEventListener('click', function () {
      // Show the scratch card
      showScratchCard();
  });

  hiddenButton2.addEventListener('click', function () {
      // Show the scratch card
      showScratchCard();
  });
});

