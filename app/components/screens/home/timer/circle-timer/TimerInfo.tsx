import React, { FC, RefObject, useMemo } from 'react'
import { Pressable, Text, View } from 'react-native'
import { EnumStatus, ITimerOptions, ITimerProps } from '../timerInterface'
import ConfettiCannon from 'react-native-confetti-cannon'
import { flowDuration } from '../timer.constants'
import { Entypo } from '@expo/vector-icons'
import { useTimerTime } from './useTimerTime'


interface ITimerInfo extends Pick<ITimerProps, 'setTimer'>,
    Pick<ITimerOptions, 'status'> {
    remainingTime: number,
    ConfettiRef: RefObject<ConfettiCannon>,

}


const formatTime = (number: number) => number < 10 ? `0${number}` : number


const TimerInfo: FC<ITimerInfo> = ({ remainingTime, ConfettiRef, setTimer, status }) => {

const {seconds, minutes } = useTimerTime(remainingTime, status)

    return (
        <View className='mt-14'>

            <ConfettiCannon
                ref={ConfettiRef}
                autoStart={false}
                count={200}
                origin={{ x: -10, y: 0 }}
            />


            <Text className=' text-white text-6xl font-semibold'>
                {`${formatTime(minutes)}:${formatTime(seconds)}`}
            </Text>

            <Text className='text-center text-white text-2xl mt-0.5'>
                {status}
            </Text>

            <Pressable
                onPress={() => {
                    setTimer(prev => ({
                        ...prev,
                        key: 0,
                        currentBreak: 0,
                        currentSession: 1,
                        isPlaying: false,
                        status: EnumStatus.WORK
                    }))

                }}
                className='opacity-40 self-center mt-5'>
                <Entypo name='ccw' size={34} color="white" />
            </Pressable>

        </View>

    )

}


export default TimerInfo