import { FC } from 'react'
import {Text, View} from 'react-native'
import cn from 'clsx'
import { IPointProps } from './session-indicator.interface'



const WorkPoint: FC<IPointProps> = ({index, currentSession, isSmallIndicator}) => {
    return (
        <View
        className={cn(
            'rounded-full border-[3px]',
            index + 1 === currentSession
                ? 'border-[#483AA9] bg-trasparent'
                : 'bg-[#2C2B3C] border-transparent',
            {
                'bg-primary opacity-70':
                    index + 1 < currentSession
            },

            isSmallIndicator ? 'w-[15px] h-[15px]' : 'w-5 h-5'
        )} />
    )
}

export default WorkPoint