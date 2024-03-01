import Button from '../input/Button'
import Logout from '../input/Logout'

function Sidebar () {
  return (
    <>
      <header className='flex flex-col justify-between h-screen pb-6 w-72 bg-white rounded-section m-4 shadow-md'>
        <div className='flex flex-col items-center gap-3'>
          <img className='size-20' src='./ecosort_logo.svg' alt='' />
          <span className='w-2/4 h-[1px] bg-gradient-to-r from-transparent via-black' />
          <nav className='flex flex-col items-center gap-6 w-full'>
            <Button src='./icons/icon_home'>
              Tableau de Bord
            </Button>
            <Button src='./icons/icon_classement'>
              Classement
            </Button>
            <Button src='./icons/icon_parametre'>
              Paramètres
            </Button>
          </nav>
        </div>

        {/* Déconnexion */}
        <div className='flex flex-row gap-3 px-10'>
          <Logout />
        </div>
      </header>
    </>
  )
}

export default Sidebar
