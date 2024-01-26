import { FC } from 'react'
import { Text, View } from 'react-native'
import { TypeNav } from './menu.interface'
import { menuData } from './menu.data'
import MenuItem from './MenuItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


interface IButtomMenu {
    nav: TypeNav,
    currentRoute?: string
}

const ButtomMenu: FC<IButtomMenu> = (props) => {

    const { bottom } = useSafeAreaInsets()

    return (
        <View
            className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#1E1C2E]'
            style={{
                paddingBottom: bottom + 10,
            }}>
            {menuData.map(item => (
                <MenuItem
                    item={item}
                    key={item.path}
                    {...props}
                />
            ))}
        </View>
    )
}

export default ButtomMenu