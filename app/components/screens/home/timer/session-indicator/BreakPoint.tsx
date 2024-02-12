import { FC } from 'react'
import { Text, View } from 'react-native'
import cn from 'clsx'
import { AntDesign } from '@expo/vector-icons'
import { sessionCount } from '../timer.constants'
import { IBreakPoint } from './session-indicator.interface'



const BreakPoint: FC<IBreakPoint> = ({ index, currentBreak, isSmallIndicator }) => {
    return (
        (index + 1) % 2 === 0 && index + 1 !== sessionCount ? (
            <View className={cn(
                'absolute z-30 -top-4',
                isSmallIndicator ? 'left-[17px]' : 'left-[25px]')}>

                <AntDesign
                    name='rest'
                    size={isSmallIndicator ? 16 : 18}
                    color={
                        index / 2 < currentBreak
                            ? '#523FC0'
                            : '#3C3C5D'}
                    className='absolute z-10' />

            </View>
        ) : null
    )
}

export default BreakPoint