import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";

const [visible, setVisible] = useState(false);

const hideDialog = () => setVisible(false);
export default function Index() {
  return (
    <View style={styles.container}>
      return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>This is a title</Dialog.Title>
          <Dialog.Content>
            <Text>This is simple dialog</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
      );
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
