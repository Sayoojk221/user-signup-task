import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {AuthNavigation} from './Stack'


function Navigator () {
  return (
    <NavigationContainer>
        <AuthNavigation />
    </NavigationContainer>
  )
}



export default Navigator;