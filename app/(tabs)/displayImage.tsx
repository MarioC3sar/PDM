import { Image, ImageStyle, StyleSheet, StyleProp } from "react-native";

const styles = StyleSheet.create({
    logo: {
        flex: 1,

    },
});

type DisplayImageProps = {
    style?: StyleProp<ImageStyle>;
};

const DisplayImage = ({ style }: DisplayImageProps) => (
    <Image
        style={[styles.logo, style]}
        source={require("/home/mario/PDM/assets/images/splash-icon.png")}
    />
);

export default DisplayImage;
