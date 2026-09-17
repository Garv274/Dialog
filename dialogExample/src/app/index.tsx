import { Text, View, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import DialogTitle from "react-native-paper/lib/typescript/components/Dialog/DialogTitle";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>This is an example of the title</Text>
      <DialogTitle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
