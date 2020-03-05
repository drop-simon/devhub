import React, { useState } from 'react'
import {
  Animated,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native'

const HERO_IMAGE_HEIGHT = 300

export default function ScrollExample() {
  const deviceWidth = Dimensions.get('screen').width

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://unsplash.it/400/300' }}
        style={{
          width: deviceWidth,
          height: HERO_IMAGE_HEIGHT,
        }}
        resizeMode="cover"
      />
      <Text style={{ padding: 16 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        optio eveniet culpa deleniti quaerat rem, incidunt excepturi impedit
        accusamus dolore iure nihil odit natus perspiciatis laboriosam suscipit
        doloribus facilis ratione ullam consequuntur sequi labore est. Corrupti
        tempora accusantium ratione ipsam beatae ex consectetur! Eius facilis
        voluptatum deleniti laboriosam laborum est ullam recusandae assumenda,
        dolores obcaecati ea voluptas officiis nihil aut totam iste alias saepe
        dolorum ipsum nesciunt quisquam? Vitae consequatur similique atque
        labore at, reprehenderit odio voluptatibus beatae maxime iste possimus
        et soluta mollitia enim dolorum! Nemo distinctio molestias, nostrum
        aperiam quisquam asperiores cupiditate ex? Eligendi, facilis. Autem
        porro quae dolorem maiores. Accusamus, officiis atque eveniet impedit
        blanditiis praesentium corrupti sequi quos nulla inventore quisquam rem
        veniam, officia excepturi voluptate ratione quas. Eius aspernatur
        laudantium obcaecati eum ut ullam aut aliquid. Deserunt iste facere
        earum nam quibusdam consequuntur veniam. Ab, reprehenderit repellendus
        necessitatibus explicabo hic libero illum quis. Officiis quis maiores
        rerum necessitatibus ea itaque maxime dicta, distinctio a, cupiditate
        incidunt facere temporibus corrupti. Eaque magni nemo, repudiandae
        voluptatum minus temporibus eum commodi, facere minima qui corrupti
        veniam sint sit quaerat harum impedit reprehenderit nisi non tenetur?
        Soluta quae quaerat, quis pariatur sapiente quas id obcaecati porro
        molestias veritatis placeat fugiat dolor ipsum recusandae asperiores
        ullam voluptas eligendi veniam deserunt? Illo eaque ea ab tempore neque.
        Magnam, placeat, debitis odio error praesentium quam, aliquid qui
        pariatur ex dolorum voluptate! Ratione amet ipsa blanditiis esse
        exercitationem iste deserunt, iure natus aperiam voluptate atque quia
        quo ea quibusdam laboriosam animi perferendis alias? Dolor accusantium
        eum, recusandae, omnis saepe, eveniet veritatis voluptatum pariatur
        ullam consequatur odit? Natus enim minus repellendus, labore laborum,
        esse voluptate earum accusantium dolor tempora culpa iusto aliquid.
        Consectetur praesentium quia dolore autem veniam officia laboriosam id,
        illum, tempora deleniti est non impedit nostrum sequi delectus? Magnam
        molestias eius hic quos fugiat cum, aperiam reprehenderit, totam eveniet
        temporibus impedit provident dignissimos voluptatibus illo blanditiis
        dolore libero asperiores aliquam adipisci id esse, unde harum soluta
        commodi! A corporis fugiat voluptatum nisi sapiente saepe labore amet
        sit! Reprehenderit, nulla. Ut, deserunt. Fugiat autem sit tempore
        deserunt distinctio placeat consequuntur doloribus explicabo quod ullam
        laborum, est tenetur facere accusantium in sapiente veniam mollitia
        consectetur suscipit minima? Odit ipsam voluptates non ratione atque
        mollitia dignissimos alias, dolorem adipisci commodi similique
        praesentium voluptatum nesciunt voluptatem ipsa delectus illo,
        accusantium doloremque dolorum quae itaque impedit repellat? Obcaecati,
        aliquid. Mollitia neque adipisci voluptates dolorem recusandae,
        blanditiis explicabo aspernatur sunt, tenetur officia fugit omnis
        repellat, quasi reprehenderit? Error veniam praesentium dolor saepe.
        Laudantium, beatae! Nulla qui sapiente, quos dolorum aut, excepturi
        corporis esse, necessitatibus debitis repellat ad inventore magnam
        tenetur illo dicta impedit et voluptate modi ipsum nihil eum animi enim
        eligendi? Tempore veniam cum sit dolores explicabo aspernatur
        consequatur dolorum officiis assumenda quidem et deleniti laborum at,
        eligendi necessitatibus illum rem aliquam asperiores praesentium aut
        labore. Tempore, dolorem. Voluptates dolorum reiciendis ut culpa quasi
        earum molestias perspiciatis quod quibusdam ipsam! Laboriosam, enim!
        Mollitia nostrum consectetur consequuntur iste atque expedita aspernatur
        quibusdam tempore, ex adipisci dignissimos! Saepe pariatur eveniet
        nostrum nulla nesciunt, dignissimos facere eligendi asperiores eos neque
        voluptatibus tempora, incidunt perferendis numquam sapiente ducimus at
        quos. Officia perferendis corporis atque excepturi sunt reiciendis.
        Dolorum blanditiis quia doloribus tenetur unde, magnam doloremque
        accusantium et! Nobis nihil optio blanditiis ipsam velit est pariatur,
        odio consectetur officiis quia autem culpa nisi. Molestiae dolore
        ratione obcaecati, cupiditate nisi eaque aliquam exercitationem
        repellendus voluptatem harum voluptas quaerat, eligendi debitis beatae
        asperiores, blanditiis reprehenderit iusto itaque neque officia sunt
        atque animi aspernatur cumque! Officia, cum? Quibusdam vitae architecto
        eligendi a quis hic distinctio nostrum assumenda, deleniti commodi
        ipsum, cumque tenetur. Amet quisquam unde quis magni voluptatum
        veritatis inventore quasi dignissimos illo ducimus corrupti architecto
        nihil distinctio vel nostrum deserunt nam iste, rerum pariatur possimus
        voluptatem nesciunt. Earum quos, ab explicabo quaerat officiis
        cupiditate deleniti, nobis, ipsum eligendi quod veritatis vero fuga
        vitae! Iure, commodi. Libero fugit possimus quo labore. Dolor, ducimus
        neque. Error reiciendis minima nesciunt accusantium voluptate quae, quis
        assumenda nam ullam. Quod quis placeat expedita illum vero dolorem,
        assumenda consequatur necessitatibus aperiam eius fugiat soluta in nemo,
        accusantium voluptas reiciendis error ipsum, nobis minus sapiente
        commodi. Quidem eius voluptas maiores, aut dignissimos, vitae corrupti
        labore, quo facilis magnam animi quas porro.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
})
