import React, { FC, useEffect, useRef, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { EnumStatus, ITimerOptions } from './timerInterface'
import CircleTimer from './circle-timer/CircleTimer'
import SessionIndicator from './session-indicator/SessionIndicator'
import Actions from './actions/Actions'


const Timer: FC = () => {

    const [timer, setTimer] = useState<ITimerOptions>({
        isPlaying: false,
        status: EnumStatus.WORK,
        currentSession: 1,
        currentBreak: 0,
        key: 0
    })


    return (
        <View className='justify-center flex-1'>
            <View className='self-center items-center'>

                <CircleTimer setTimer={setTimer} timer={timer} />

                <SessionIndicator currentSession={timer.currentSession}
                    currentBreak={timer.currentBreak} />

            </View>

            <Actions setTimer={setTimer} timer={timer} />

        </View>
    )
}

export default Timer