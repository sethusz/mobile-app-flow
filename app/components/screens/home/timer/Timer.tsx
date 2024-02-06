import React, { FC, useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Foundation } from '@expo/vector-icons'
import cn from 'clsx'
import { AppConstats } from '@/app.constants'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { EnumStatus } from './timerInterface'


const flowDuration = 3
const sessionCount = 7
const breakDuration = 1

const Timer: FC = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [status, setStatus] = useState<EnumStatus>(EnumStatus.REST)
    const [currentSession, setCurrentSession] = useState(1)
    const [key, setKey] = useState(0)

    useEffect(() => {
        if (isPlaying && status === EnumStatus.REST) {
            setKey(prev => prev + 1)
        }
    }, [isPlaying])

    const isAllSessionCompleted = currentSession === sessionCount

    return (
        <View className='justify-center flex-1'>
            <View className='self-center'>

                <CountdownCircleTimer
                    key={key}
                    isPlaying={isPlaying}
                    duration={flowDuration}
                    colors={['#3A3570', '#664FF3']}
                    colorsTime={[flowDuration, 0]}
                    trailColor='#2F2F4C'
                    onComplete={() => {
                        setIsPlaying(false)
                        setCurrentSession(prev => prev + 1)

                        setStatus(EnumStatus.REST)

                        if(isAllSessionCompleted) {
                            // Animation
                            setStatus(EnumStatus.COMPLETED)
                        }
                    }}
                    size={300}
                    strokeWidth={15}
                    onUpdate={remainingTime => {
                        if (!!remainingTime) setStatus(EnumStatus.WORK)
                    }}
                >
                    {({ remainingTime }) => {

                        let minutes: string | number = Math.floor(remainingTime / 60)
                        let seconds: string | number = remainingTime % 60

                        if (status === EnumStatus.REST) {
                            minutes = Math.floor(flowDuration / 60)
                            seconds = flowDuration % 60
                        }

                            minutes = minutes < 10 ? `0${minutes}` : minutes
                        seconds = seconds < 10 ? `0${seconds}` : seconds

                        return (
                            <View className='mt-5'>

                                <Text className=' text-white text-6xl font-semibold'>
                                    {`${minutes}:${seconds}`}
                                </Text>

                                <Text className='text-center text-white text-2xl mt-0.5'>
                                    {status}
                                </Text>
                            </View>

                        )

                    }}
                </CountdownCircleTimer>

                <View className='mt-14 flex-row items-center justify-center'>
                    {Array.from(Array(sessionCount)).map((_, index) => (

                        <View className='flex-row items-center' key={`point ${index}`}>

                            <View
                                className={cn('w-5 h-5 rounded-full border-[3px]',
                                    index + 1 === currentSession
                                        ? 'w-6 h-[22px] border-[#483AA9] bg-trasparent'
                                        : 'w-5 h-5 border-transparent bg-[#2C2B3C]',
                                    {
                                        'bg-primary opacity-70':
                                            index + 1 < currentSession

                                    },

                                )} />
                            {index + 1 !== sessionCount
                                &&
                                <View className={cn('w-7 h-0.5 bg-[#2C2B3C]', {
                                    'bg-primary opacity-70': index + 2 <= currentSession
                                })} />}

                        </View>
                    ))}

                </View>
            </View>
            <Pressable
                onPress={() => setIsPlaying(!isPlaying)}
                className={cn
                    ('mt-10  self-center bg-primary w-[65px] h-[65px] rounded-full items-center justify-center',
                        {
                            'pl-1.5': !isPlaying
                        })}
                style={{
                    shadowColor: AppConstats.primary,
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 8,
                    elevation: 20
                }}
            >
                <Foundation name={isPlaying ? 'pause' : 'play'} size={44} color="white" />
            </Pressable>
        </View>
    )
}

export default Timer