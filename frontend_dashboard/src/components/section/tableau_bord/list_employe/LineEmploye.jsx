import { useState } from 'react'
import ChoiceAlert from '../../../alert/ChoiceAlert'
import { toast } from 'react-toastify'

function LineEmploye ({ src, name }) {
  const [showAlert, setShowAlert] = useState(false)
  const [showModify, setShowModify] = useState(false)

  const modifyEmploye = () => {
    setShowModify(!showModify)
    if (showModify) {
      toast.success('Employé modifié avec succès', { position: 'bottom-right' })
    }
  }

  return (
    <>
      {
      showAlert && <ChoiceAlert onClickBottom={() => setShowAlert(false)} onClickTop={() => setShowAlert(false)} title='Supprimer ?' description='Etes vous sur de vouloir supprimer cet employé ?' />
    }
      <div className='flex flex-col w-full border-b-[1px] pb-4 gap-6'>
        <div className='flex flex-row justify-between w-full items-center'>
          <div className='flex flex-row gap-5 items-center'>
            <img src={src} alt='avatar' />
            <p className='font-gothic text-sm'>{name}</p>
          </div>
          <div className='flex flex-row gap-4'>
            <button onClick={() => setShowAlert(true)} className='px-4 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-green-primary to-yellow'>
              <img className='size-4' src='/icons/icon_delete.png' alt='icon_delete' />
            </button>
            <button onClick={modifyEmploye} className='px-4 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-green-primary to-yellow'>
              <img className='size-4' src={showModify ? '/icons/icon_validate.svg' : '/icons/icon_modify.png'} alt='icon_modify' />
            </button>
          </div>
        </div>
        <div className={`${showModify ? 'flex' : 'hidden'} flex-col gap-4 *:font-gothic *:text-sm`}>
          <p>Adresse Mail : <input value='employe@email.fr' /></p>
          <p>Code Postal :  <input value='XXXXX' /></p>
        </div>
      </div>

    </>
  )
}

export default LineEmploye
