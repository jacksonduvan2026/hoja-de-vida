
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import TarjetaEstudio from "../components/TarjetaEstudio";

const Estudios = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >

      {/* ENCABEZADO */}
      <View style={estilos.encabezado}>

        <Ionicons
          name="school-outline"
          size={90}
          color="#2563eb"
        />

        <Text style={estilos.nombre}>
          Jackson Duván Ramos Rodríguez
        </Text>

        <Text style={estilos.subtitulo}>
          Mi Formación Académica
        </Text>

        <Text style={estilos.descripcion}>
          Bachiller y Técnico en Análisis y Desarrollo
          de Software. Actualmente soy aprendiz del
          SENA, cursando el Tecnólogo en Análisis
          y Desarrollo de Software (ADSO).
        </Text>

      </View>

      {/* ESTUDIOS */}
      <View style={estilos.seccion}>

        <TarjetaEstudio
          titulo="Bachiller Académico"
          institucion="Colegio Ofelia Uribe de Acosta - Bogotá"
          anio={2026}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Técnico en Análisis y Desarrollo de Software"
          institucion="Colegio Ofelia Uribe de Acosta - Bogotá"
          anio={2026}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
          institucion="SENA - Bogotá D.C."
          anio={2026}
          enCurso={true}
        />

      </View>

      {/* FORMACIÓN COMPLEMENTARIA */}
      <View style={estilos.seccionAdicional}>

        <Text style={estilos.tituloSeccion}>
          Conocimientos y Habilidades
        </Text>

        <Text style={estilos.texto}>
          Durante mi formación académica he adquirido
          conocimientos en programación, desarrollo
          de aplicaciones web, bases de datos y
          herramientas tecnológicas.
        </Text>

        <Text style={estilos.habilidad}>
          • HTML5, CSS3 y JavaScript
        </Text>

        <Text style={estilos.habilidad}>
          • React y React Native
        </Text>

        <Text style={estilos.habilidad}>
          • Python y FastAPI
        </Text>

        <Text style={estilos.habilidad}>
          • Node.js y Express
        </Text>

        <Text style={estilos.habilidad}>
          • MySQL y PostgreSQL
        </Text>

        <Text style={estilos.habilidad}>
          • MongoDB
        </Text>

        <Text style={estilos.habilidad}>
          • Git y GitHub
        </Text>

        <Text style={estilos.habilidad}>
          • Docker
        </Text>

      </View>

    </ScrollView>
  );
};

export default Estudios;

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
    lineHeight: 21,
  },

  seccion: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },

  seccionAdicional: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },

  tituloSeccion: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 10,
  },

  texto: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 22,
    marginBottom: 12,
  },

  habilidad: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 7,
  },

});
