<h1 align="center">𝕙𝕖𝕕𝕘𝕖-𝕗𝕦𝕟𝕕</h1>

> Full stack web application for hedge fund with [React](https://legacy.reactjs.org/) frontend and [Django rest framework](https://www.django-rest-framework.org/) under the hood.

## Screenshots

## Demo

https://hedge-fund.netlify.app/

## Start

**_Clone_**

```bash
git clone https://github.com/GVatest/hedge-fund
cd hedge-fund
```

### Backend

**_Install_**

Build docker image

```bash
docker build -t [name] .
```

**or**

Install manually

```bash
pip install -r requirements.txt
```

**_Start_**

Create database

```bash
python manage.py migrate
```

Enable debug mode

```bash
export DJANGO_DEBUG=True
```

Start server

```bash
python manage.py runserver
```

### Frontend

**_Install_**

```bash
npm install
# or
yarn install
```

**_Start_**

```bash
npm run dev
# or
yarn dev
```

## About

- As data base `sqlite` was chosen, since it is quite easy to work with, and there were no plans for a large load on the project, so choosing any other, more advanced database, for example `postgresql`, didn't make sense.

- Authorization is implemented using `JWT` tokens, this is a convenient, safe and universal solution.

- The idea of ​​`Feature-Sliced ​​Design` is the basis for the architecture of the application frontend. The state manager is `Redux Toolkit` in conjunction with `RTK Query`. `Vite` is responsible for build and project workflow.

## Stack

### Frontend

<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"></img></a>
<a href="https://reactjs.org/)"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img></a>
<a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"></img></a>

### Backend

<a href="https://www.django-rest-framework.org/"><img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gra"></img></a>

## _Additional_

This is my independently developed "turnkey" freelance project for Russian hedge fund. I wasn't involved in the project's further development.

## Credits

Contributors:

- 👤 **Vasiliy Ganja**
  - `Github`: [@Gvatest](https://github.com/gvatest)

## License

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
