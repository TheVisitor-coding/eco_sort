import RankLineEmploye from './RankLineEmploye'

function ListLeaderboard () {
  return (
    <>
      <div className='w-full h-full flex flex-col items-start gap-4'>
        {/* Affichage des lignes de Classement Employés */}
        <RankLineEmploye name='Jennifer BONDIL' profil='/avatar3.png' rank='1' points='8500' />
        <RankLineEmploye name='Marjorie DAVID' profil='/avatar2.png' rank='2' points='7050' />
        <RankLineEmploye name='Anaïs AKA' profil='/avatar5.png' rank='3' points='6800' />
        <RankLineEmploye name='Mohamed Larbi EL BAID' profil='/avatar7.png' rank='4' points='6550' />
        <RankLineEmploye name='Matteo ROSSI' profil='/avatar1.png' rank='5' points='6500' />
        <RankLineEmploye name='Ilona BOURSERIE' profil='/avatar6.png' rank='6' points='6000' />
      </div>
    </>
  )
}

export default ListLeaderboard
