import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import FileContext from './Components/Context.jsx/FileContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <FileContext>
    <App />
    </FileContext>
    </BrowserRouter>
  ,
)
