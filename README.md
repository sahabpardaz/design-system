<h1 align="center">Sahab Design System</h1>

Sahab Design System provides React UI components based on [MUI](https://mui.com).

## 📦 Install

```bash
npm install @my-sahab/design-system
```

```bash
yarn add @my-sahab/design-system
```

## 🔨 Usage

```jsx
import { createTheme, ThemeProvider, Button } from '@my-sahab/design-system';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Button type="primary">PRESS ME</Button>
  </ThemeProvider>
);
```

## ⌨️ Development

This repo powered by [Nx](https://nx.dev). You can use Nx commands to work with this repo. We recommend using [Nx vscode extention](https://nx.dev/using-nx/console#nx-console-for-vscode) for better experience.
To run all storybooks locally:

```bash
$ git clone git@github.com:sahabpardaz/design-system.git
$ cd desing-system
$ yarn install
$ yarn storybook
```

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

We welcome contributions to Sahab design system! Development of desing system happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements.

📥 [Pull requests](https://github.com/sahabpardaz/design-system/pulls) and 🌟 Stars are always welcome.
