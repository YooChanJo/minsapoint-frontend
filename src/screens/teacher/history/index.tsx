import { useUiStyles } from "@/src/components/ui-styles-provider";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

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
  { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
  { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
  { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
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

/* There is not way to renavigate back to home implementation needed */
/* Some commonStyles simply do not exist --> need implementation */
export default function TeacherHistoryScreen() {
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
            <TouchableWithoutFeedback onPress={() => {}}>
              {/* Prevent closing when clicking inside modal box */}
              <View style={commonStyles.modalBox}>
                <View /* style={commonStyles.modalHeader} */>
                  <Text style={commonStyles.modalTitle}>{selectedItem?.title || "상세정보"}</Text>
                </View>
                <Text style={commonStyles.modalContent}>{selectedItem?.content || ""}</Text>
                <View /* style={commonStyles.modalButtons} */>
                  <TouchableOpacity style={commonStyles.cancelButton}>
                    <Text>기소 취하</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
