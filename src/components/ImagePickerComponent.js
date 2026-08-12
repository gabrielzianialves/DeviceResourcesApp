import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, Alert, StyleSheet } from 'react-native';
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

        if (result.canceled) {
            Alert.alert("Operação cancelada", "Você cancelou a seleção de imagem.");
            return;
        }

        const uri = result.assets?.[0]?.uri;
        if (!uri) {
            Alert.alert("Erro", "Não foi possível obter a imagem selecionada.");
            return;
        }

        setImageUri(uri);
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity style={styles.button} onPress={selectImage} activeOpacity={0.85}>
                    <Text style={styles.buttonText}>Selecionar Imagem</Text>
                </TouchableOpacity>

                {imageUri && (
                    <Image 
                        source={{ uri: imageUri }} 
                        style={styles.image} 
                    />
                )}
            </View>
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
    ,
    card: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 12,
        backgroundColor: '#f8fafc',
        marginBottom: 12,
    },
    button: {
        width: '80%',
        height: 48,
        borderRadius: 12,
        backgroundColor: '#e5e7eb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#111827',
        fontWeight: '600',
        fontSize: 16,
    }
});

export default ImagePickerComponent;