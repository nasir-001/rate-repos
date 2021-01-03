import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const {repositories} = useRepositories();

    const renderItem = ({item}) => <RepositoryItem item={item} />;

    const repositoriesNode = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <>
            <FlatList
                data={repositoriesNode}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

export default RepositoryList;