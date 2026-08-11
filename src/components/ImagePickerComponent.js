import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = () => {
    const [imageUri, setImageUri] = useState(null);

    const selectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão Negada', 'Permissão para acessar a galeria foi negada.');
            return;
        }

        const mediaTypes = ImagePicker.MediaType?.Images ?? ImagePicker.MediaTypeOptions?.Images;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes,
            allowsEditing: true,
            quality: 1
        });

        if (result.cancelled) {
            Alert.alert("Operação cancelada", "Você cancelou a seleção de imagem.");
            return;
        }

        setImageUri(result.uri);
    }

    return (
        <View style={styles.container}>
            <Button title="Selecionar Imagem" onPress={selectImage} />
            {imageUri && (
                <Image 
                    source={{ uri: imageUri }} 
                    style={styles.image} 
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0'
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10
    }
});

export default ImagePickerComponent;