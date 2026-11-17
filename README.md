# Gesso Feito — site Vite

Conversão fiel do arquivo HTML original para **Vite + HTML/CSS/JavaScript** (sem alteração do design).

## Iniciar

```bash
npm install
npm run dev
```

Abra o endereço local mostrado no terminal (normalmente http://localhost:5173).

No PowerShell do Windows, se a execução de `npm.ps1` estiver bloqueada, use:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra o endereço do Vite para visualizar o site. O Vite serve `public/assets/` em `/assets/`, que é o caminho usado pelo HTML. O Go Live serve a pasta do projeto diretamente, onde essas imagens estão em `/public/assets/`.

## Publicar

```bash
npm run build
```

Publique o diretório `dist/` em Vercel ou outro host estático (preset Vite, comando `npm run build`, saída `dist`).

## Organização

- `index.html` — estrutura original do site, com o mesmo texto e seções.
- `src/style.css` — CSS original e responsividade, sem reformulação.
- `src/main.js` — menu mobile, FAQ, reveal no scroll e formulário WhatsApp.
- `public/assets/` — imagens PNG/JPEG originais extraídas sem recompressão.

## Personalizar contatos

Edite os links de WhatsApp e e-mail e a cidade no rodapé de `index.html`. O formulário usa o mesmo link de WhatsApp do rodapé.

O Google Fonts é carregado online, como no HTML original. As imagens da página ficam locais e o projeto não precisa de React.
