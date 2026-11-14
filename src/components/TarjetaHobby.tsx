
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

// PROPIEDADES DEL COMPONENTE
type Props = {
  nombre: string;
  icono: keyof typeof Ionicons.glyphMap;
  descripcion: string;
  onPress: () => void;
};

const TarjetaHobby = ({
  nombre,
  icono,
  descripcion,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Ver detalles de ${nombre}`}
      style={({ pressed }) => [
        estilos.tarjeta,
        pressed && estilos.tarjetaPresionada,
      ]}
    >

      {/* ICONO DEL HOBBY */}
      <View style={estilos.iconoContenedor}>
        <Ionicons
          name={icono}
          size={30}
          color="#2563eb"
        />
      </View>

      {/* INFORMACIÓN DEL HOBBY */}
      <View style={estilos.textos}>

        <Text style={estilos.nombre}>
          {nombre}
        </Text>

        <Text style={estilos.descripcion}>
          {descripcion}
        </Text>

      </View>

      <Ionicons
        name="chevron-forward-outline"
        size={20}
        color="#94a3b8"
      />

    </Pressable>
  );
};

export default TarjetaHobby;

// ESTILOS
const estilos = StyleSheet.create({

  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    backgroundColor: "#ffffff",
    elevation: 2,
  },

  tarjetaPresionada: {
    opacity: 0.7,
    backgroundColor: "#eff6ff",
  },

  iconoContenedor: {
    width: 55,
    height: 55,
    borderRadius: 14,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  textos: {
    flex: 1,
  },

  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 5,
  },

  descripcion: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },

});
