# Luciano Guerra Site

Site institucional estatico do Dr. Luciano Guerra, preparado para versionamento no GitHub e deploy em hospedagem estatica.

## Stack

- HTML5
- CSS3
- JavaScript vanilla
- Assets estaticos locais em `assets/`
- Estrutura visual exportada de Elementor

## Requisitos

- Nao ha dependencias de projeto para instalar
- Para rodar localmente, use um servidor estatico
- Opcional: Python 3 ou Node.js para servir os arquivos localmente

## Estrutura

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy-pages.yml
|-- assets/
|   |-- js/
|   |-- media/
|   |-- styles/
|   `-- vendor/
|-- .gitignore
|-- .nojekyll
|-- index.html
`-- README.md
```

## Como rodar localmente

Opcao com Python:

```powershell
python -m http.server 4173
```

Depois abra `http://localhost:4173`.

Opcao com Node.js, sem instalar nada no projeto:

```powershell
npx serve .
```

## Build

Este projeto nao possui etapa de build. O deploy publica os arquivos estaticos exatamente como estao nesta pasta.

## Publicacao

### GitHub Pages

Esta pasta ja inclui workflow em `.github/workflows/deploy-pages.yml`.

1. Crie um repositorio no GitHub.
2. Envie esta pasta como conteudo do repositorio.
3. No GitHub, abra `Settings > Pages`.
4. Em `Source`, selecione `GitHub Actions`.
5. O workflow publicara automaticamente o site a cada push na branch principal.

### Vercel ou Netlify

Como o projeto e 100% estatico, tambem pode ser publicado apontando a raiz do repositorio como pasta publica, sem comando de build.

- Build command: nenhum
- Output directory: `.`

## Observacoes de producao

- Os caminhos de fontes locais foram corrigidos para nao depender da estrutura original do WordPress.
- Arquivos de debug e artefatos temporarios foram removidos.
- Nao foram encontrados arquivos `.env` nem segredos de projeto nesta exportacao.
