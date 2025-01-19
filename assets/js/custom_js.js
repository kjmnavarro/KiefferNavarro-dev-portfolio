const totalLogos = 31;
const logosPerRow = 6;
const container = document.getElementById('logo-container');

let row;

for (let i = 1; i <= totalLogos; i++) {
    
    if ((i - 1) % logosPerRow === 0) {
        row = document.createElement('div');
        row.classList.add('logo-row');
        container.appendChild(row);
    }

    const logoUrl = `assets/images/logos/logo${i}.png`;

    const logoHolder = document.createElement('div');
    logoHolder.classList.add('logo-holder');
    logoHolder.style.backgroundImage = `url(${logoUrl})`;
    
    row.appendChild(logoHolder);
}
