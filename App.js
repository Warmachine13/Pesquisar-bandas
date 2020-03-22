/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  Linking
} from 'react-native';

const ListItem = React.memo(({
  idArtist,
  strArtist,
  strArtistStripped,
  strArtistAlternate,
  strLabel,
  idLabel,
  intFormedYear,
  intBornYear,
  intDiedYear,
  strDisbanded,
  strStyle,
  strGenre,
  strMood,
  strWebsite,
  strFacebook,
  strTwitter,
  strBiographyEN,
  strBiographyPT,
  strGender,
  intMembers,
  strCountry,
  strCountryCode,
  strArtistThumb,
  strArtistLogo,
  strArtistClearart,
  strArtistWideThumb,
  strArtistFanart,
  strArtistFanart2,
  strArtistFanart3,
  strArtistBanner,
  strMusicBrainzID,
  strLastFMChart,
  intCharted,
  strLocked
}) => {
  return <View
    key={idArtist}
    style={{
      padding: 10,
      borderWidth: 1,
      borderRadius: 2
    }}
  >

    <View
      style={{
        flexDirection: 'row',
        marginTop: 0,
        borderWidth: 1,
        borderRadius: 0.5
      }}>
      <Image
        style={{
          width: 100,
          height: 100
        }}
        resizeMode={'cover'}
        source={{
          uri: strArtistThumb
        }} />
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}>
          {strArtist}</Text>
        {intFormedYear ? <Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold'
            }}>Ano de formação:</Text> {intFormedYear}</Text> : null}
        {strArtistStripped ? <Text>{strArtistStripped}</Text> : null}
        {strArtistAlternate ? <Text>{strArtistAlternate}</Text> : null}
        {strLabel ? <Text>{strLabel}</Text> : null}
        {idLabel ? <Text>{idLabel}</Text> : null}
        <Text><Text
          style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}>
          Estilo musical:</Text> {strStyle}</Text>
        <Text><Text
          style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}>Genero: </Text>{strGenre}</Text>
      </View>
    </View>


    {/* <Text>{intBornYear}</Text>
    <Text>{intDiedYear}</Text>
    <Text>{strDisbanded}</Text> */}




    {/* <Text>{strMood}</Text> */}
    <View style={{
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 0.5,
      marginTop: 10
    }}>
      {strArtistClearart &&
        <Image
          style={{
            width: 150 / 2,
            height: 150 / 2
          }}
          source={{
            uri: strArtistClearart
          }}
        />}
      <View
        style={{
          borderWidth: 1,
          borderRadius: 0.5
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
          Links</Text>
        {strWebsite ? <Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Website:</Text> {strWebsite}</Text> : <View />}
        {strFacebook ? <Text><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Facebook:</Text> {strFacebook}</Text> : <View />}
        {strTwitter ? <Text><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Twitter:</Text> {strTwitter}</Text> : <View />}
      </View>
    </View>
    {/* <Text>{strBiographyEN}</Text> */}

    {strBiographyPT &&
      <Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20
          }}>
          Biografia:
          </Text>
        {strBiographyPT}</Text>
    }
    {strArtistWideThumb &&
      <Image
        style={{
          width: 100 * 3,
          height: 50 * 3,
          alignSelf: 'center'
        }}
        source={{
          uri: strArtistWideThumb
        }} />}
    {strArtistBanner ?
      <Image
        style={{
          width: '100%',
          height: 100
        }}
        resizeMode={'cover'}
        source={{
          uri: strArtistBanner
        }} /> : <View />}
    <Text><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Genero: </Text>{strGender}</Text>
    <Text><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Quantidade de membros:</Text> {intMembers}</Text>
    <Text><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Localizado em:</Text> {strCountry} - {strCountryCode} </Text>


    <Image resizeMode={'cover'} style={{ width: '100%', height: 100 }} source={{ uri: strArtistLogo }} />

    {/* <Text>{strArtistThumb}</Text> */}
    {/* <Text>{strArtistLogo}</Text>
    <Text>{strArtistClearart}</Text>
    <Text>{strArtistWideThumb}</Text>
    <Text>{strArtistFanart}</Text>
    <Text>{strArtistFanart2}</Text>
    <Text>{strArtistFanart3}</Text> */}
    {/* <Text>{strArtistBanner}</Text> */}
    {/* <Text>{strMusicBrainzID}</Text> */}
    {strLastFMChart &&
      <Text
        onPress={_ => Linking.openURL(strLastFMChart)}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}>
          Radio:</Text> {strLastFMChart}</Text>}
    {/* <Text>{intCharted}</Text>
    <Text>{strLocked}</Text> */}

  </View>
})

const App = () => {
  let [responses, setResponse] = useState([])
  const pesquisa = async (pes) => {
    let response = await (await fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=' + pes)).json();

    if (response)
      setResponse(response.artists)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ backgroundColor: 'white', padding: 10 }}
        placeholder={'Digite o nome do artista ou banda'}
        onChangeText={e => pesquisa(e)}
      />

      <FlatList
        style={{ flex: 1 }}
        keyExtractor={(item) => item.idArtist}
        ListEmptyComponent={() =>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                alignSelf: 'center'
              }}>
              Não foram encontrados resultados
              </Text>
          </View>
        }
        renderItem={({ item }) => <ListItem {...item} />}
        data={responses}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },

});

export default App;
