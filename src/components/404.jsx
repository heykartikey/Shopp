import { Link } from 'react-router-dom'
import src from './../assets/404.png'


export default function FourZeroFour() {
    return <div className='notfound'>
        <img src={src} alt="404" />
        <div className='link'><Link to='/'>Homepage</Link></div>
    </div>
}
