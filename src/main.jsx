// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'antd/dist/antd.min.css'
// import 'antd/dist/antd.less'

import App from './App.jsx'
import { ConfigProvider } from 'antd'
import esES from 'antd/lib/locale/es_ES'




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ConfigProvider locale={esES}>
    <App  />
  </ConfigProvider>
  // </React.StrictMode>,

)
