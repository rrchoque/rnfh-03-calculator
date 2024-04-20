import { Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';


export const CalculatorScreen = () => {

  return (
    <View style={ styles.calculatorContainer }>
      <View style={{ paddingHorizontal:30, paddingBottom: 20 }}>
        <Text style={ styles.mainResult }>1500</Text>
        <Text style={ styles.subResult }>50</Text>
      </View>


      <View style={ styles.row }>
        
        <CalculatorButton label="C" blackText color={ colors.lightGray } />
        <CalculatorButton label="+/-" blackText color={ colors.lightGray } />
        <CalculatorButton label="del" blackText color={ colors.lightGray } />
        <CalculatorButton label="÷" color={ colors.orange } />

      </View>

      <View style={ styles.row }>
        
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="x" color={ colors.orange } />

      </View>

      <View style={ styles.row }>
        
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" color={ colors.orange } />

      </View>

      <View style={ styles.row }>
        
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" color={ colors.orange } />

      </View>

      <View style={ styles.row }>
        
        <CalculatorButton label="0" doubleSize />
        <CalculatorButton label="." />
        <CalculatorButton label="=" color={ colors.orange } />

      </View>

    </View>
  );
};