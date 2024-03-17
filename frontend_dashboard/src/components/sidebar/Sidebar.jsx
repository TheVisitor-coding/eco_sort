import { useState } from 'react'
import Button from '../forms/buttons/Button'
import NavButton from '../forms/buttons/NavButton'
import ChoiceAlert from '../alert/ChoiceAlert'

function Sidebar () {
  const [showAlert, setShowAlert] = useState(false)

  const handleLogout = () => {
    setShowAlert(true)
    window.location.href = '/login'
  }

  return (
    <>
      {
      showAlert && <ChoiceAlert onClickBottom={() => setShowAlert(false)} onClickTop={handleLogout} title='Déconnexion' description='Etes-vous sûr de vouloir vous déconnecter ?' />
    }
      <header className='flex flex-col sticky top-0 justify-between h-[69.5rem] pb-6 w-96 bg-white rounded-section mx-4 shadow-md'>
        <div className='flex flex-col items-center gap-3'>
          <img className='size-20' src='/ecosort_logo.svg' alt='' />
          <span className='w-2/4 h-[1px] bg-gradient-to-r from-transparent via-black' />
          <nav className='flex flex-col items-center gap-2 w-full'>
            <NavButton
              sectionTab='/dashboard'
              onClick={() => { window.location.href = '/dashboard' }}
              src='/icons/icon_home'
            >
              Tableau de Bord
            </NavButton>
            <NavButton
              sectionTab='/leaderboard'
              onClick={() => { window.location.href = '/leaderboard' }}
              src='/icons/icon_classement'
            >
              Classement
            </NavButton>
            <NavButton
              sectionTab='/settings'
              onClick={() => { window.location.href = '/settings' }}
              src='/icons/icon_parametre'
            >
              Paramètres
            </NavButton>
          </nav>
        </div>

        {/* Déconnexion */}
        <div className='flex flex-row gap-3 px-10 '>
          <Button onClick={() => setShowAlert(true)} text='Déconnexion' icon='/icons/icon_logout.svg' typo='gothic' fontSize='text-md' />
        </div>
      </header>
    </>
  )
}

export default Sidebar
