import { AppConstats } from '@/app.constants'
import { FC } from 'react'
import {ActivityIndicator, Text, View} from 'react-native'

const Loader: FC = () => {
    return (
      <ActivityIndicator color={AppConstats.primary} size="large" />
    )
}

export default Loader