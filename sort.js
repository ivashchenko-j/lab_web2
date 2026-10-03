const grid = document.getElementById('grid');
const sortBtn = document.getElementById('sortBtn');
let asc = true;

sortBtn.addEventListener('click', () => {
    const cards = Array.from(grid.children);
    
    cards.sort((a, b) => {
        const titleA = a.querySelector('h2').textContent.trim();
        const titleB = b.querySelector('h2').textContent.trim();
        return asc ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB);
    });

    asc = !asc;
    sortBtn.textContent = `Сортування: ${asc ? 'A-Z' : 'Z-A'}`;
    
    cards.forEach(card => grid.appendChild(card));
});