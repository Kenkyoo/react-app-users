React App Users

Este es un proyecto sencillo hecho con React, Next.js y Vercel, que muestra un carrusel de usuarios obtenidos desde la API de randomuser.me. Los usuarios se presentan con su nombre, edad, teléfono, correo electrónico y ubicación.
Demo

Puedes ver el demo en:
Ver Demo en Vercel
Tecnologías

    React: Librería para construir la interfaz de usuario.
    Next.js: Framework para React que permite renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
    Swiper: Biblioteca para crear carruseles (slides).
    TailwindCSS: Framework de diseño para estilos rápidos y responsivos.
    DaisyUI: Componentes de interfaz de usuario sobre TailwindCSS.
    TypeScript: Lenguaje que agrega tipos estáticos a JavaScript.

Instalación

    Clona el repositorio:

git clone https://github.com/Kenkyoo/react-app-users.git

    Instala las dependencias:

cd react-app-users
npm install

    Inicia el servidor de desarrollo:

npm run dev

    Accede a http://localhost:3000 en tu navegador.

Descripción del Proyecto

Este proyecto utiliza la API https://randomuser.me/api/ para obtener una lista de usuarios aleatorios, que se muestran en un carrusel usando la librería Swiper.

El componente principal hace una solicitud de datos al cargar, y al recibir los datos, muestra cada usuario en un SwiperSlide dentro de un componente Card.
Estructura de Archivos

    pages/index.tsx: Componente principal que renderiza el carrusel de usuarios.
    components/card.tsx: Componente que representa cada usuario en el carrusel.

Dependencias

"dependencies": {
  "next": "14.2.14",
  "react": "^18",
  "react-dom": "^18",
  "swiper": "^11.1.14"
},
"devDependencies": {
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "daisyui": "^4.12.12",
  "eslint": "^8",
  "eslint-config-next": "14.2.14",
  "postcss": "^8",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}

Licencia

Este proyecto está bajo la licencia MIT.
