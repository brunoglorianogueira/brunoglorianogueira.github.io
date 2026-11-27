# Como criar seu portfólio profissional com o Claude Code

Este guia tem duas partes:

1. **Preparação (você faz uma vez, cerca de 30 minutos):** instalar o Claude Code, criar a conta no GitHub e instalar as ferramentas.
2. **O prompt:** o texto que você cola no Claude Code para ele conduzir a criação do site com você, do zero até o site no ar.

O resultado é um site pessoal gratuito, hospedado no GitHub Pages, em um endereço como `https://seuusuario.github.io`. Ele fica em português e inglês, com seus resultados, trajetória, casos, recomendações e links de contato.

---

## Parte 1 · Preparação

### 1. Tenha o Claude Code

- Você precisa de uma assinatura paga do Claude (Pro ou Max), em https://claude.ai.
- Baixe o **app Claude para desktop** (Windows ou Mac) em https://claude.ai/download, faça login e abra a aba **Code**.
- Se preferir o terminal, veja as instruções em https://docs.claude.com/claude-code. O app é o caminho mais simples.

### 2. Crie sua conta no GitHub

1. Acesse https://github.com/signup.
2. Escolha bem o **nome de usuário**, porque ele vira o endereço do site: `nomeescolhido.github.io`. Prefira algo profissional, como `nomesobrenome`.
3. Confirme o e-mail.
4. Recomendado: ative a verificação em duas etapas e instale o app **GitHub Mobile** no celular. Ele ajuda na hora de autorizar o computador.

### 3. Instale o Git e o GitHub CLI

**No Windows:**
1. Git: baixe em https://git-scm.com/download/win e instale aceitando as opções padrão.
2. GitHub CLI: baixe em https://cli.github.com e instale.
3. Feche e abra de novo o app do Claude, para ele enxergar os programas novos.

**No Mac:** abra o Terminal e rode `xcode-select --install`, que instala o Git. Depois instale o GitHub CLI em https://cli.github.com (ou rode `brew install gh`, se você usa Homebrew).

> Se travar em qualquer passo, pode pedir ajuda ao próprio Claude Code: "me ajude a instalar o Git e o GitHub CLI".

### 4. Separe seus materiais em uma pasta

Crie uma pasta no computador, por exemplo `Documentos\GitHub`, e coloque nela:

- **Seu currículo em PDF.** Se tiver uma versão em inglês, coloque as duas.
- **Uma foto profissional**, de preferência vertical e com boa iluminação.
- Opcional: prints das suas **recomendações do LinkedIn**, links de livro, artigos, palestras e projetos.

### 5. Abra essa pasta no Claude Code e cole o prompt

No app, na aba Code, escolha essa pasta como pasta de trabalho. Copie o prompt da Parte 2, cole e envie.

O Claude vai fazer perguntas, montar o site, mostrar uma prévia e só publicar quando você aprovar.

**O login no GitHub é sempre feito por você.** O Claude vai pedir que você rode `gh auth login` e siga as telas. Ele nunca deve digitar sua senha.

---

## Parte 2 · O prompt (copie tudo daqui até o fim)

```text
Olá, Claude! Quero criar meu portfólio profissional pessoal e publicá-lo de graça no GitHub Pages. Sou iniciante em GitHub e em programação, então me conduza passo a passo, explicando em linguagem simples o que cada etapa faz. Fale comigo em português.

## O que eu quero no final
Um site pessoal, em português e inglês, que qualquer pessoa (recrutadores, headhunters, contatos) possa abrir para entender rapidamente quem eu sou, o que eu entrego e como falar comigo. O site deve ser visual, com gráficos, números em destaque e negrito nas frases-chave, sem perder conteúdo. Nada de páginas cansativas só de texto.

## Como quero que você trabalhe
1. Primeiro leia os arquivos desta pasta (meu currículo em PDF, a foto e outros materiais) e extraia tudo o que puder: cargos, datas, empresas, números, formação, idiomas e voluntariado.
2. Depois me faça as perguntas abaixo, em blocos curtos, usando caixas de múltipla escolha quando possível. Não pergunte o que já estiver claro no currículo.
3. Monte uma primeira versão, mostre a prévia rodando no navegador do app (em computador e em celular) e peça meu feedback.
4. Trabalhe em rodadas: eu mando uma lista de ajustes, você aplica todos, testa e me mostra. Repetimos até eu aprovar.
5. Só publique, ou atualize o que já está publicado, depois que eu disser que posso. Depois de cada publicação, confira se o site novo está mesmo no ar.

## Perguntas que quero que você me faça
Sobre conteúdo e posicionamento:
- Como você se apresenta em uma frase? Qual é o seu posicionamento profissional?
- Quais cargos você busca agora e em quais setores? Qual modelo de trabalho prefere (presencial, híbrido ou remoto) e em que cidade?
- Quais são os 3 a 5 resultados de que você mais se orgulha, de preferência com números? Qual é o principal resultado de cada experiência?
- Quais 3 ou 4 histórias da sua carreira dariam bons "casos" (contexto, o que você fez, impacto)?
- Tem alguma informação que NÃO pode aparecer no site? Por exemplo, números confidenciais de empresas, valores de contratos, nomes de clientes que você não pode citar.
- Como você trabalha, qual é o seu método ou a sua filosofia de gestão? Me conte com as suas palavras, para o texto ficar com a sua cara.
- Faz ou já fez trabalho voluntário? Tem números ou histórias sobre isso?
- Tem livro, artigos, palestras, cursos ou projetos pessoais que quer mostrar?
- Tem recomendações no LinkedIn que quer mostrar? Se sim, mande prints ou cole os textos, com o cargo de cada pessoa e a relação dela com você (gestor, liderado, par, cliente).
- Quer deixar reservada, escondida por enquanto, uma seção de "Projetos" para coisas que você ainda vai criar?

Sobre forma e contato:
- O site deve ser em quais idiomas? (Sugestão: português e inglês, com um botão PT/EN.)
- Qual estilo visual prefere: clean e sóbrio, moderno e colorido, ou editorial? Tem cores preferidas? Tem algum site de referência que você gosta?
- Vai usar foto? Ela é vertical ou horizontal? Se não tiver foto, prefere um monograma com suas iniciais?
- Quais contatos quer exibir: LinkedIn, WhatsApp, e-mail, Instagram, outros? Aceita mostrar o telefone e o e-mail abertamente, sabendo do risco de receber contatos indesejados?
- Quer disponibilizar o currículo em PDF para download? Com ou sem telefone?
- Quer um botão flutuante de WhatsApp?
- Qual nome de usuário você criou no GitHub? (O site ficará em https://SEUUSUARIO.github.io, e o repositório deve se chamar SEUUSUARIO.github.io.)

## Regras de privacidade e segurança (importante)
- Informações privadas que eu te contar para dar contexto, como pretensão salarial, preferências sobre empresas, motivos de saída ou situação pessoal, NUNCA devem ir para o site.
- Não exponha meu e-mail pessoal no histórico do Git: configure o Git para usar o e-mail "noreply" que o GitHub fornece (formato ID+usuario@users.noreply.github.com). Você consegue o ID com o comando gh api user.
- O login no GitHub é sempre feito por mim. Peça para eu rodar "gh auth login" (opções: GitHub.com, HTTPS, autenticar pelo navegador). Se o código de verificação não chegar, me oriente a abrir https://github.com/login/device, conferir o app GitHub Mobile e o e-mail (inclusive o spam), e tentar de novo.
- Não invente números nem fatos. Se algo não estiver no currículo ou nas minhas respostas, pergunte. Se precisar deduzir algo, me avise para eu confirmar.

## Especificações técnicas
- HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build: index.html, assets/css/style.css, assets/js/main.js, assets/img/ e cv/.
- O português fica no index.html. O inglês fica em um dicionário dentro do main.js, ligado por atributos data-i18n. A escolha do idioma fica salva no navegador, e o idioma inicial segue o do navegador do visitante. Os links do currículo mudam junto com o idioma (PDF em PT ou EN).
- Seções sugeridas, que você deve adaptar à minha história:
  1. Topo: nome, frase de posicionamento, status ("Aberto a novas posições"), botões "Vamos conversar" e "Baixar currículo", foto com um selo (ex.: "~20 anos de experiência").
  2. Faixa com empresas e clientes com quem trabalhei.
  3. Resultados: o maior resultado em grande destaque, mais um número por experiência, com gráficos simples (barras, rankings) feitos em HTML/CSS, e uma chamada "Veja os detalhes nos Casos abaixo".
  4. Casos: cards com Contexto, O que fiz e Impacto, e o número principal em destaque.
  5. Recomendações: carrossel de 3 em 3 (1 por vez no celular), com setas bem visíveis e indicadores. Use trechos curtos, com nome, cargo e relação comigo.
  6. Trajetória: um gráfico de linha do tempo (estilo Gantt) com cargo e duração em todas as barras, com o voluntariado em barras mais transparentes, e abaixo a linha do tempo em texto.
  7. Como eu trabalho: meu método em 3 a 4 etapas, escrito com as minhas palavras.
  8. Competências, idiomas (com barras de nível) e formação.
  9. Voluntariado, se houver.
  10. Livro, artigos ou projetos, se houver. Inclua também uma seção "Projetos" pronta, mas escondida, para uso futuro.
  11. Contato e links em cards com ícones. Destaque o currículo com uma cor diferente.
  12. Rodapé com um crédito curto dizendo que a página foi feita com a ajuda do Claude Code.
- Cabeçalho fixo com menu, ícones das redes sociais e o botão de idioma PT/EN. No celular, use um menu "hambúrguer".
- Layout responsivo (computador, tablet e celular), sem rolagem horizontal no celular. Animações suaves ao rolar a página, que respeitem a preferência de "reduzir movimento". Acessibilidade básica (textos alternativos, contraste, navegação por teclado). Estilo para impressão.
- Textos corridos devem ocupar a largura do conteúdo, sem quebrar linha cedo demais. Seções vizinhas devem ter fundos que se diferenciem.
- Prévia para compartilhamento (Open Graph): gere uma imagem de 1200x630 com meu nome, cargo, foto e o endereço do site, para aparecer bonita quando o link for colado no WhatsApp ou no LinkedIn.
- Favicon com minhas iniciais.
- Um README.md em português explicando como editar textos, foto, currículo e recomendações.

## Prévia local
Para me mostrar o site antes de publicar, rode um servidor local e abra no navegador do app. Se não houver Python nem Node instalados, crie um pequeno servidor em PowerShell (HttpListener) no Windows. Teste também em tamanho de celular e em inglês antes de me mostrar.

## Publicação
Quando eu aprovar:
1. Crie o repositório público SEUUSUARIO.github.io com o GitHub CLI e envie os arquivos na branch main.
2. Ative o GitHub Pages pela branch main, pasta raiz.
3. Espere a publicação terminar, confira se o endereço abre com o conteúdo novo e me passe o link.
4. Nas rodadas seguintes, faça um commit com uma mensagem clara em português para cada conjunto de ajustes e confira o site no ar depois de cada envio.

Pode começar lendo os arquivos desta pasta e me dizendo o que encontrou.
```

---

## Dicas de quem já fez

- **Mande o feedback em listas.** Funciona muito bem olhar o site com calma e mandar todos os ajustes de uma vez: cores, textos que não ficaram com a sua cara, números repetidos, quebras de linha feias. Prints ajudam muito.
- **Reescreva com as suas palavras o que não soar como você.** O Claude cria uma primeira versão do texto, mas as partes sobre seu método e seus valores ficam melhores quando você conta, do seu jeito, como pensa.
- **Revise cada número.** Confirme datas, rankings e valores, e retire o que for confidencial das empresas onde você trabalhou.
- **Recomendações do LinkedIn:** o Claude não consegue ler o LinkedIn sem login. Mande prints. Outra opção é você mesmo entrar no LinkedIn pelo navegador dentro do app do Claude.
- **Depois de cada publicação**, use Ctrl+F5 (ou Cmd+Shift+R no Mac) para ver a versão nova, porque o navegador costuma guardar a antiga.
