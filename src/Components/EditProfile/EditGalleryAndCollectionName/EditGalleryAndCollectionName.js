import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import CollectionNameInput from '../CollectionNameInput/CollectionNameInput';
import {SIZE} from '../../../constants';
import Gallery from '../Gallery/Gallery';
import {KeyboardASV} from '../../Register';

const EditGalleryAndCollectionName = (props) => {
    const {user: {gallery, collectionsNames}} = useSelector(state => state['user']);
    const [filterCollectionName, setFilterCollectionName] = useState([]);

    useEffect(() => {
        const collection = collectionsNames.filter(item => item.collectionName !== 'All NFT');
        setFilterCollectionName(collection);
    }, [collectionsNames]);

    return (
        <View>
            {
                filterCollectionName.map(item => {
                    return (
                        <View style={styles.wrapper} key={item.id}>
                            <CollectionNameInput item={item}/>
                            <Gallery currentCollectionName={item.collectionName}/>
                        </View>
                    );
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: SIZE.width.w15
    }
});


export default EditGalleryAndCollectionName;


