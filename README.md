# Mente Aberta & C.I-TEC

## Descrição
O **Mente Aberta & C.I-TEC** é uma plataforma web acessível desenvolvida para a Global Solution 2026 (tema CitizenTech), criada para facilitar o acesso anônimo e gratuito de cidadãos a cursos profissionalizantes, serviços públicos (CRAS, UBS, PAT), vagas de emprego e benefícios sociais.

O projeto resolve a barreira da desinformação, da linguagem burocrática e da falta de conectividade estável ao combinar um portal leve e acessível (**Mente Aberta**) com um modelo comunitário de distribuição local sem internet (**C.I-TEC**), no qual escolas, bibliotecas e associações sincronizam pacotes de conteúdo para acesso via rede Wi-Fi local.

## Tecnologias Utilizadas
- **HTML5:** Estruturação semântica das páginas e recursos de acessibilidade (`skip-link`, atributos ARIA e rótulos de formulário).
- **CSS3:** Estilização externa (`style.css`), design responsivo *mobile-first* com Media Queries, paleta de alto contraste e indicadores de foco para navegação por teclado.
- **JavaScript (ES6+):** Manipulação dinâmica do DOM, menu hambúrguer acessível, busca em tempo real com normalização de acentos, filtros combinados, checklist interativo de documentos e validação de formulário.
- **Git e GitHub:** Controle de versão distribuído e colaboração entre os integrantes da equipe.

## Estrutura de Pastas
```text
mente-aberta-citec/
├── index.html              # Página inicial com apresentação da solução e acesso rápido
├── oportunidades.html      # Busca em tempo real e filtros por categoria e perfil
├── como-acessar.html       # Passo a passo simplificado e checklist interativo de documentos
├── modo-offline.html       # Módulo C.I-TEC com pontos de acesso comunitários e pacotes offline
├── sobre.html              # Contextualização do problema, solução e conexão com os ODS da ONU
├── faq.html                # Perguntas frequentes em linguagem simples
├── integrantes.html        # Identificação, fotos e links da equipe
├── contato.html            # Formulário de contato e sugestões com validação em JavaScript
├── README.md               # Documentação técnica e guia do repositório
├── css/
│   └── style.css           # Folha de estilos única e responsiva (sem CSS inline)
├── js/
│   ├── dados.js            # Base de dados simulada das oportunidades e documentos
│   ├── main.js             # Controle do menu hambúrguer e navegação por teclado
│   ├── oportunidades.js    # Lógica de busca instantânea e filtros
│   ├── checklist.js        # Geração dinâmica de passos e contagem de documentos marcados
│   └── contato.js          # Validação dos campos e feedback visual do formulário
└── assets/
    └── img/                # Fotos dos integrantes e capturas de tela do projeto


## Declaração de Uso de IA

Em conformidade com as diretrizes da Global Solution 2026, declaramos que ferramentas de Inteligência Artificial generativa foram utilizadas exclusivamente como apoio durante o desenvolvimento deste projeto:

- **Ferramenta utilizada:** Google Gemini
- **Para quê foi utilizada:** Apoio na pesquisa de critérios de acessibilidade (WCAG, contraste e navegação por teclado), revisão da estrutura semântica em HTML5, explicação de erros de caminho/nomenclatura no JavaScript e elaboração de textos fictícios de serviços e cursos para demonstração do protótipo.
- **Revisão da equipe:** Todo o código, estilização e funcionamento das páginas foram revisados, compreendidos, testados e adaptados pelos integrantes do grupo.