import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='foodDownload' id='foodDownload'>
    <p>For Better Experience Download <br/>Tomato App</p>
    <div className='foodDownload-platform'>
        <img src={assets.play_store}/>
        <img src={assets.app_store}/>
    </div>
    </div>
  )
}

export default AppDownload
