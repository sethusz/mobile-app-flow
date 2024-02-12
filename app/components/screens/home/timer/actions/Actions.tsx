import React, { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { ITimerProps } from '../timerInterface'
import Arrow from './Arrow'
import PlayButton from './PlayButton'

const Actions: FC<ITimerProps> = ({ setTimer, timer:
    { currentSession, isPlaying }
}) => {
    return (
        <View className='flex-row items-center justify-center mt-14'>

            <Arrow direction='left' setTimer={setTimer} currentSession={currentSession} />


           <PlayButton setTimer={setTimer} isPlaying={isPlaying} />

            <Arrow direction='right' setTimer={setTimer} currentSession={currentSession} />


        </View>
    )
}

export default Actions