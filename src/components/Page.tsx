import React, {FC, ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
interface PageProps {
  children: ReactNode;
}
const Page: FC<PageProps> = ({children}) => {
  return <View style={styles.page}>{children}</View>;
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: '5%',
  },
});

export default Page;
