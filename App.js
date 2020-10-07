import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// or any pure javascript modules available in npm
import { TextInput, Button} from 'react-native-paper';

export default class App extends React.Component {
  //valores globais
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Inderteminado',
    cor: '#bdc3c7',
  };


  calcularIMC = () => {


    //altura.replace(',','.')

    const resultado = this.state.peso / (this.state.altura * this.state.altura); 

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5){
      this.setState({
        legenda: 'Magreza',
        cor: '#e74c3c'
      });
    }

    else if (resultado >= 18.5 && resultado <25) {
      this.setState({
        legenda: 'Normal',
        cor: '#2ecc71'
      });
    }

    else if (resultado >= 25 && resultado <30) {
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      });
    }

    else if (resultado >= 30 && resultado <40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#f39c12'
      });
    }

    else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        cor: '#c0392b'
      });
    }

  }

  render() {
    //imc = peso / altura * altura

    return (
      <View style={styles.app}>
       <Text style={styles.legenda}>Seu IMC</Text>

       <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
        <Text style={styles.resultado}>{this.state.imc}</Text>
        <Text style={styles.diagnostico}>{this.state.legenda}</Text>
       </View>

       <View> 

          <TextInput 
          label="Peso"
          style={styles.peso}
          onChangeText={valor => {
             this.setState({peso: valor.replace(',','.')});
            }}
          />

          <TextInput 
          label="Altura"
          style={styles.altura}
           onChangeText={valor => {
             this.setState({altura: valor.replace(',','.')});
            }}
          />

          <Button  mode="contained" onPress ={this.calcularIMC}>
          Calcular
          </Button>

       </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },

  painel: {
    borderRadius: 5,
    marginVertical: 10,
    padding: 8,
    width: 150,
    alignSelf: 'center',
  },

  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',

  },
  diagnostico:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  peso: {
    marginVertical: 10,
  }, 
  altura: {
   
    marginVertical: 10,
    
  }
});
