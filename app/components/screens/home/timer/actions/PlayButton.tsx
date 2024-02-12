import { FC } from 'react'
import {Pressable, Text, View} from 'react-native'
import { playShadow } from './button-shadow'
import { Foundation } from '@expo/vector-icons'
import cn from 'clsx'
import { ITimerOptions, ITimerProps } from '../timerInterface'

interface IPlayButton extends Omit<ITimerProps, 'timer'>, Pick<ITimerOptions,
    'isPlaying'> {
}


const PlayButton: FC<IPlayButton> = ({isPlaying, setTimer}) => {
    return (
        <Pressable
                onPress={() => setTimer(prev => ({ ...prev, isPlaying: !isPlaying }))}
                className={cn
                    ('mx-7 self-center bg-primary w-[65px] h-[65px] rounded-full items-center justify-center',
                        {
                            'pl-1.5': !isPlaying
                        })}
                style={playShadow}
            >
                <Foundation name={isPlaying ? 'pause' : 'play'} size={44} color="white" />
            </Pressable>
    )
}

export default PlayButton