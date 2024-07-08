# Cat Chat

Bienvenido a Chat de Gatos, una aplicación de chat exclusiva para amantes de los gatos. Aquí, los usuarios pueden registrarse con su correo electrónico, contraseña y nombre de usuario, y luego elegir entre cinco razas de gatos: Bombay, Tuxedo, Siames, Calico y Carey.

<div align="center">
  <video src="https://github.com/PauSanchezzz/CatChat/assets/122471751/c72860e3-fb27-4038-91a7-941cc3e3bf28" width="400" />
</div>

## Características clave

- **Registro de Usuarios**: Los usuarios pueden crear una cuenta proporcionando su correo electrónico, contraseña y nombre de usuario. Se verifica si ya existe un usuario con el mismo nombre de usuario o correo electrónico.
- **Inicio de Sesión**: Los usuarios registrados pueden iniciar sesión con su nombre de usuario y contraseña.
- **Salas de Chat por Raza**: Al acceder al chat, los usuarios ven una lista de salas de chat en la izquierda. Cada sala de chat se corresponde con una de las razas elegibles. Los usuarios solo pueden unirse a salas de chat de su misma raza.
- **Conversaciones en Tiempo Real**: En el panel derecho, los usuarios pueden escribir y enviar mensajes en la sala de chat seleccionada. Los mensajes son visibles para todos los usuarios de la misma raza en esa sala de chat.
  
## Tecnologías Utilizadas

- **Node.js**: Backend de la aplicación.
- **Tailwind CSS**: Diseño y estilos.
- **PostgreSQL**: Base de datos para almacenar la información de usuarios.
- **Socket.io**: Biblioteca para la comunicación en tiempo real entre el servidor y el cliente.

## Configuración

Sigue estos pasos para configurar y ejecutar la aplicación en tu máquina local:

1. Clona este repositorio en tu máquina local.

```bash
git clone https://github.com/PauSanchezzz/CatChat.git
```

2.Accede al directorio del proyecto.
```bash
cd CatChat
```

3. Instala las dependencias Node.js.
```bash
npm install
```

- Configura la base de datos PostgreSQL. Asegúrate de tener PostgreSQL instalado y configurado correctamente en tu sistema.
  
4. Inicia la aplicación.
```bash
npm start
```

![Imagen proyecto](/src/client/public/cat1.png)
![Imagen proyecto](/src/client/public/cat2.png)
![Imagen proyecto](/src/client/public/cat3.png)


