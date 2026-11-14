import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";

import MiBoton from "../components/MiBoton";

// DATOS PERSONALES
const usuario = {
  nombre: "Jackson Duván Ramos Rodríguez",
  profesion: "Tecnólogo en Análisis y Desarrollo de Software",
  institucion: "SENA",
  ciudad: "Bogotá D.C., Colombia",
  correo: "jacksonsena2026@gmail.com",
  telefono: "3196398621",
  linkedin: "",
  github: "https://github.com/jacksonduvan2026",
};

const Inicio = () => {

  // Abrir enlaces de manera segura
  const abrirEnlace = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert(
        "Error",
        "No se pudo abrir el enlace solicitado."
      );
    }
  };

  // ENVIAR CORREO
  const enviarCorreo = () => {
    abrirEnlace(`mailto:${usuario.correo}`);
  };

  // LLAMAR
  const llamar = () => {
    abrirEnlace(`tel:${usuario.telefono}`);
  };

  // ABRIR LINKEDIN
  const abrirLinkedIn = () => {
    if (!usuario.linkedin) {
      Alert.alert(
        "LinkedIn",
        "Mi perfil de LinkedIn estará disponible próximamente."
      );
      return;
    }

    abrirEnlace(usuario.linkedin);
  };

  // ABRIR GITHUB
  const abrirGitHub = () => {
    abrirEnlace(usuario.github);
  };

  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >

      {/* INFORMACIÓN PERSONAL */}
      <View style={estilos.avatarContenedor}>

        <Ionicons
          name="person-circle"
          size={100}
          color="#2563eb"
        />

        <Text style={estilos.nombre}>
          {usuario.nombre}
        </Text>

        <Text style={estilos.profesion}>
          {usuario.profesion}
        </Text>

        <Text style={estilos.institucion}>
          Aprendiz {usuario.institucion}
        </Text>

        <Text style={estilos.ubicacion}>
          {usuario.ciudad}
        </Text>

      </View>

      {/* PERFIL PROFESIONAL */}
      <View style={estilos.seccion}>

        <Text style={estilos.subtitulo}>
          Perfil Profesional
        </Text>

        <Text style={estilos.parrafo}>
          Soy aprendiz del SENA en el programa de
          Tecnólogo en Análisis y Desarrollo de Software
          (ADSO), apasionado por la programación y el
          desarrollo de aplicaciones web y móviles.
          {"\n\n"}
          Cuento con conocimientos en tecnologías como
          HTML5, CSS3, JavaScript, React, Python,
          FastAPI, Node.js y Express.
          {"\n\n"}
          También tengo experiencia académica trabajando
          con bases de datos como MySQL, PostgreSQL
          y MongoDB.
          {"\n\n"}
          Me interesa especialmente el desarrollo
          frontend y backend, la creación de interfaces
          modernas y la construcción de aplicaciones
          funcionales.
          {"\n\n"}
          Mi objetivo es continuar fortaleciendo mis
          habilidades, adquirir experiencia laboral
          y aportar mis conocimientos en proyectos
          tecnológicos.
        </Text>

      </View>

      {/* HABILIDADES TÉCNICAS */}
      <View style={estilos.seccion}>

        <Text style={estilos.subtitulo}>
          Habilidades Técnicas
        </Text>

        <Text style={estilos.parrafo}>
          • HTML5 y CSS3{"\n"}
          • JavaScript{"\n"}
          • React y React Native{"\n"}
          • Python y FastAPI{"\n"}
          • Node.js y Express{"\n"}
          • MySQL y PostgreSQL{"\n"}
          • MongoDB{"\n"}
          • Git y GitHub{"\n"}
          • Docker{"\n"}
          • Desarrollo frontend y backend
        </Text>

      </View>

      {/* PROYECTOS DESTACADOS */}
      <View style={estilos.seccion}>

        <Text style={estilos.subtitulo}>
          Proyectos Destacados
        </Text>

        <Text style={estilos.parrafo}>
          Eco-TRACE: Plataforma web para gestionar
          puntos ecológicos de reciclaje, desarrollada
          con React, FastAPI y PostgreSQL.
          {"\n\n"}
          BDjackson: Aplicación web para gestionar
          clientes, productos y ventas, utilizando
          React, Express y MySQL.
          {"\n\n"}
          Arduino: Proyecto de automatización
          mediante un carro robot con sensores
          y sistema de control.
        </Text>

      </View>

      {/* CONTACTO */}
      <View style={estilos.seccion}>

        <Text style={estilos.subtitulo}>
          Contacto
        </Text>

        <Text style={estilos.datoContacto}>
          Correo: {usuario.correo}
        </Text>

        <Text style={estilos.datoContacto}>
          Teléfono: {usuario.telefono}
        </Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={enviarCorreo}
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#5B7FE8"
          onPress={llamar}
        />

        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#F07066"
          onPress={abrirLinkedIn}
        />

        <MiBoton
          textoBoton="Ver Mi GitHub"
          nombreIcono="logo-github"
          colorBoton="#24292e"
          onPress={abrirGitHub}
        />

      </View>

    </ScrollView>
  );
};

export default Inicio;

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

  avatarContenedor: {
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

  profesion: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
  },

  institucion: {
    fontSize: 15,
    color: "#475569",
    marginTop: 5,
  },

  ubicacion: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 5,
  },

  seccion: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },

  parrafo: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 22,
  },

  datoContacto: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 10,
  },

});
