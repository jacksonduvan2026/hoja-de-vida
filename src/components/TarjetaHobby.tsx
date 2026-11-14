
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
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
  facebook: "",
  instagram: "@jxck_rodriguz",
  tiktok: "@jackson_jk",
  github: "https://github.com/jacksonduvan2026",
};

const Inicio = () => {
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
          Cuento con conocimientos en HTML5, CSS3,
          JavaScript, React, Python, FastAPI,
          Node.js y Express.
          {"\n\n"}
          También tengo experiencia académica
          trabajando con bases de datos como
          MySQL, PostgreSQL y MongoDB.
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

      {/* CONTACTO Y REDES SOCIALES */}
      <View style={estilos.seccion}>

        <Text style={estilos.subtitulo}>
          Contacto y Redes Sociales
        </Text>

        {/* CORREO */}
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() =>
            Alert.alert(
              "Correo Electrónico",
              usuario.correo
            )
          }
        />

        {/* TELÉFONO */}
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#5B7FE8"
          onPress={() =>
            Alert.alert(
              "Teléfono",
              usuario.telefono
            )
          }
        />

        {/* LINKEDIN */}
        <MiBoton
          textoBoton="LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0A66C2"
          onPress={() =>
            Alert.alert(
              "LinkedIn",
              usuario.linkedin ||
                "Perfil pendiente de configurar"
            )
          }
        />

        {/* FACEBOOK */}
        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#1877F2"
          onPress={() =>
            Alert.alert(
              "Facebook",
              usuario.facebook ||
                "Perfil pendiente de configurar"
            )
          }
        />

        {/* INSTAGRAM */}
        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#F07066"
          onPress={() =>
            Alert.alert(
              "Instagram",
              usuario.instagram
            )
          }
        />

        {/* TIKTOK */}
        <MiBoton
          textoBoton="TikTok"
          nombreIcono="logo-tiktok"
          colorBoton="#F07066"
          onPress={() =>
            Alert.alert(
              "TikTok",
              usuario.tiktok
            )
          }
        />

        {/* GITHUB */}
        <MiBoton
          textoBoton="GitHub"
          nombreIcono="logo-github"
          colorBoton="#24292f"
          onPress={() =>
            Alert.alert(
              "Mis Repositorios",
              usuario.github
            )
          }
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

});
