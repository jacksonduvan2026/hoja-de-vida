
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >

      {/* ENCABEZADO */}
      <View style={estilos.encabezado}>

        <Ionicons
          name="briefcase-outline"
          size={90}
          color="#2563eb"
        />

        <Text style={estilos.nombre}>
          Jackson Duván Ramos Rodríguez
        </Text>

        <Text style={estilos.subtitulo}>
          Experiencia y Proyectos
        </Text>

        <Text style={estilos.descripcion}>
          Aprendiz del SENA en Análisis y Desarrollo
          de Software (ADSO), con experiencia práctica
          en proyectos académicos de desarrollo web,
          backend, bases de datos y automatización.
        </Text>

      </View>

      {/* ESTADO LABORAL */}
      <View style={estilos.estadoContenedor}>

        <Ionicons
          name="school-outline"
          size={24}
          color="#2563eb"
        />

        <View style={estilos.estadoTexto}>

          <Text style={estilos.estadoTitulo}>
            Actualmente en formación
          </Text>

          <Text style={estilos.estadoDescripcion}>
            Tecnólogo ADSO - SENA.
            En búsqueda de contrato de aprendizaje
            para realizar la etapa productiva.
          </Text>

        </View>

      </View>

      {/* PROYECTOS ACADÉMICOS */}
      <View style={estilos.seccion}>

        <Text style={estilos.tituloSeccion}>
          Proyectos Académicos
        </Text>

        {/* ECO-TRACE */}
        <TarjetaExperiencia
          cargo="Desarrollador Full Stack"
          empresa="Eco-TRACE - Proyecto Académico SENA"
          periodo="2026"
          descripcion="Desarrollo de una plataforma web para gestionar puntos ecológicos de reciclaje en Ciudad Bolívar, Bogotá. Implementación de registro e inicio de sesión, autenticación JWT, administración de usuarios, mapas interactivos y gestión de puntos ecológicos. Tecnologías utilizadas: React, FastAPI, Python, PostgreSQL y Docker."
        />

        {/* BDJACKSON */}
        <TarjetaExperiencia
          cargo="Desarrollador Full Stack"
          empresa="BDjackson - Proyecto Académico"
          periodo="2026"
          descripcion="Desarrollo de una aplicación web para gestionar clientes, productos, ventas y detalles de ventas. Implementación de API REST con Express, conexión a base de datos MySQL y frontend desarrollado con React. Despliegue del backend utilizando Railway."
        />

        {/* ARDUINO */}
        <TarjetaExperiencia
          cargo="Desarrollador de Software y Automatización"
          empresa="Arduino - Proyecto Académico"
          periodo="2026"
          descripcion="Desarrollo de un sistema de control para un carro robot con sensores infrarrojos de seguimiento de línea. Programación de movimientos, rutas y comunicación serial. Integración con una aplicación de control y desarrollo de un sistema de inventario cíclico utilizando Python y FastAPI."
        />

        {/* API VIDEOJUEGOS */}
        <TarjetaExperiencia
          cargo="Desarrollador Backend"
          empresa="API de Videojuegos - Taller SENA"
          periodo="2026"
          descripcion="Desarrollo de una API REST para la gestión y consulta de videojuegos utilizando Node.js y Express. Organización del código mediante rutas, controladores y servicios, aplicando principios de desarrollo backend."
        />

      </View>

      {/* TECNOLOGÍAS UTILIZADAS */}
      <View style={estilos.seccionTecnologias}>

        <Text style={estilos.tituloSeccion}>
          Tecnologías Utilizadas
        </Text>

        <Text style={estilos.tecnologia}>
          • HTML5, CSS3 y JavaScript
        </Text>

        <Text style={estilos.tecnologia}>
          • React y React Native
        </Text>

        <Text style={estilos.tecnologia}>
          • Python y FastAPI
        </Text>

        <Text style={estilos.tecnologia}>
          • Node.js y Express
        </Text>

        <Text style={estilos.tecnologia}>
          • MySQL y PostgreSQL
        </Text>

        <Text style={estilos.tecnologia}>
          • MongoDB
        </Text>

        <Text style={estilos.tecnologia}>
          • Docker
        </Text>

        <Text style={estilos.tecnologia}>
          • Git y GitHub
        </Text>

        <Text style={estilos.tecnologia}>
          • APIs REST y autenticación JWT
        </Text>

      </View>

    </ScrollView>
  );
};

export default Experiencia;

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

  estadoContenedor: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eff6ff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },

  estadoTexto: {
    flex: 1,
    marginLeft: 12,
  },

  estadoTitulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1d4ed8",
    marginBottom: 5,
  },

  estadoDescripcion: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 20,
  },

  seccion: {
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
    marginBottom: 12,
  },

  seccionTecnologias: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },

  tecnologia: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 8,
  },

});
