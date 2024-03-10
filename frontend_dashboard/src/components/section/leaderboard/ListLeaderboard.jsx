import RankLineEmploye from './RankLineEmploye'

function ListLeaderboard () {
  return (
    <>
      <div className='w-full h-full flex flex-col items-start gap-4'>
        {/* Affichage des lignes de Classement Employés */}
        <RankLineEmploye name='Matteo ROSSI' profil='/persona_women.svg' rank='1' points='800 000' />
      </div>
    </>
  )
}

export default ListLeaderboard
