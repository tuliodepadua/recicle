export default function Footer() {
  return (
    <>
      <footer className='bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  alt='Universidade Federal de Pernambuco'
                  src='https://tuliodepadua.github.io/recicle/images/logo_ufrpe.png'
                  className='h-12'
                />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4 text-cyan-600'>
                  <p>
                    <a
                      href='https://wa.me/5581997123051?text=Contato%20através%20do%20projeto%20de%20física'
                      target='blank'
                    >
                      Autor: Túlio de Pádua Vieira da Silva
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
