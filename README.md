# Bruno Glória Nogueira · Portfólio

Site pessoal com minha trajetória em operações e liderança comercial, em português e inglês.

## Estrutura

```
index.html            conteúdo em português (versão padrão)
assets/css/style.css  visual
assets/js/main.js     traduções para inglês, menu e animações
cv/                   currículos em PDF (PT e EN)
```

## Como editar

- **Texto em português:** direto no `index.html`.
- **Texto em inglês:** no objeto `EN` em `assets/js/main.js`. Cada chave corresponde a um `data-i18n` do HTML.
- **Foto:** salve como `assets/img/bruno.jpg` e siga o comentário no bloco `hero-photo` do `index.html`.
- **Currículo:** substitua os PDFs em `cv/` mantendo os mesmos nomes.

## Publicação

Hospedado no GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

HTML, CSS e JavaScript puros, sem dependências nem etapa de build.
