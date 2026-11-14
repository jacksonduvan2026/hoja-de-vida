
import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({
  titulo,
  institucion,
  anio,
  enCurso,
}: Props) => {
  return (
    <View style={estilos.tarjeta}>

      <Text style={estilos.titulo}>
        {titulo}
      </Text>

      <Text style={estilos.institucion}>
        {institucion}
      </Text>

      <Text style={estilos.anio}>
        Año: {anio}
      </Text>

      {/* RETO 1: INSIGNIA MORADA */}
      {enCurso && (
        <View style={estilos.badgeCapsula}>
          <Text style={estilos.badgeTexto}>
            En Curso
          </Text>
        </View>
      )}

    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({

  tarjeta: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    backgroundColor: "#ffffff",
  },

  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 5,
  },

  institucion: {
    fontSize: 14,
    color: "#2563eb",
    fontWeight: "600",
    marginBottom: 5,
  },

  anio: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 6,
  },

  // RETO 1: CÁPSULA MORADA
  badgeCapsula: {
    alignSelf: "flex-start",
    backgroundColor: "#7c3aed",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 4,
  },

  badgeTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

});
