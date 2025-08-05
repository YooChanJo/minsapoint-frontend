import { commonStyles } from "@/constants/ThemeStyles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

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

export default function CounterScreen() {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemPress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedItem(null);
    };

    return (
        <View style={commonStyles.container}>
            <TouchableOpacity style={commonStyles.topBar} onPress={() => router.push("../student")}>
                            <Text style={commonStyles.appTitle}>MinsaPoint</Text>
                        </TouchableOpacity>
            <FlatList
                style={{ marginTop: 20 }}
                data={sampleData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={commonStyles.itemCard}
                        onPress={() => handleItemPress(item)}
                    >
                        <Text style={commonStyles.itemTitle}>{item.title}</Text>
                        <Text style={commonStyles.itemSub}>{item.content}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Modal */}
<Modal
  visible={modalVisible}
  transparent
  animationType="fade"
  onRequestClose={closeModal}
>
  <TouchableWithoutFeedback onPress={closeModal}>
    <View style={commonStyles.modalBackdrop}>
      <TouchableWithoutFeedback>
        <View style={commonStyles.modalBox}>
          <Text style={commonStyles.modalTitle}>
            {selectedItem?.title}
          </Text>
          <Text style={commonStyles.modalContent}>
            {selectedItem?.content || ''}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </TouchableWithoutFeedback>
</Modal>
        </View>
    );
}
