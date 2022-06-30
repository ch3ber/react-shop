import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
// containers
import { Layout } from '../containers/Layout'
import { Login } from '../pages/Login'
import { RecoveryPassword } from '../containers/RecoveryPassword'
import { SendEmail } from '../pages/SendEmail'
import { NewPassword } from '../pages/NewPassword'
import { MyAccount } from '../pages/MyAccount'
import { CreateAccount } from '../pages/CreateAccount'
import { Checkout } from '../pages/Checkout'
import { Orders } from '../pages/Orders'
// styles
import '../styles/global.scss'
// context
import { AppContext } from '../context/AppContext.js'
// hooks
import { useInitialState } from '@hooks/useInitialState'

export const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route
              exact
              path='/recovery-password'
              element={<RecoveryPassword />}
            />
            <Route exact path='/send-email' component={<SendEmail />} />
            <Route exact path='/new-password' component={<NewPassword />} />
            <Route exact path='/account' component={<MyAccount />} />
            <Route exact path='/signup' component={<CreateAccount />} />
            <Route exact path='/checkout' component={<Checkout />} />
            <Route exact path='/orders' component={<Orders />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
