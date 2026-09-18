import { useState } from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";

const DialogTitle = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Portal>
      <Dialog visible={visible}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={{ textAlign: "center" }}>
          This is a titles
        </Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            This is an example of the Dialog.Content
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(!visible)}>
            This is a Dialog.Action
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogTitle;
