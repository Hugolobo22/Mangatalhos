// Array com livros e mangás (agora com mais informações)
const livros = [
    {
        id: 1,
        titulo: "Attack on Titan",
        imagem: "https://cdn.kobo.com/book-images/fc99d295-1348-4849-bd96-8c25b25f3598/353/569/90/False/attack-on-titan-16.jpg",
        url: "https://exemplo.com/livro1",
        autor: "Hajime Isayama",
        ano: 2020,
        genero: "Ação"
    },
    {
        id: 2,
        titulo: "Jujutsu Kaisen",
        imagem: "https://cdn.kobo.com/book-images/44717797-1fe9-475e-bca1-fe8aa6d0e7d8/1200/1200/False/jujutsu-kaisen-vol-1.jpg",
        url: "https://exemplo.com/manga1",
        autor: "Gege Akutami",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 3,
        titulo: "Haikyuu!!",
        imagem: "https://cdn.kobo.com/book-images/12345678-1fe9-475e-bca1-fe8aa6d0e7d8/1200/1200/False/haikyuu.jpg",
        url: "https://exemplo.com/manga2",
        autor: "Haruichi Furudate",
        ano: 2018,
        genero: "Esporte"
    },
    {
        id: 4,
        titulo: "Demon Slayer",
        imagem: "https://cdn.kobo.com/book-images/086b65fc-4a24-4400-9b81-d828313958bf/353/569/90/False/demon-slayer-kimetsu-no-yaiba-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 5,
        titulo: "Vagabond",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 6,
        titulo: "the beginning after the end",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 7,
        titulo: "Overgeared",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 8,
        titulo: "Record of Ragnarok",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 9,
        titulo: "One Punch Man",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 10,
        titulo: "One Piece",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 11,
        titulo: "Hunter x Hunter",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 12,
        titulo: "Kaiju Nº 8",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 13,
        titulo: "Kagurabachi",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 14,
        titulo: "Gachuakuta",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 15,
        titulo: "Mangá 15",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 16,
        titulo: "Mangá 16",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 17,
        titulo: "Mangá 17",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 18,
        titulo: "Mangá 18",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 19,
        titulo: "Mangá 19",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 20,
        titulo: "Mangá 20",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 21,
        titulo: "Mangá 21",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 22,
        titulo: "Mangá 22",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 23,
        titulo: "Mangá 23",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 24,
        titulo: "Mangá 24",
        imagem: "",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    // Adicione mais mangás conforme necessário
];

// Função para carregar os livros/mangás e permitir a navegação para detalhes
function carregarLivros() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Limpa o container antes de adicionar novos cards

    livros.forEach(livro => {
        // Cria o card do livro
        const card = document.createElement('div');
        card.classList.add('book-card');

        // Adiciona a imagem do livro
        const img = document.createElement('img');
        img.src = livro.imagem;
        card.appendChild(img);

        // Adiciona o título do livro
        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;
        card.appendChild(titulo);

        // Adiciona o botão de link para a página de detalhes
        const link = document.createElement('a');
        link.href = `detalhes.html?id=${livro.id}`; // Passa o ID pela URL
        link.textContent = "Ver detalhes";
        card.appendChild(link);

        // Adiciona o card ao container
        container.appendChild(card);

        setTimeout(() => {
            card.classList.add('visible'); // Aplica a classe 'visible' após o carregamento
        }, 0);
    });
}

function filtrarLivros() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Limpa o container

    const livrosFiltrados = livros.filter(livro => {
        const matchesTitle = livro.titulo.toLowerCase().includes(searchInput);
        return matchesTitle; // Retorna apenas os que combinam com o título
    });

    livrosFiltrados.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        const img = document.createElement('img');
        img.src = livro.imagem;
        card.appendChild(img);

        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;
        card.appendChild(titulo);

        const link = document.createElement('a');
        link.href = `detalhes.html?id=${livro.id}`;
        link.textContent = "Ver detalhes";
        card.appendChild(link);

        container.appendChild(card);

        setTimeout(() => {
            card.classList.add('visible');
        }, 0);
    });
}

function filtrarPorGenero(genero) {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Limpa o container

    const livrosFiltrados = livros.filter(livro => livro.genero === genero);

    livrosFiltrados.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        const img = document.createElement('img');
        img.src = livro.imagem;
        card.appendChild(img);

        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;
        card.appendChild(titulo);

        const link = document.createElement('a');
        link.href = `detalhes.html?id=${livro.id}`;
        link.textContent = "Ver detalhes";
        card.appendChild(link);

        container.appendChild(card);

        setTimeout(() => {
            card.classList.add('visible');
        }, 0);
    });
}

function mostrarTodosLivros() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Limpa o container

    carregarLivros(); // Recarrega todos os livros

    // Limpa a barra de pesquisa
    document.getElementById('search-bar').value = '';
}

// Carrega os livros quando a página for carregada
window.onload = () => {
    carregarLivros();

    // Adiciona um evento de entrada na barra de pesquisa
    document.getElementById('search-bar').addEventListener('input', filtrarLivros);
};
