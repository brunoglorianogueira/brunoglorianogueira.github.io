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
- **Foto:** substitua `assets/img/bruno.png` (de preferência vertical, proporção 4:5). O corte é automático.
- **Currículo:** substitua os PDFs em `cv/` mantendo os mesmos nomes.
- **Depoimentos e Projetos:** as seções `#depoimentos` e `#projetos` estão prontas, mas escondidas. Preencha os cards seguindo o modelo comentado e remova o atributo `hidden`.
- **Prévia de compartilhamento:** `assets/img/og-card.png` (1200×630) é a imagem que aparece ao colar o link no WhatsApp ou no LinkedIn.

## Publicação

Hospedado no GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

HTML, CSS e JavaScript puros, sem dependências nem etapa de build.
