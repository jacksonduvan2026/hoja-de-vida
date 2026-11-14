
import { Ionicons } from "@expo/vector-icons";
import {
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
          descripcion="Disfruto jugar videojuegos en PC, especialmente títulos de mundo abierto, aventura y multijugador como GTA V, Fortnite y Minecraft."
        />

        {/* PROGRAMACIÓN */}
        <TarjetaHobby
          nombre="Programación"
          icono="code-slash-outline"
          descripcion="Me gusta desarrollar aplicaciones web, experimentar con nuevas tecnologías y mejorar mis habilidades de programación utilizando JavaScript, React y Python."
        />

        {/* DESARROLLO DE VIDEOJUEGOS */}
        <TarjetaHobby
          nombre="Desarrollo de Videojuegos"
          icono="cube-outline"
          descripcion="Me interesa crear videojuegos en Roblox Studio, diseñando escenarios, vehículos y sistemas interactivos. Actualmente desarrollo un proyecto inspirado en TransMilenio de Bogotá."
        />

        {/* TECNOLOGÍA */}
        <TarjetaHobby
          nombre="Tecnología e Innovación"
          icono="hardware-chip-outline"
          descripcion="Me gusta conocer nuevas herramientas tecnológicas, aprender sobre inteligencia artificial y explorar soluciones que permitan crear proyectos innovadores."
        />

        {/* MÚSICA */}
        <TarjetaHobby
          nombre="Música"
          icono="musical-notes-outline"
          descripcion="Disfruto escuchar música en mis tiempos libres, descubrir nuevas canciones y relajarme mientras realizo mis actividades."
        />

        {/* FÚTBOL */}
        <TarjetaHobby
          nombre="Fútbol"
          icono="football-outline"
          descripcion="Me gusta el fútbol como actividad recreativa y compartir momentos con amigos."
        />

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

});
