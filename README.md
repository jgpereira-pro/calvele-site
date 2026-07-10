# 🍔 Calvele - Landing Page & Cardápio Digital (Astro)

## 💻 Sobre o Projeto
Este projeto é a vitrine digital e o cardápio interativo do **Calvele**. O objetivo principal foi desenvolver uma interface moderna, atraente e, acima de tudo, com **altíssima performance**. 

Para garantir um carregamento quase instantâneo e uma excelente pontuação de SEO (Search Engine Optimization), o site foi construído utilizando **Astro**, focando em renderização estática rápida e entrega de zero JavaScript desnecessário para o cliente. As imagens foram devidamente otimizadas e a interface é totalmente responsiva.

* **Acesso Online:** [(https://calvele.vercel.app)]

## 🚀 Tecnologias Utilizadas
* **Astro** - Framework web moderno focado em velocidade e arquitetura baseada em "Ilhas" (Islands Architecture).
* **Tailwind CSS** - Framework de CSS utilitário para estilização rápida, responsiva e com um tamanho de arquivo final (bundle) mínimo.
* **TypeScript** - Para tipagem segura e melhor experiência de desenvolvimento.
* **Formato WebP** - Uso de imagens de nova geração para otimização de banda e tempo de carregamento.

## 🛠️ Funcionalidades
* **Apresentação do Estabelecimento:** Seção "Sobre" (`AboutSection`) para contar a história e os diferenciais.
* **Cardápio Digital Dinâmico:** Exibição do menu de produtos (`MenuSection` e `BurgerCard`) populados a partir de uma base de dados local (`menu.ts`).
* **Otimização de Imagens Automática:** As fotos dos produtos (como *Bacannaiser*, *Penosa Sedutora*, *Orgasmo*, etc.) utilizam o ecossistema do Astro para renderização otimizada.
* **Design 100% Responsivo:** O layout se adapta perfeitamente do celular a telas *ultrawide*.

## ⚙️ Arquitetura e Estrutura de Pastas
O projeto segue as convenções e boas práticas do ecossistema Astro:

* `/src/pages/`: Rotas do site (`index.astro`, `404.astro`).
* `/src/layouts/`: Estrutura base da página em HTML (`MainLayout.astro`) com meta-tags comuns.
* `/src/components/`: Componentes modulares (`Header.astro`, `BurgerCard.astro`, `AboutSection.astro`).
* `/src/data/`: Diretório contendo os dados estáticos do cardápio (`menu.ts`).
* `/src/assets/`: Arquivos de mídia e imagens otimizadas em `.webp`.
* `/src/styles/`: Configuração de estilos globais do Tailwind (`global.css`).
