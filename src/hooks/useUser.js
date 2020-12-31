import { useSelector } from 'react-redux'

const useUser = () => {
    return useSelector(state => state.userLoggedIn)
}

export default useUser 
