# EcomApp Project

Welcome to the EcomApp project! This README provides an overview of the project setup, available scripts, and how to run and develop the application.

## Prerequisites

Make sure you have the following installed:

- Node.js
- Yarn or npm
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/azizmobarak/ecomapp.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd ecomapp
   ```

3. **Install dependencies**:

   ```bash
   yarn install
   # or
   npm install
   ```

## Project Scripts

### General Commands

1. **Start the Metro bundler**:

   ```bash
   yarn start
   ```

2. **Lint the codebase**:

   ```bash
   yarn lint
   ```

3. **Run tests**:

   ```bash
   yarn test
   ```

### iOS Development

1. **Run iOS application**:

   ```bash
   yarn ios
   ```

   This script performs the following steps:
   - Changes directory to `ios` (`cd ios`).
   - Installs Ruby gems using Bundler (`bundle install`).
   - Installs CocoaPods dependencies (`pod install`).
   - Starts the iOS simulator and runs the app (`react-native run-ios`).

2. **Clean and Rebuild iOS project**:

   ```bash
   yarn clean-ios
   ```

### Android Development

1. **Run Android application**:

   ```bash
   yarn android
   ```

2. **Clean Android project**:

   ```bash
   yarn android-clean
   ```

   This script performs the following steps:
   - Changes directory to `android` (`cd android`).
   - Cleans the project using Gradle (`./gradlew clean`).

## Additional Commands

1. **Install CocoaPods**:

   ```bash
   yarn pods-install
   ```

2. **Clean iOS Cache**:

   ```bash
   yarn ios-clean
   ```

   This script cleans the CocoaPods cache.

## Styling

This project uses [TailwindCSS](https://tailwindcss.com/) for styling. TailwindCSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. For more information, check the [TailwindCSS documentation](https://tailwindcss.com/docs).

## Troubleshooting

If you encounter issues with missing vector icons, follow these steps:

1. Verify the installation of `react-native-vector-icons`.
2. Ensure proper linking of the fonts to your project.
3. Run `npx react-native link` if needed.
4. For iOS build issues, try running `yarn clean-ios` and then `yarn ios` again.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Commit your changes:

   ```bash
   git commit -am 'Add new feature'
   ```

4. Push the branch:

   ```bash
   git push origin feature-branch
   ```

5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
