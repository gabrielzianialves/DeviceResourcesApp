# Device Resource App

Aplicativo desenvolvido em **React Native** com **Expo**, que demonstra como manipular a **galeria de imagens** e os **contatos** do dispositivo, utilizando as APIs nativas do Expo com gerenciamento de permissões.

---

## Funcionalidades

- **Seleção de imagens**: permite ao usuário escolher uma foto da galeria e exibi-la na tela (`ImagePickerComponent.js`).
- **Listagem de contatos**: solicita permissão, carrega os contatos do dispositivo e os exibe em uma lista otimizada com `FlatList` (`ContactsComponent.js`).
- **Ícones**: exibição de ícones de telefone e e-mail, com opção de uso via emojis ou via `@expo/vector-icons`.

## Permissões

O projeto solicita permissões de acesso à **galeria de fotos** e aos **contatos** do dispositivo. Essas permissões são configuradas no `app.json`:

- **iOS** (`infoPlist`):
  - `NSPhotoLibraryUsageDescription`
  - `NSContactsUsageDescription`
- **Android** (`permissions`):
  - `READ_CONTACTS`
  - `WRITE_CONTACTS`
  - `READ_EXTERNAL_STORAGE`
  - `WRITE_EXTERNAL_STORAGE`

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (Expo CLI / Expo SDK)
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) — seleção de imagens da galeria
- [expo-contacts](https://docs.expo.dev/versions/latest/sdk/contacts/) — acesso aos contatos do dispositivo
- [@expo/vector-icons](https://icons.expo.fyi/) — ícones vetoriais (FontAwesome, Ionicons, etc.)

---

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/gabrielzianialves/DeviceResourcesApp.git
cd DeviceResourceApp
```

### 2. Instalar as dependências

```bash
npm install
```

```bash
npx expo install expo-image-picker
npx expo install expo-contacts
npx expo install @expo/vector-icons
npx expo install @react-navigation/native @react-navigation/native-stack
```


### 3. Executar o projeto

Para executar o projeto, execute o seguinte comando no seu terminal:

```bash
npx expo start
```