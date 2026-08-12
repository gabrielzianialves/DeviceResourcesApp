import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts';
import { FontAwesome } from '@expo/vector-icons';

const ContactsComponent = () => {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Permissão Negada', 'Permissão para acessar os contatos foi negada.');
            return;
        }

        try {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
                setContacts(data);
            }
            else {
                Alert.alert('Sem Contatos', 'Nenhum contato encontrado.');
            }
        }
        catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao carregar os contatos.');
            console.error(error);
        }
    };

    useEffect(() => {
        loadContacts();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.contactItem}>

            <Text style={styles.contactName}>
                {item.firstName} {item.lastName}
            </Text>

            {item.phoneNumbers && item.phoneNumbers.map((phone, index) => (
                <View key={index} style={styles.contactDetailContainer}>
                    <FontAwesome name="phone" size={16} color="#555" style={styles.icon}/>
                    <Text style={styles.contactDetail}>
                        {phone.number}
                    </Text>
                </View>
            ))}

            {item.emails && item.emails.map((email, index) => (
                <View key={index} style={styles.contactDetailContainer}>
                    <FontAwesome name="envelope" size={16} color="#555" style={styles.icon}/>
                    <Text style={styles.contactDetail}>
                        {email.email}
                    </Text>
                </View>
            ))}

        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity style={styles.button} onPress={loadContacts} activeOpacity={0.85}>
                    <Text style={styles.buttonText}>Recarregar Contatos</Text>
                </TouchableOpacity>

                <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                    style={styles.listWrapper}
                />
            </View>
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    list: {
        marginTop: 20,
    },
    listWrapper: {
        width: '100%'
    },
    contactItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactDetail: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    contactDetailContainer: {
        flexDirection: "row",
        alignItems: "center",
        margintop: 5
    },
    icon: {
        marginRight: 10
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

export default ContactsComponent;