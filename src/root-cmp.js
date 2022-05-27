import { HashRouter as Router, Route, Routes } from "react-router-dom"

import routes from './routes.js'


import { HomePage } from './pages/home-page'
import { AppHeader } from './cmps/app-header'

export function App() {
  return (
    <section className='app'>
      <Router>
        <AppHeader />
        

        <main>
          <Routes>
            {routes.map(route => <Route key={route.path} exact element={<route.component/>} path={route.path} />)}
          </Routes>
        </main>

      </Router>
    </section>
  )
}


