# CONVIVA+

## Missão e Propósito

O **CONVIVA+** é uma plataforma de educação socioemocional desenvolvida para transformar a forma como escolas, professores, alunos e famílias trabalham o desenvolvimento de competências socioemocionais. Nossa missão é democratizar o acesso a conteúdos educacionais de qualidade que promovam o autoconhecimento, a empatia, a gestão emocional e as habilidades sociais.

### Por que o CONVIVA+?

A educação socioemocional é fundamental para o desenvolvimento integral dos estudantes. Pesquisas mostram que alunos com competências socioemocionais bem desenvolvidas apresentam melhor desempenho acadêmico, relacionamentos mais saudáveis e maior bem-estar. O CONVIVA+ oferece:

- **Conteúdo estruturado** em módulos progressivos de aprendizado
- **Materiais diversificados** incluindo apostilas, vídeos, revistas digitais e links de apoio
- **Acesso universal** através de uma plataforma responsiva para qualquer dispositivo
- **Gestão completa** para administradores acompanharem o engajamento e progresso

---

## Funcionalidades por Página

### Páginas Públicas

#### Landing Page (`/`)
Página inicial que apresenta a plataforma CONVIVA+ para visitantes. Contém:
- Hero section com chamada para ação
- Apresentação dos módulos disponíveis
- Destaques das funcionalidades da plataforma
- Depoimentos de usuários
- Formulário de contato e informações

#### Login (`/login`)
Página de autenticação para acesso à plataforma. Suporta três tipos de usuários:
- **Alunos**: Acesso aos conteúdos e acompanhamento de progresso pessoal
- **Professores**: Acesso aos materiais e ferramentas de apoio pedagógico
- **Instrutores/Administradores**: Acesso completo incluindo painel administrativo

---

### Dashboard do Usuário

#### Página Inicial (`/dashboard`)
Painel personalizado de acordo com o perfil do usuário:
- Card de boas-vindas com nome e função
- Visão geral do progresso nos módulos
- Atividades recentes na plataforma
- Acesso rápido às principais seções

#### Módulos (`/dashboard/modulos`)
Lista todos os módulos de competências socioemocionais disponíveis:
- **Autoconhecimento**: Desenvolvimento da consciência sobre emoções e comportamentos
- **Empatia e Relacionamentos**: Conexão significativa com outras pessoas
- **Tomada de Decisão**: Habilidades para escolhas conscientes
- **Gestão de Emoções**: Técnicas para lidar com emoções
- **Habilidades Sociais**: Comunicação e interação social

Cada módulo pode ser acessado individualmente para ver todos os conteúdos relacionados.

#### Detalhe do Módulo (`/dashboard/modulos/[id]`)
Página individual de cada módulo contendo:
- Descrição completa do módulo
- Abas organizadas por tipo de conteúdo (Apostilas, Vídeos, Revistas, Links)
- Indicador de progresso do usuário
- Lista de todos os materiais disponíveis

#### Apostilas (`/dashboard/apostilas`)
Biblioteca de materiais em PDF:
- Busca por título ou descrição
- Filtro por módulo
- Visualização prévia do PDF
- Download para estudo offline
- Contador de visualizações e downloads

#### Vídeos (`/dashboard/videos`)
Galeria de videoaulas e conteúdos audiovisuais:
- Player integrado (YouTube/Vimeo)
- Organização por módulo
- Busca e filtros
- Duração e informações do conteúdo

#### Revistas Digitais (`/dashboard/revistas`)
Publicações especiais da revista CONVIVA+:
- Edições temáticas
- Visualizador de PDF integrado
- Conteúdo complementar aos módulos

#### Links de Apoio (`/dashboard/links`)
Recursos externos selecionados:
- Sites e ferramentas complementares
- Organização por módulo/tema
- Abertura em nova aba
- Descrições explicativas

#### Gerador de QR Code (`/dashboard/qrcode`)
Ferramenta para integração com materiais impressos:
- Geração de QR codes para qualquer conteúdo
- Diferentes tamanhos de exportação
- Cópia de URL para compartilhamento
- Ideal para materiais físicos que direcionam ao digital

#### Perfil (`/dashboard/perfil`)
Configurações e informações do usuário:
- Visualização e edição de dados pessoais
- Alteração de senha
- Preferências de notificação
- Histórico de acesso

---

### Painel Administrativo

> Acesso exclusivo para usuários com perfil de Instrutor/Administrador

#### Dashboard Admin (`/admin`)
Visão geral da plataforma:
- Métricas principais (usuários, visualizações, downloads)
- Gráficos de acesso e engajamento
- Atividades recentes
- Alertas e notificações do sistema

#### Gestão de Usuários (`/admin/usuarios`)
Gerenciamento completo de usuários:
- Lista com busca e filtros (por tipo, status)
- Cadastro de novos usuários
- Edição de informações e permissões
- Ativação/desativação de contas
- Visualização de dados de acesso

#### Gestão de Conteúdos (`/admin/conteudos`)
Administração de todos os materiais:
- Lista unificada de todos os tipos de conteúdo
- Filtros por tipo (apostila, vídeo, revista, link) e módulo
- Cadastro de novos conteúdos
- Edição e exclusão
- Métricas de visualização e download por item

#### Gestão de Módulos (`/admin/modulos`)
Organização dos módulos de aprendizado:
- Reordenação por arrastar e soltar
- Criação de novos módulos
- Personalização de ícone e cor
- Ativação/desativação de módulos
- Visualização de conteúdos por módulo

#### Relatórios (`/admin/relatorios`)
Análises e métricas da plataforma:
- Indicadores-chave de desempenho (KPIs)
- Gráfico de acessos mensais
- Ranking de conteúdos mais acessados
- Distribuição por tipo de conteúdo
- Distribuição por tipo de usuário
- Engajamento por módulo
- Exportação de relatórios

---

## Extensibilidade Futura

O CONVIVA+ foi arquitetado para crescer e se adaptar às necessidades da educação socioemocional. Abaixo estão as áreas planejadas para expansão:

### Funcionalidades de Aprendizado

- **Sistema de Trilhas**: Sequências personalizadas de conteúdos com pré-requisitos e desbloqueio progressivo
- **Avaliações e Quizzes**: Testes de conhecimento integrados aos módulos com feedback imediato
- **Certificados**: Emissão automática de certificados de conclusão de módulos e trilhas
- **Gamificação**: Sistema de pontos, badges e rankings para aumentar o engajamento

### Colaboração e Comunidade

- **Fóruns de Discussão**: Espaços para troca de experiências entre professores e alunos
- **Grupos de Estudo**: Criação de turmas virtuais com conteúdos compartilhados
- **Comentários e Avaliações**: Feedback dos usuários sobre os conteúdos

### Integrações

- **Backend Real**: Conexão com API REST ou GraphQL para persistência de dados
- **Autenticação OAuth**: Login com Google, Microsoft e outros provedores
- **LTI (Learning Tools Interoperability)**: Integração com sistemas de gestão escolar
- **Notificações Push**: Alertas sobre novos conteúdos e atividades

### Analytics Avançados

- **Dashboard de Progresso para Professores**: Acompanhamento detalhado do desenvolvimento dos alunos
- **Relatórios por Escola/Turma**: Métricas agregadas para gestores educacionais
- **Análise de Engajamento**: Identificação de padrões de uso e oportunidades de melhoria
- **Exportação para BI**: Integração com ferramentas de Business Intelligence

### Acessibilidade e Inclusão

- **Modo Alto Contraste**: Tema adaptado para usuários com baixa visão
- **Suporte a Leitores de Tela**: Navegação completa via tecnologias assistivas
- **Legendas em Vídeos**: Transcrição automática e legendas em Libras
- **Conteúdo em Múltiplos Idiomas**: Internacionalização da plataforma

### Mobile e Offline

- **Aplicativo Mobile Nativo**: Versões para iOS e Android
- **Modo Offline**: Download de conteúdos para acesso sem internet
- **Sincronização**: Progresso sincronizado entre dispositivos

---

## Contribuindo

O CONVIVA+ é um projeto em constante evolução. Contribuições são bem-vindas para:

- Novos conteúdos socioemocionais
- Melhorias de acessibilidade
- Correções de bugs
- Novas funcionalidades

---

*CONVIVA+ - Transformando a educação socioemocional, uma competência de cada vez.*
