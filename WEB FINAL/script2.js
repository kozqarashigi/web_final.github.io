document.addEventListener('DOMContentLoaded', () => {
    // Play Sounds
    const notifyBtn = document.getElementById('notifyBtn');
    notifyBtn.addEventListener('click', () => {
        const audio = new Audio('sad_hamster.mp3');
        audio.play();
    });

       // Show Image with Animation
       const showImageBtn = document.getElementById('showImageBtn');
       const imageContainer = document.getElementById('imageContainer');
   
       showImageBtn.addEventListener('click', () => {
           if (!imageContainer.firstChild) {
               const img = document.createElement('img');
               img.src = '2.jpg'; // Update with your image path
               img.alt = 'мне этот мир абсолютно не понятен...';
   
               imageContainer.appendChild(img);
               imageContainer.style.display = 'block';
   
               // Trigger reflow to enable transition
               img.offsetHeight;
               imageContainer.classList.add('show');
           }
       });
   });

   