# Bruno Glória Nogueira · Portfólio

Site pessoal com minha trajetória em operações e liderança comercial, em português e inglês.

Quer criar um portfólio como este com o Claude Code? Veja a pasta [`guia/`](guia/): [Orientações](guia/Orientações.md) e o [prompt completo](guia/Prompt_Portfolio_com_Claude_Code.md).

## Estrutura

```
index.html            conteúdo em português (versão padrão)
assets/css/style.css  visual
assets/js/main.js     traduções para inglês, menu, carrossel e animações
assets/img/           foto e imagem de prévia (og-card.png)
cv/                   currículos em PDF (PT e EN)
guia/                 orientações e prompt para criar um portfólio com o Claude Code
```

## Como editar

- **Texto em português:** direto no `index.html`.
- **Texto em inglês:** no objeto `EN` em `assets/js/main.js`. Cada chave corresponde a um `data-i18n` do HTML.
- **Foto:** substitua `assets/img/bruno.png` (de preferência vertical, proporção 4:5). O corte é automático.
- **Currículo:** substitua os PDFs em `cv/` mantendo os mesmos nomes.
- **Recomendações:** cada card em `#depoimentos` é um `<figure class="quote">`. A tradução fica nas chaves `q1`…`q9` do `main.js`.
- **Projetos:** a seção `#projetos` está pronta, mas escondida. Preencha os cards seguindo o modelo comentado e remova o atributo `hidden`.
- **Prévia de compartilhamento:** `assets/img/og-card.png` (1200×630) é a imagem que aparece ao colar o link no WhatsApp ou no LinkedIn.

## Publicação

Hospedado no GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

HTML, CSS e JavaScript puros, sem dependências nem etapa de build.
