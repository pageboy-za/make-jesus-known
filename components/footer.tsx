import Container from './structural/container'
import Menu from './structural/menu'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-darkBG border-t border-copper-500">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center justify-center">
          <Image src='/CCC_Logo_export.png' alt='Calvary Chapel Cambridge logo' width={350} height={66} />
          <h3 className="text-4xl lg:text-[2.5rem] text-copper-500 font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Make Jesus Known
          </h3>
          <div className="flex justify-center items-center lg:pl-4 lg:w-1/2">
            <Menu showHome={true} />
          </div>        
          <div className='flex flex-row items-center justify-center'>          
            <p className="pl-16 font-semibold text-sm mt-4 mb-6 text-copper-500"> © 2023 Calvary Chapel Cambridge. Company Number: 7609516. Charity Number: 1141624.</p>
          </div>  
        </div>
      </Container>
    </footer>
  )
}

export default Footer
