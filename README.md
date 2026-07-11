# Sahil-coder50.github.io

My personal developer portfolio — built as a static site to showcase my backend work, open-source packages, and writing.

**Live site:** [Sahil-coder50.github.io](https://Sahil-coder50.github.io)

## About

I'm a Backend Developer working with Python, Django, and Django REST Framework. This site is where I collect the things that don't fit on a resume: the actual packages I've published, the project templates I maintain, and write-ups on backend architecture decisions.

## What's on it

- **About** — a short summary of my background and core stack
- **Open source** — `auth-drf` and `image-upload`, two packages I've published to PyPI, plus `drf-project-template` and `fastapi-project-template`, two cookiecutter-style project scaffolds
- **Writing** — technical posts on backend Python, Django, and FastAPI
- **Contact** — direct links to email, GitHub, and LinkedIn

## Tech

Plain HTML, CSS, and Google Fonts (Fraunces, Inter, JetBrains Mono). No frameworks or build step — kept intentionally simple since the site itself isn't the engineering showcase; the linked projects are.

## Project structure

```
.
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── resume/
│       └── Sahil_Sheoran_Resume.pdf
└── README.md
```

## Running locally

No build step required — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Hosted on GitHub Pages, deployed from the `main` branch root.

## Contact

- Email: sahilsheoran24@gmail.com
- GitHub: [Sahil-coder50](https://github.com/Sahil-coder50)
- LinkedIn: [sahil-sheoran-py](https://linkedin.com/in/sahil-sheoran-py)
