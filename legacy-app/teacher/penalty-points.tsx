import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../../constants/ThemeStyles";

export default function PenaltyScreen() {
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const [selectedPenalty, setSelectedPenalty] = React.useState("");
    const [selectedStudent, setSelectedStudent] = React.useState("");

    return (
        <ScrollView style={{ flex: 1 }}>
            {/* Header */}
            <View style={commonStyles.header}>
                <View style={commonStyles.headerLeft}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 12 }}>
                        <Ionicons name="home" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={commonStyles.headerRight}>
                    <Image
                        source={{ uri: "https://via.placeholder.com/40" }}
                        style={commonStyles.profileImage}
                    />
                    <View style={{ marginLeft: 8 }}>
                        <Text style={commonStyles.profileName}>왕두균</Text>
                    </View>
                </View>
            </View>

            {/* Title */}
            <Text style={commonStyles.titleText}>벌점</Text>

            {/* Form Box */}
            <View style={commonStyles.formBox}>
                {/* 기소 항목 */}
                <Text style={commonStyles.label}>기소 항목</Text>
                <View style={commonStyles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue) =>
                            setSelectedCategory(itemValue)
                        }
                    >
                        <Picker.Item label="선택하기" value="" />
                        <Picker.Item label="아침운동 불참" value="morning" />
                        <Picker.Item label="지각" value="late" />
                    </Picker>
                </View>

                {/* 부과 벌점 선택 */}
                <Text style={commonStyles.label}>부과 벌점 선택</Text>
                <View style={commonStyles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedPenalty}
                        onValueChange={(itemValue) =>
                            setSelectedPenalty(itemValue)
                        }
                    >
                        <Picker.Item label="선택하기" value="" />
                        <Picker.Item label="경고" value="warning" />
                        <Picker.Item label="주말 자율학습 금지" value="ban" />
                    </Picker>
                </View>

                {/* 기소 학생 목록 */}
                <Text style={commonStyles.label}>기소 학생 목록</Text>
                <View style={commonStyles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedStudent}
                        onValueChange={(itemValue) =>
                            setSelectedStudent(itemValue)
                        }
                    >
                        <Picker.Item label="선택하기" value="" />
                        <Picker.Item label="홍길동" value="hong" />
                        <Picker.Item label="김철수" value="kim" />
                    </Picker>
                </View>

                {/* Add button */}
                <TouchableOpacity style={commonStyles.button}>
                    <Ionicons name="person-add" size={24} color="black" />
                </TouchableOpacity>

                {/* Submit button */}
                <TouchableOpacity style={commonStyles.button}>
                    <Text style={commonStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
