import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { commonStyles } from "../../constants/ThemeStyles";

export default function Index() {
    const [isEnabled, setIsEnabled] = useState(false);

    const handlePress = (buttonName: string) => {
        console.log(`${buttonName} 버튼이 눌렸습니다.`);
    };

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        console.log(`토글 상태: ${!isEnabled}`);
    };

    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.titleText}>법무부</Text>

            <View style={commonStyles.togglebutton}>
                <Text style={commonStyles.labelText}>법정 자동 갱신 </Text>
                <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>

            <TouchableOpacity
                style={commonStyles.button}
                onPress={() => handlePress("버튼 1")}
            >
                <Text style={commonStyles.buttonText}>
                    기소 리스트 다운받기
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={commonStyles.button}
                onPress={() => handlePress("버튼 2")}
            >
                <Text style={commonStyles.buttonText}>
                    기소 리스트 알림 보내기
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={commonStyles.button}
                onPress={() => handlePress("버튼 3")}
            >
                <Text style={commonStyles.buttonText}>누계 파일 업로드</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={commonStyles.button}
                onPress={() => handlePress("버튼 4")}
            >
                <Text style={commonStyles.buttonText}>
                    법정 좌석 리스트 업로드 버튼
                </Text>
            </TouchableOpacity>
        </View>
    );
}
