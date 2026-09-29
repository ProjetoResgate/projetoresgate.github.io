# Projeto Resgate

Catálogo digital para divulgação das obras, partituras e fontes musicais mantidas pela organização [Projeto Resgate](https://github.com/ProjetoResgate).

## Site

O site está publicado em:

<https://projetoresgate.github.io/>

## Estrutura

| Arquivo | Função |
| --- | --- |
| `index.html` | Página do catálogo e visualizador de partituras |
| `style.css` | Identidade visual e layout responsivo |
| `script.js` | Seleção das obras e troca do PDF no visualizador |

Os PDFs e as imagens permanecem nos repositórios de cada obra. O site apenas apresenta os materiais e aponta para suas fontes originais.

## Adicionar uma obra

1. Crie ou publique o repositório da nova obra na organização `ProjetoResgate`.
2. Adicione um novo card de obra em `index.html`.
3. Inclua a obra no objeto `works` em `script.js`.
4. Informe no objeto o nome da obra, o subtítulo e a URL pública do PDF.
5. Faça o commit e envie as alterações para a branch `main`.

O GitHub Pages recompila o site automaticamente após cada publicação.

## Desenvolvimento local

Como o site é estático, basta abrir `index.html` em um navegador. Para testar o comportamento de PDFs e links com mais fidelidade, pode-se usar um servidor local, por exemplo:

```bash
python3 -m http.server
```

Depois, acesse <http://localhost:8000>.

## Créditos

Este catálogo foi criado para apoiar a preservação e a execução musical. Os créditos, autores e licenças de cada obra devem ser consultados no respectivo repositório.
