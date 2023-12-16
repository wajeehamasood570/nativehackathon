import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import rncStyles from 'rncstyles';
import BAButton from '../components/BAButton';
// import { addData } from '../FirebaseMethods';

const AddDocttor = () => {
  const [model, setModel] = useState<any>({});
  const [createtask, setCreateTask] = useState<any>([]);

  const savedoctor = () => {
    console.log(model);
    // addData('task', model).then((res)=>{
    //         setCreateTask([...createtask, model])
    // }).catch((err)=>{
    //     console.log(err)  
    // })
  };

  return (
    <View>
      <Text>Add Doctor</Text>
      <View style={[rncStyles.h100]}>
        <View
          style={[
            rncStyles.h100,
            rncStyles.p2,
            rncStyles.justifyContentCenter,
          ]}>
          <ScrollView>
            <View>
              <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Name</Text>
                <TextInput
                  style={[
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                    rncStyles.textSecondary,
                    
                  ]}
                  onChangeText={e => setModel({...model, name: e})}
                  value={model.name}
                  placeholder="eg. Muhammad Zaid"
                  placeholderTextColor="grey"
                />
              </View>
              <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Speciality</Text>
                <TextInput
                  // keyboardType="email-address"
                  style={[
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                    rncStyles.textSecondary
                  ]}
                  placeholder="eg. Dietrician"
                  placeholderTextColor="grey"
                  onChangeText={e => setModel({...model, speciality: e})}
                  value={model.speciality}
                />
              </View>
              <BAButton onPress={savedoctor} label="Save" />
            </View>
          </ScrollView>
        </View>  
      </View>
    </View>
  );
};

export default AddDocttor;
