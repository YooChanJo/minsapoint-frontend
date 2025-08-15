import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StackActions } from "@react-navigation/native";

import { useUiStyles } from "@/src/components/ui-styles-provider";
import LinkWrapper from "@/src/components/link-wrapper";

const sampleData = [
  {
    id: "1",
    title: "Abasent from morning exercise",
    content: "정창윤 외 10명",
  },
  { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
  { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
  { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
  { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
  {
    id: "3",
    title: "List item",
    content: "Supporting line text lorem ipsum dolor sit amet",
  },
];

export default function StudentHistoryScreen() {
  const { commonStyles } = useUiStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={commonStyles.container}>
      <LinkWrapper
        screen="StudentHome"
        action={StackActions.popTo("StudentHome")}
        style={commonStyles.topBar}
        touchableOpacity={true}
      >
        <Text style={commonStyles.appTitle}>MinsaPoint</Text>
      </LinkWrapper>
      <FlatList
        style={{ marginTop: 20 }}
        data={sampleData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={commonStyles.itemCard} onPress={() => handleItemPress(item)}>
            <Text style={commonStyles.itemTitle}>{item.title}</Text>
            <Text style={commonStyles.itemSub}>{item.content}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={commonStyles.modalBackdrop}>
            <TouchableWithoutFeedback>
              <View style={commonStyles.modalBox}>
                <Text style={commonStyles.modalTitle}>{selectedItem?.title}</Text>
                <Text style={commonStyles.modalContent}>{selectedItem?.content || ""}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
