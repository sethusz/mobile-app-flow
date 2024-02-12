import { useMemo } from "react"
import { EnumStatus } from "../timerInterface"
import { flowDuration } from "../timer.constants"

export const useTimerTime = (remainingTime: number, status: EnumStatus) => {
    const duration = useMemo(() => status === EnumStatus.REST
    ? flowDuration
    : remainingTime, [status])

const minutes = useMemo(() => Math.floor(duration / 60), [duration])
const seconds = useMemo(() => duration % 60, [duration])


return {minutes, seconds}
}