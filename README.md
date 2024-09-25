![Header](./docs/der-logo.png)

# Datos en fuga

![Node Version](https://img.shields.io/badge/node-v18-red)
![License](https://img.shields.io/github/license/DemocraciaEnRed/datosenfuga-next)
![Docker](https://img.shields.io/badge/docker-ready-blue)

Web estática del proyecto [Datos en Fuga](https://datosenfuga.org)

> _Queremos que el Estado asegure estándares de ciberseguridad y que atienda a las alarmas que suenan por todos lados. Queremos que el Estado deje de perseguir penalmente a quienes identifican, denuncian y reportan vulnerabilidades informáticas._

## ⚒️ Guía de instalación y ejecución

Hay 2 maneras de preparar el entorno para desarrollo. A través de Docker, o configurando el entorno de Node

### Docker

> #### ⚠️ Prerequisito
>
> Este entorno virtual requiere de tener [Docker](https://docs.docker.com/) instalado

#### Instalación

Abrí una terminal del sistema en el directorio raiz del proyecto y construí la imagen de docker

```bash
$ docker compose build
```

#### Ejecución

Abrí una terminal del sistema en el directorio raiz del proyecto y ejecutá la imagen en un contenedor

```bash
$ docker compose up
```

### Entorno de Node

> #### ⚠️ Prerequisitos
>
> Este entorno virtual requiere de:
>
> - [Node.js v16](https://nodejs.org/en/blog/release/v16/).

#### Instalación y Ejecución

Abrí una terminal del sistema en el directorio raiz del proyecto y ejecutá el proyecto.

```bash
$ npm install
$ npm run dev
```

## 👷‍♀️ Cómo colaborar

Las contribuciones siempre son bienvenidas. Si te interesa contribuir a este proyecto y no estás seguro de por dónde empezar, preparamos esta [guía de colaboración](https://github.com/DemocraciaEnRed/.github/blob/main/docs/CONTRIBUTING.md).

## ⚖️ Licencia

El software se encuentra licensiado bajo [GPL-v3](./LICENSE). Creemos en la importancia del código abierto para la transformación social y fomentamos que la comunidad aporte de manera activa.

---

⌨️ con ❤️ por [DER](https://github.com/DemocraciaEnRed/)
