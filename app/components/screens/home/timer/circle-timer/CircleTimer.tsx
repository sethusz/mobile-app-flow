import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { EnumStatus, ITimerOptions, ITimerProps } from '../timerInterface'
import ConfettiCannon from 'react-native-confetti-cannon'
import { breakDuration, flowDuration, sessionCount } from '../timer.constants'
import { Entypo } from '@expo/vector-icons'
import TimerInfo from './TimerInfo'
import { useEffectTimer } from './useEffectTimer'

const CircleTimer: FC<ITimerProps> = (
    { timer: {
        key,
        isPlaying,
        currentSession,
        status
    }, setTimer }
) => {

    const ConfettiRef = useRef<ConfettiCannon>(null)

    useEffectTimer({ setTimer, ConfettiRef, currentSession, status })

    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={isPlaying}
            duration={status === EnumStatus.REST ? breakDuration : flowDuration}
            colors={['#3A3570', '#664FF3']}
            colorsTime={[status === EnumStatus.REST ? breakDuration : flowDuration, 0]}
            trailColor='#2F2F4C'

            onComplete={() => {
                setTimer((prev) => ({
                    ...prev,

                    status: currentSession % 2 === 0
                        ? EnumStatus.REST
                        : prev.status,

                    currentBreak: currentSession % 2 === 0
                        ? prev.currentBreak + 1
                        : prev.currentBreak,

                    currentSession: currentSession % 2
                        ? prev.currentSession + 1
                        : prev.currentSession,

                    isPlaying: false, key: prev.key + 1
                }));


                if (status === EnumStatus.REST) {
                    setTimer(prev => ({
                        ...prev,
                        status: EnumStatus.WORK,
                        key: prev.currentSession + 1
                    }))
                }
            }}

            size={300}
            strokeWidth={15}
        >

            {({ remainingTime }) =>
                <TimerInfo
                    remainingTime={remainingTime}
                    ConfettiRef={ConfettiRef}
                    setTimer={setTimer}
                    status={status} />
            }

        </CountdownCircleTimer>
    )
}

export default CircleTimer