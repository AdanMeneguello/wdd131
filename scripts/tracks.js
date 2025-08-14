
const tracks = [
    {
        name: "Granja Viana Karting",
        city: "Cotia",
        region: "metropolitana",
        priceFrom: 140,
        link: "https://kartodromogranjaviana.com.br/",
        img: "images/granja.webp"
    },
    {
        name: "Aldeia da Serra Karting",
        city: "Barueri",
        region: "metropolitana",
        priceFrom: 150,
        link: "https://kartodromoaldeiadaserra.com.br/",
        img: "images/aldeia.webp"
    },
    {
        name: "Interlagos Karting",
        city: "Sao Paulo",
        region: "capital",
        priceFrom: 130,
        link: "https://autodromodeinterlagos.prefeitura.sp.gov.br/w/kartodromo-ayrton-senna",
        img: "images/interlagos.webp"
    },
    {
        name: "Speedland Karting",
        city: "Sao paulo",
        region: "capital",
        priceFrom: 160,
        link: "https://speedlandkartcenter.site.hotelariaweb.com/",
        img: "images/speedland.webp"
    },
    {
        name: "San Marino Karting",
        city: "Paulinia",
        region: "interior",
        priceFrom: 150,
        link: "https://sanmarinokart.com.br/",
        img: "images/san-marino.webp"
    },
    {
        name: "Nova Odessa Karting",
        city: "Paulinia",
        region: "interior",
        priceFrom: 150,
        link: "https://kartodromonovaodessa.com.br/",
        img: "images/nova-odessa.webp"
    },
    {
        name: "Italia Kart Valinhos",
        city: "Valinhos",
        region: "interior",
        priceFrom: 150,
        link: "https://italiakarteventos.com.br/",
        img: "images/italia.webp"
    },
    {
        name: "Arena Itu",
        city: "Itu",
        region: "interior",
        priceFrom: 135,
        link: "https://www.arenaitu.com.br/",
        img: "images/itu.webp"
    },
    {
        name: "Atibaia Karting",
        city: "Atibaia",
        region: "interior",
        priceFrom: 100,
        link: "https://www.instagram.com/kartodromo_de_atibaia/",
        img: "images/atibaia.webp"
    }
];

const grid = document.getElementById('tracksGrid');
const chips = document.querySelectorAll('.chip');

function render(list){
  grid.innerHTML = '';
  list.forEach(t => {
    const card = document.createElement('article');
    card.className = 'track-card';
    card.innerHTML = `
      <img src="${t.img}" alt="${t.name}" loading="lazy">
      <div class="pad">
        <h3>${t.name}</h3>
        <div class="track-meta">
          <span class="badge">${t.city}</span>
          <span> • Region: ${t.region}</span>
        </div>
        <p class="price"><strong>R$ ${t.priceFrom}</strong></p>
        <div class="actions">
          <a class="btn" href="${t.link}" target="_blank" rel="noopener">Official site</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function applyFilter(kind){
  let list = tracks.slice();
  if (kind === 'capital') list = list.filter(t => t.region === 'capital');
  if (kind === 'metropolitana') list = list.filter(t => t.region === 'metropolitana');
  if (kind === 'interior') list = list.filter(t => t.region === 'interior');
  if (kind === 'cheap') list = list.filter(t => t.priceFrom <= 150);
  render(list);
}

chips.forEach(chip => chip.addEventListener('click', e => {
  chips.forEach(c => c.classList.remove('active'));
  e.currentTarget.classList.add('active');
  applyFilter(e.currentTarget.dataset.filter);
}));

render(tracks);
