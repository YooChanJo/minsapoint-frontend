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
        <View style={{ flex: 1 }}>
            {" "}
            {/* 화면 전체를 차지하는 View */}
            {/* 헤더 (고정) */}
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
            {/* 아래 부분은 스크롤 가능 */}
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {/* Title */}
                <Text style={commonStyles.titleText}>상점</Text>

                {/* Form Box */}
                <View style={commonStyles.formBox}>
                    {/* 입력 필드랑 Picker들 */}
                    <Text style={commonStyles.label}>활동 내역</Text>
                    <View style={commonStyles.inputWrapper}>
                        {/* 여기에 TextInput 넣으면 돼 */}
                    </View>

                    <Text style={commonStyles.label}>분류</Text>
                    <View style={commonStyles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedCategory}
                            onValueChange={(itemValue) =>
                                setSelectedCategory(itemValue)
                            }
                        >
                            <Picker.Item label="선택하기" value="" />
                            <Picker.Item label="도움" value="help" />
                        </Picker>
                    </View>

                    <Text style={commonStyles.label}>활동 장소 및 시간</Text>
                    <View style={commonStyles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedPenalty}
                            onValueChange={(itemValue) =>
                                setSelectedPenalty(itemValue)
                            }
                        >
                            <Picker.Item label="선택하기" value="" />
                        </Picker>
                    </View>

                    <View style={commonStyles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedStudent}
                            onValueChange={(itemValue) =>
                                setSelectedStudent(itemValue)
                            }
                        >
                            <Picker.Item label="선택하기" value="" />
                        </Picker>
                    </View>

                    <Text style={commonStyles.label}>상점 추천 학생 목록</Text>
                    <View style={commonStyles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedStudent}
                            onValueChange={(itemValue) =>
                                setSelectedStudent(itemValue)
                            }
                        >
                            <Picker.Item label="선택하기" value="" />
                        </Picker>
                    </View>

                    {/* 추가 버튼 */}
                    <TouchableOpacity style={commonStyles.button}>
                        <Ionicons name="person-add" size={24} color="black" />
                    </TouchableOpacity>

                    {/* 제출 버튼 */}
                    <TouchableOpacity style={commonStyles.button}>
                        <Text style={commonStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
