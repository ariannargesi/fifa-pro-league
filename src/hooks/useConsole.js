import { useSelector } from 'react-redux'

const useConsole = () => {
    return useSelector(state => state.userConsole)
}

export default useConsole 
