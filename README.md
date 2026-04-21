# Fast Menu

Aplicativo mobile de cardapio e pedidos desenvolvido com Expo + React Native.

O projeto simula um fluxo completo de fast-food:
- listagem e filtro de produtos,
- detalhes do item,
- carrinho com checkout,
- pagamento via Pix,
- historico de pedidos,
- dados de perfil.

## Tecnologias utilizadas

Principais tecnologias e bibliotecas:
- `Expo` (SDK 54)
- `React` 19
- `React Native` 0.81
- `Expo Router` (rotas baseadas em arquivos)
- `TypeScript`
- `Context API` (estado global de carrinho, pedidos e usuario)
- `ESLint` (qualidade de codigo)

Dependencias visuais relevantes:
- `@expo/vector-icons`
- `react-native-reanimated`
- `react-native-gesture-handler`

## Estrutura do projeto

Organizacao principal das pastas:

```text
fast-menu/
|- app/                         # Rotas e telas (Expo Router)
|  |- _layout.tsx
|  |- index.tsx
|  `- (tabs)/
|     |- Home/
|     |- Cart/
|     |- Orders/
|     `- Profile/
|- assets/
|  |- icons/                    # Icones da navegacao e UI
|  `- images/                   # Imagens de produtos e recursos visuais
|- src/
|  |- components/               # Componentes reutilizaveis
|  |- context/                  # Providers e hooks globais
|  |- data/                     # Dados estaticos (ex.: products)
|  |- styles/                   # Estilos compartilhados
|  `- utils.ts                  # Utilitarios gerais
|- app.json
|- package.json
`- tsconfig.json
```

### Detalhe rapido de `src/`

- `src/components/`: UI modular (cards, botoes, inputs, listas, etc.)
- `src/context/`: `CartContext`, `OrdersContext` e `UserContext`
- `src/data/`: catalogo de produtos
- `src/styles/`: tema global e estilos de tela

## Como executar o projeto

### 1) Instalar dependencias

```bash
npm install
```

### 2) Rodar em modo desenvolvimento

```bash
npm run start
```

No terminal do Expo, voce pode abrir no:
- Android
- iOS
- Web
- Expo Go

## Scripts disponiveis

No `package.json`, os scripts principais sao:

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
```

## Arquitetura (visao geral)

- Rotas: definidas em `app/` com Expo Router.
- Estado global: via Context API em `src/context/`.
- Dados de produtos: centralizados em `src/data/products.ts`.
- Componentizacao: telas montadas com componentes pequenos e reutilizaveis.

## Boas praticas para contribuicao

- Mantenha componentes reutilizaveis em `src/components/`.
- Centralize novos dados em `src/data/`.
- Evite logica de negocio espalhada entre telas; prefira `context`/helpers.
- Rode o lint antes de abrir PR:

```bash
npm run lint
```
