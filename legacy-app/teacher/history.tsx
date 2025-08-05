import { commonStyles } from "@/constants/ThemeStyles";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";

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

export default function CounterScreen() {
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
                <View style={commonStyles.modalBackdrop}>
                    <View style={commonStyles.modalBox}>
                        <View style={commonStyles.modalHeader}>
                            <Text style={commonStyles.modalTitle}>
                                {selectedItem?.title || "상세정보"}
                            </Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={{ fontSize: 18 }}>✕</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={commonStyles.modalContent}>
                            {selectedItem?.content || ""}
                        </Text>
                        <View style={commonStyles.modalButtons}>
                            <TouchableOpacity style={commonStyles.cancelButton}>
                                <Text style={{ color: "#fff" }}>기소 취하</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={commonStyles.closeButton}
                                onPress={closeModal}
                            >
                                <Text style={{ color: "#000" }}>닫기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
