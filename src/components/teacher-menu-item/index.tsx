import { ReactNode } from "react";
import { Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import LinkWrapper from "../link-wrapper";
import { useUiStyles } from "../ui-styles-provider";

/* This is an item for disiplaying menu options in teacher home */
interface TeacherMenuItemProps {
  icon: ReactNode; // Suggestion: Change this to a more concrete type
  title: string;
  subtitle: string;
  screen: string; // the screen this leads too
}

function TeacherMenuItem({ icon, title, subtitle, screen }: TeacherMenuItemProps) {
  const { commonStyles } = useUiStyles();

  return (
    <LinkWrapper style={commonStyles.menuItem} screen={screen} touchableOpacity={true}>
      <View style={commonStyles.iconWithText}>
        {icon}
        <View style={{ marginLeft: 12 }}>
          <Text style={commonStyles.menuTitle}>{title}</Text>
          <Text style={commonStyles.menuSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="black" />
    </LinkWrapper>
  );
}

export { TeacherMenuItem };
