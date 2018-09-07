import Loadable from "react-loadable"
import login from '@/router/login'
import example from '@/router/example'
// import search from './search'

let config = [
    ...(login(Loadable)),
    ...(example(Loadable))
    // ...(search(Loadable))
]

export default config