import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {policyContent} from '../../data';

const LotteryPolicy = () => {
  const {policyTitle, purpose, sections} = policyContent;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{policyTitle}</Text>
      <Text style={styles.subText}>{purpose}</Text>
      {sections.map((section, index) => (
        <View key={index}>
          <View style={styles.sectionContainer}>
            <Text style={styles.number}>{section.id}</Text>
            <Text style={styles.subText}>{section.title}</Text>
          </View>
          {section.content.map((content, i) => (
            <Text key={i} style={styles.content}>
              {content}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 5,
  },
  subText: {
    fontSize: 16,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LotteryPolicy;
