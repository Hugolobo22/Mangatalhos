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
        imagem: "https://cdn.kobo.com/book-images/6c606542-4697-465f-8f23-2b728309d6a3/1200/1200/False/haikyu-vol-1.jpg",
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
        imagem: "https://upload.wikimedia.org/wikipedia/en/9/99/Vagabond_%28manga%29_vol._1.png",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 6,
        titulo: "the beginning after the end",
        imagem: "https://cdn.kobo.com/book-images/39652de0-fc64-43f1-9a52-598cf68347a0/353/569/90/False/early-years-3.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 7,
        titulo: "Overgeared",
        imagem: "https://cdn.kobo.com/book-images/3dc64f2e-6684-4c1f-b419-4332770fe555/353/569/90/False/overgeared-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 8,
        titulo: "Record of Ragnarok",
        imagem: "https://cdn.kobo.com/book-images/83437b06-ff13-4eac-a330-3ab110c6c62c/353/569/90/False/record-of-ragnarok-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 9,
        titulo: "One Punch Man",
        imagem: "https://cdn.kobo.com/book-images/92e8c5b0-74dd-489f-afd2-eefe8a9d6847/1200/1200/False/one-punch-man-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 10,
        titulo: "One Piece",
        imagem: "https://cdn.kobo.com/book-images/0b1f895c-0bc7-4077-a14c-3dc9bac16099/1200/1200/False/one-piece-vol-1-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 11,
        titulo: "Hunter x Hunter",
        imagem: "https://cdn.kobo.com/book-images/faad0238-f703-4c9f-9713-9e8fd4c6d236/1200/1200/False/hunter-x-hunter-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 12,
        titulo: "Kaiju Nº 8",
        imagem: "https://m.media-amazon.com/images/I/81GG6CFqZrL._AC_UF1000,1000_QL80_.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 13,
        titulo: "Kagurabachi",
        imagem: "https://m.media-amazon.com/images/I/912V2U+luQL._AC_UF1000,1000_QL80_.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 14,
        titulo: "Gachuakuta",
        imagem: "https://cdn.kobo.com/book-images/8ea57053-5055-4b97-afdf-7875247a4411/1200/1200/False/gachiakuta-1-2.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 15,
        titulo: "Dan da Dan",
        imagem: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628210042i/58710127.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 16,
        titulo: "Frieren",
        imagem: "https://cdn.kobo.com/book-images/a4657ab4-c145-4216-9fbc-2546a6cb1c75/353/569/90/False/frieren-oltre-la-fine-del-viaggio-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 17,
        titulo: "Berserk",
        imagem: "https://cdn.kobo.com/book-images/b7ccda5d-c44e-4041-a1d4-382e69c641a1/353/569/90/False/berserk-volume-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 18,
        titulo: "Vinland Saga",
        imagem: "https://cdn.kobo.com/book-images/d2186ee1-f838-4d42-ab6d-d15deed30271/353/569/90/False/vinland-saga-1-3.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 19,
        titulo: "Fullmetal Alchemist",
        imagem: "https://cdn.kobo.com/book-images/1df4ff0d-3708-435b-ae3a-54b67f006bc0/1200/1200/False/fullmetal-alchemist-vol-1-2.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 20,
        titulo: "Chainsaw Man",
        imagem: "https://cdn.kobo.com/book-images/9b90e481-4b79-47e1-a919-3d0a46752177/1200/1200/False/chainsaw-man-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 21,
        titulo: "Tokyo Ghoul",
        imagem: "https://cdn.kobo.com/book-images/7e36e390-5214-42fc-8cf9-8ac01df7184f/1200/1200/False/tokyo-ghoul-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 22,
        titulo: "Solo Leveling",
        imagem: "https://cdn.kobo.com/book-images/2549815e-9024-4668-bf7d-ab167be95fb5/1200/1200/False/solo-leveling-vol-1-comic.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 23,
        titulo: "Spy x Family",
        imagem: "https://cdn.kobo.com/book-images/07d1ab28-6fb4-4bfd-b125-21354e434b17/353/569/90/False/spy-x-family-vol-1.jpg",
        url: "https://exemplo.com/manga3",
        autor: "Koyoharu Gotouge",
        ano: 2019,
        genero: "Ação"
    },
    {
        id: 24,
        titulo: "Black Clover   ",
        imagem: "https://cdn.kobo.com/book-images/5aa89711-9c18-4a2d-8e69-ed6a2eccbb17/1200/1200/False/black-clover-vol-1.jpg",
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
