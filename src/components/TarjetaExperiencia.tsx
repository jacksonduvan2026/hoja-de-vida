
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

const TarjetaExperiencia = ({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) => {
  return (
    <View style={estilos.tarjeta}>

      {/* ICONO Y CARGO */}
      <View style={estilos.encabezado}>

        <View style={estilos.iconoContenedor}>
          <Ionicons
            name="briefcase-outline"
            size={24}
            color="#2563eb"
          />
        </View>

        <View style={estilos.info}>
          <Text style={estilos.cargo}>
            {cargo}
          </Text>

          <Text style={estilos.empresa}>
            {empresa}
          </Text>
        </View>

      </View>

      {/* PERIODO */}
      <View style={estilos.periodoContenedor}>
        <Ionicons
          name="calendar-outline"
          size={15}
          color="#64748b"
        />

        <Text style={estilos.periodo}>
          {periodo}
        </Text>
      </View>

      {/* DESCRIPCIÓN */}
      <Text style={estilos.descripcion}>
        {descripcion}
      </Text>

    </View>
  );
};

export default TarjetaExperiencia;

// ESTILOS
const estilos = StyleSheet.create({

  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    backgroundColor: "#ffffff",
    elevation: 2,
  },

  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  iconoContenedor: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  cargo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },

  empresa: {
    fontSize: 14,
    color: "#2563eb",
    fontWeight: "600",
  },

  periodoContenedor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  periodo: {
    fontSize: 12,
    color: "#64748b",
    marginLeft: 6,
  },

  descripcion: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 22,
  },

});
