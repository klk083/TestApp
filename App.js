/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   alignItems,
   JustifyContent,
   Button,
   Alert,
   color,
   
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
       
     </View>
   );
 };
 
 const playGame = (value) => {
   var RandomNumber = Math.floor(Math.random() * 3 + 1) ;
   if(value==RandomNumber) {
     Alert.alert("You Won");
   } else { 
     Alert.alert("You Lost");
 
   }
   
   
 }
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   
 
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       
         
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
                 alignItems: "center",
                 height: '100%',
           }}>
           <Section title="My first app">
             Kenneth made this.
           </Section>
           <Text style={styles.fancyButton}>Hello</Text>
           <Image
           source={{
             uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
           }}
           style={{ width: 200, height: 200 }}
         />
         <Button
         color='#F00'
         title="Press me"
         onPress={() => Alert.alert('You pressed me')}
       />
 
       <View style={styles.game}>
         <Button 
         color="#0F0"
           title="Rock"
           onPress={() => playGame(1)}
         />
         <Button
           title="Paper"
           onPress={() => playGame(2)}
         />
         <Button
           title="Scissor"
           onPress={() => playGame(3)}
         />
       </View>
         
         </View>
     
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
 
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: 'red',
   },
   highlight: {
     fontWeight: '700',
   },
   game: {
     flexDirection: 'row',
     margin:20,
     
 
   },
   fancyButton: {
     color: '#F0F',
   },
 });
 
 export default App;
 