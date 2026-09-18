import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DialogTitle from "../../components/DialogTitle";

export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>This is an example of the title</Text>
      <DialogTitle>hi</DialogTitle>
=======
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {visible && <DialogTitle />}
        <Text>show Dialog.title</Text>
      </TouchableOpacity>
>>>>>>> 60f377aa204add5450a5fde67c55b7742ef9625d
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
