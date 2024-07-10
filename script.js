document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const articles = document.querySelectorAll('main article');

  function exibirConteudo(page) {
    articles.forEach(article => {
      article.style.display = 'none';
    });

    const article = document.getElementById(`content-${page}`);
    if (article) {
      article.style.display = 'block';
    }
  }

  // Inicialmente exibir o conteúdo da página BOEC
  exibirConteudo('boec');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove a classe 'active' de todos os links
      navLinks.forEach(navLink => navLink.classList.remove('active'));

      // Adiciona a classe 'active' apenas ao link clicado
      this.classList.add('active');

      const page = this.getAttribute('data-page');
      exibirConteudo(page);
    });
  });
});
