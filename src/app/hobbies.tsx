
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import TarjetaHobby from "../components/TarjetaHobby";

const Hobbies = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >

      {/* ENCABEZADO */}
      <View style={estilos.encabezado}>

        <Ionicons
          name="heart"
          size={90}
          color="#2563eb"
        />

        <Text style={estilos.nombre}>
          Jackson Duván Ramos Rodríguez
        </Text>

        <Text style={estilos.subtitulo}>
          Mis Intereses y Hobbies
        </Text>

        <Text style={estilos.descripcion}>
          Me gusta explorar nuevas tecnologías,
          desarrollar proyectos de programación,
          disfrutar de los videojuegos y aprender
          nuevas habilidades.
        </Text>

      </View>

      {/* LISTA DE HOBBIES */}
      <View style={estilos.seccion}>

        {/* VIDEOJUEGOS */}
        <TarjetaHobby
          nombre="Videojuegos"
          icono="game-controller-outline"
          descripcion="Disfruto jugar videojuegos en PC, especialmente títulos de mundo abierto, aventura y multijugador."
          onPress={() =>
            Alert.alert(
              "Videojuegos",
              "Me gusta jugar GTA V, Fortnite y Minecraft. Disfruto explorar mundos abiertos, participar en partidas multijugador y descubrir nuevas experiencias dentro de los videojuegos."
            )
          }
        />

        {/* PROGRAMACIÓN */}
        <TarjetaHobby
          nombre="Programación"
          icono="code-slash-outline"
          descripcion="Me gusta desarrollar aplicaciones web, experimentar con tecnologías y mejorar mis habilidades."
          onPress={() =>
            Alert.alert(
              "Programación",
              "Me gusta programar con JavaScript y Python. He desarrollado proyectos como Eco-TRACE y BDjackson utilizando React, FastAPI, Express y bases de datos. Me interesa especialmente el desarrollo frontend y backend."
            )
          }
        />

        {/* DESARROLLO DE VIDEOJUEGOS */}
        <TarjetaHobby
          nombre="Desarrollo de Videojuegos"
          icono="cube-outline"
          descripcion="Me interesa crear videojuegos, escenarios y sistemas interactivos en Roblox Studio."
          onPress={() =>
            Alert.alert(
              "Desarrollo de Videojuegos",
              "Uno de mis proyectos personales es crear un videojuego de TransMilenio Bogotá en Roblox Studio. Me gusta construir estaciones, diseñar buses articulados y programar sistemas para conductores y pasajeros."
            )
          }
        />

        {/* TECNOLOGÍA */}
        <TarjetaHobby
          nombre="Tecnología e Innovación"
          icono="hardware-chip-outline"
          descripcion="Me gusta conocer herramientas tecnológicas y explorar soluciones innovadoras."
          onPress={() =>
            Alert.alert(
              "Tecnología e Innovación",
              "Me interesa aprender sobre nuevas herramientas de desarrollo, inteligencia artificial y automatización. También he trabajado en un proyecto con Arduino para controlar un carro robot mediante sensores."
            )
          }
        />

        {/* MÚSICA */}
        <TarjetaHobby
          nombre="Música"
          icono="musical-notes-outline"
          descripcion="Disfruto escuchar música y descubrir nuevas canciones."
          onPress={() =>
            Alert.alert(
              "Música",
              "Me gusta escuchar música durante mis tiempos libres. Es una actividad que disfruto para relajarme, descansar y acompañar algunas de mis actividades diarias."
            )
          }
        />

        {/* FÚTBOL */}
        <TarjetaHobby
          nombre="Fútbol"
          icono="football-outline"
          descripcion="Me gusta el fútbol como actividad recreativa."
          onPress={() =>
            Alert.alert(
              "Fútbol",
              "Me gusta el fútbol como actividad recreativa. Es una buena oportunidad para compartir con amigos, divertirme y desarrollar habilidades como el trabajo en equipo."
            )
          }
        />

      </View>

      {/* MENSAJE INFORMATIVO */}
      <View style={estilos.mensajeContenedor}>

        <Ionicons
          name="information-circle-outline"
          size={20}
          color="#2563eb"
        />

        <Text style={estilos.mensaje}>
          Presiona cualquier tarjeta para conocer
          más detalles sobre mis hobbies.
        </Text>

      </View>

    </ScrollView>
  );
};

export default Hobbies;

// ESTILOS
const estilos = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  contenido: {
    padding: 20,
    paddingBottom: 40,
  },

  encabezado: {
    alignItems: "center",
    marginBottom: 20,
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 8,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
    marginTop: 6,
  },

  descripcion: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },

  seccion: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },

  mensajeContenedor: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eff6ff",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },

  mensaje: {
    flex: 1,
    fontSize: 13,
    color: "#475569",
    marginLeft: 10,
    lineHeight: 19,
  },

});
