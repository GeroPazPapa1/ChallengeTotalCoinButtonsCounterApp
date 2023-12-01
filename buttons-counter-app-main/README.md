# Buttons Counter App

### With this app you can create buttons, count your button´s clicks and delete them.

Open a terminal on main folders (client and server) and run the following command to install all dependencies

    npm install

 If you dont want to create a .env file for the PORT, just change the line 2 in index.js (server) with the line code below.

    const PORT = YOUR_PORT

In client go to App.jsx and change the port with yours on the line 5

    axios.defaults.baseURL = "http://localhost:YOUR_PORT/buttons/"

- Front End:

    - ReactJS ( Vite )
    - Axios

- Back End:

    - Node.js
    - Express.js
    - Cors
    - Dotenv
    - Body-parser



ESPAÑOL:

### Con esta aplicación puedes crear botones, contar los clics de tus botones y eliminarlos.

Abra una terminal en las carpetas principales (cliente y servidor) y ejecute el siguiente comando para instalar todas las dependencias

     npm install

  Si no desea crear un archivo .env para el PUERTO, simplemente cambie la línea 2 en index.js (servidor) con el código de línea a continuación.

     const PORT = YOUR_PORT

En el cliente, vaya a App.jsx y cambie el puerto por el suyo en la línea 5.

     axios.defaults.baseURL = "http://localhost:YOUR_PORT/buttons/"