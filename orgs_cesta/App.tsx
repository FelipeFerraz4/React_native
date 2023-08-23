import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Cesta from './src/telas/Cesta';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
</style>;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

export default App;
