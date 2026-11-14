@'
# Hoja de Vida - App móvil con React Native y Expo

Aplicación móvil de Hoja de Vida con 4 pantallas navegables mediante una barra inferior con pestañas e íconos. Incluye componentes reutilizables (botones y tarjetas) con colores dinámicos que resaltan los estudios en curso.

**Autor:** jackson duvan ramos rodriguez
**Programa:** Análisis y Desarrollo de Software (ADSO) - SENA
**Instructor:** Jhonny Guerrero

## Pantallas

| Pantalla | Archivo | Descripción |
|---|---|---|
| Inicio | `src/app/index.tsx` | Datos personales, perfil y botones de contacto |
| Estudios | `src/app/estudios.tsx` | Formación académica, con el estudio en curso resaltado |
| Experiencia | `src/app/experiencia.tsx` | Experiencia laboral |
| Hobbies | `src/app/hobbies.tsx` | Intereses, con alerta de detalles al presionar |

## Componentes reutilizables

- `MiBoton.tsx`: botón con texto, ícono, color y acción por props.
- `TarjetaEstudio.tsx`: cambia de color y muestra una insignia morada si `enCurso` es `true`.
- `TarjetaExperiencia.tsx`: tarjeta de cargo, empresa, periodo y descripción.
- `TarjetaHobby.tsx`: tarjeta interactiva que muestra una alerta al presionarla.

## Librerías utilizadas

| Librería | Uso |
|---|---|
| `expo-router` | Navegación basada en archivos y pestañas |
| `react-native-safe-area-context` | Zonas seguras de la pantalla |
| `react-native-screens` | Pantallas nativas para mejor rendimiento |
| `expo-linking` | Manejo de enlaces |
| `expo-constants` | Constantes del sistema y de la app |
| `expo-status-bar` | Control de la barra de estado |
| `@expo/vector-icons` | Íconos (Ionicons) |

## Cómo ejecutar el proyecto

1. Instalar Node.js (versión LTS) y la app **Expo Go** en el celular.
2. Clonar el repositorio e instalar dependencias:

```bash
git clone https://github.com/jacksonduvan2026/hoja-de-vida.git
cd hoja-de-vida
npm install
```

3. Iniciar sesión en Expo (misma cuenta en el computador y en Expo Go):

```bash
npx expo login
```

4. Iniciar el servidor y escanear el QR con Expo Go:

```bash
npx expo start
```

Si el celular no conecta, usar `npx expo start --tunnel`.

## Estructura del proyecto