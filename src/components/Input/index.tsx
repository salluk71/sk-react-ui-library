import { Input } from '../../interfaces/Input'

function index({ type }: Input) {
    return (
        <input type={type} />
    )
}

export default index