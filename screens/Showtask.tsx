import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import rncStyles from 'rncstyles';
import axios from 'axios';

const Showtask = ({navigation}: any) => {
  const [list, setListData] = useState<any>([]);

  const gettask = async () => {
    await axios
      .get('http://192.168.1.106:8000/task')
      .then((res: any) => {
        console.log(res.data.data);
        setListData([...res.data.data]);
        console.log(list);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  useEffect(() => {
    gettask();
  }, []);
  return (
    <View>
      <View style={[rncStyles.m2]}>
        <Text style={[rncStyles.textBlack, rncStyles.fsL]}>Task</Text>
        <View>
          {list &&
            list.map((x: any) => (
              <View>
                <Text style={[rncStyles.textBlack]}>{x.TaskName}</Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

export default Showtask;
