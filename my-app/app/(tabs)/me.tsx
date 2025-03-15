import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, View } from "react-native";

export default function UserInfoScreen() {
    return (
        <View>
            <IconSymbol name="person.fill" size={24} color="black" style={styles.icon} />
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Thông tin cá nhân</ThemedText>
            </ThemedView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  icon: {
    marginBottom: 10, 
  },
  titleContainer: {
    marginTop: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});