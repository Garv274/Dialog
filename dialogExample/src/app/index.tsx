import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DialogTitle from "../../components/DialogTitle";

export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {visible && <DialogTitle />}
        <Text>show Dialog.title</Text>
      </TouchableOpacity>
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

//ssdh
