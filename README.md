# Acessibilidade digital
- [Introdução à acessibilidade digital](https://efficient-sloth-d85.notion.site/Acessibilidade-e51b21ba35e64e99b0075a8702338af2)

## HTML Semântico(Landmarks)
O simples fato de usar o HTML semântico corretamente já serve como uma boa base para a compreensão do conteúdo por parte dos usuários, especialmente aqueles que dependem de tecnologias assistivas para acessar a internet. Os elementos semânticos mais comumente utilizados incluem:

- `<header>` (Cabeçalho): O elemento `<header>` é usado para representar o cabeçalho de uma página ou seção. Pode conter logotipos, menus de navegação, informações de contato, ou outros elementos de identificação.

- `<nav>` (Navegação): O elemento `<nav>` é utilizado para definir uma seção que contém links de navegação ou menus de navegação principal. Esses links podem ajudar os usuários a se movimentar pela página ou para outras áreas relacionadas.

- `<main>` (Conteúdo Principal): O elemento `<main>` marca a seção que contém o conteúdo principal da página. Deve haver apenas um elemento <main> por página, representando o conteúdo central que os usuários buscam.

- `<section>` (Seção):O elemento `<section>` é usado para agrupar conteúdo relacionado em uma página. Pode incluir títulos, parágrafos, listas e outros elementos.

- `<article>` (Artigo):O elemento `<article>` representa uma peça autônoma de conteúdo, como um post de blog, um artigo de notícia ou um comentário.

- `<aside>` (Barra Lateral):O elemento `<aside>` é usado para representar conteúdo relacionado, muitas vezes em uma barra lateral. Pode conter informações complementares, anúncios ou outros elementos relevantes.

- `<footer>` (Rodapé):O elemento `<footer>` é usado para representar o rodapé de uma página. Pode conter informações de direitos autorais, links para redes sociais, informações de contato ou outras informações relacionadas.

- `<label>` (Rótulo):O elemento `<label>` é usado em formulários para associar um rótulo descritivo a um campo de entrada, facilitando a compreensão do que é esperado.

## ARIA
ARIA (Accessible Rich Internet Applications) é uma especificação técnica desenvolvida pelo World Wide Web Consortium (W3C) que fornece uma maneira de tornar aplicativos da web e interfaces de usuário mais acessíveis para pessoas com deficiências. ARIA permite que os desenvolvedores melhorem a acessibilidade das aplicações web dinâmicas e interativas, tornando-as mais utilizáveis para pessoas que dependem de tecnologias assistivas, como leitores de tela. As funcionalidades principais do ARIA incluem:

**Papel (Roles):**
Define o papel ou função de um elemento, indicando como ele deve ser interpretado pelos leitores de tela ou outras tecnologias assistivas. Exemplos de papéis incluem botão, caixa de diálogo, menu, barra de navegação, etc.

**Propriedades (Properties):** Descrevem características adicionais de um elemento, como estado, valor ou outras informações relevantes. Por exemplo, a propriedade "aria-expanded" pode indicar se um elemento expansível está aberto ou fechado.

**Estado (States):** Indicam o estado atual de um elemento, podendo ser dinâmico e alterar com a interação do usuário. Exemplos de estados incluem "pressed" (pressionado), "expanded" (expandido), "selected" (selecionado), entre outros.

**Relacionamentos (Relationships):** Estabelecem relações entre elementos, permitindo que as tecnologias assistivas compreendam a estrutura e o contexto da página. Por exemplo, "aria-describedby" pode apontar para a descrição de um elemento.

ARIA é especialmente útil em situações onde o HTML padrão não fornece informações suficientes para descrever a interação ou a semântica correta dos elementos, como em aplicações web altamente interativas e dinâmicas.

## Tecnologias para auxiliar no desenvolvimento
**Extensões usadas no navegador(Chrome)**

- [Landmark Navigation via Keyboard or Pop-up](https://chrome.google.com/webstore/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp/related)<br>
Para uma melhor visualização das landmarks durante o desenvolvimento.

- [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)<br>
Verificador de acessibilidade para desenvolvedores, testadores e designers.

- [ChromeVox](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn)<br>
Leitor de tela (tem o Português)

**Bibliotecas**

Um combo para detectar erros direto no código e também testar a acessibilidade da DOM renderizada seria: 
- [@axe-core/react](https://www.npmjs.com/package/@axe-core/react)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

## Links uteis
  - [WAI](https://www.w3.org/WAI/)
  - [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
  - [Landmarks Example](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/general-principles.html)
  - [Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

## Aplicação
Para rodar a aplicação que apliquei alguns conceitos de acessibilidade e usei algumas das ferramentas listadas acima é só seguir esse guia abaixo.

**Pré-requisitos**
  - É **necessário** um gerenciador de pacotes (**[NPM](https://www.npmjs.com/)**, **[Yarn](https://yarnpkg.com/)**, etc)

Neste exemplo vou user o yarn.

1. Faça um clone:

```sh
  $ git clone https://github.com/brunoduartelima/accessibility.git
```

2. Executando a Aplicação:
```sh
  # Instale as dependências
  $ yarn

  # Inicie a aplicação web
  $ yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador.