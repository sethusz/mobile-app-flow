import { RefObject, useEffect } from 'react'
import { sessionCount } from '../timer.constants'
import { EnumStatus, ITimerOptions, ITimerProps } from '../timerInterface'
import ConfettiCannon from 'react-native-confetti-cannon'

interface IUseEffectTimer
	extends Pick<ITimerProps, 'setTimer'>,
		Pick<ITimerOptions, 'currentSession' | 'status'> {
	ConfettiRef: RefObject<ConfettiCannon>
}

export const useEffectTimer = ({
	setTimer,
	currentSession,
	ConfettiRef,
	status
}: IUseEffectTimer) => {
	useEffect(() => {
		if (currentSession === sessionCount + 1) {
			ConfettiRef.current?.start()
			setTimer(prev => ({ ...prev, status: EnumStatus.COMPLETED }))
		}
        
	}, [currentSession])

	
}
