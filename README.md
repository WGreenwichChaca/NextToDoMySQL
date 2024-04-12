This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Configuración de conexión a la base de datos

Antes de ejecutar la aplicación, asegúrate de configurar correctamente la conexión a tu base de datos MySQL. Para hacerlo, sigue estos pasos:

1. Copia el archivo `mysql.js.example` y renómbralo a `mysql.js`.
2. Abre el archivo `mysql.js` en un editor de texto.
3. Reemplaza los valores de `host`, `user`, `password` y `database` con tus propias credenciales de MySQL.

```javascript
// mysql.js dentro de la carpeta libs
import mysql from 'serverless-mysql';

// Configura la conexión a tu base de datos MySQL
export const conn = mysql({
    config: {
        host: 'localhost', // Cambia esto al host de tu servidor MySQL
        user: 'tu_usuario_mysql', // Cambia esto a tu nombre de usuario de MySQL
        password: 'tu_contraseña_mysql', // Cambia esto a tu contraseña de MySQL
        port: 3306, // Puede que necesites cambiar el puerto si no es el predeterminado
        database: 'tu_base_de_datos' // Cambia esto a tu nombre de base de datos MySQL
    }
});

