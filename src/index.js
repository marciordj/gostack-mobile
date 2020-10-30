import React, {useEffect, useState, Fragment} from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';

import api from './services/api';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item}) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        />
      </SafeAreaView>

      {/* <View style={styles.container}>
        {projects.map((project) => (
          <Text key={project.id} style={styles.project}>
            {project.title}
          </Text>
        ))}
      </View> */}
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#fff',
    fontSize: 20,
  },
});
