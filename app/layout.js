import '@styles/global.css';
import Nav from '@components/Nav';
import Providers from '@components/Providers';
export const metadata = {
  title: 'Tips For Techies',
  description: 'An application that enables techies to post various tips on programming and hacking',
}
 
const RootLayout = ({ children })=> {
 return (
    <html lang="en">
      <body>
      <Providers>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Providers>
      </body>

    </html>
  )
}

export default RootLayout;