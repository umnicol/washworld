import '<washworld>/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../../store'
import CarWashTimer from './start'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      {/* <CarWashTimer ProductId="BV99123" LocationId="1023" /> */}
    </Provider>
  )
}
