import { FC } from 'react'
import { Text, View } from 'react-native'
import { sessionCount } from '../timer.constants'
import cn from 'clsx'
import { AntDesign } from '@expo/vector-icons'
import { ITimerOptions } from '../timerInterface'
import Line from './Line'
import BreakPoint from './BreakPoint'
import WorkPoint from './WorkPoint'

interface ISessionIndicator extends Pick<ITimerOptions, 'currentBreak' |
    'currentSession'> {
    currentSession: number
    currentBreak: number
}

const SessionIndicator: FC<ISessionIndicator> = ({ currentSession, currentBreak }) => {

    const isSmallIndicator = sessionCount > 7


    return (
        <View className='mt-14 flex-row items-center justify-center'>
            {Array.from(Array(sessionCount)).map((_, index) => (

                <View className='flex-row items-center relative'
                    key={`point ${index}`}>

                    <WorkPoint
                        index={index}
                        currentSession={currentSession}
                        isSmallIndicator={isSmallIndicator} />

                    <BreakPoint
                        isSmallIndicator={isSmallIndicator}
                        index={index}
                        currentBreak={currentBreak} />

                    <Line
                        index={index}
                        currentSession={currentSession}
                        isSmallIndicator={isSmallIndicator} />
                </View>
            ))}

        </View>
    )
}

export default SessionIndicator