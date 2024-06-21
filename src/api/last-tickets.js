export async function getLastTickets() {
  return await fetch( 'https://students.netoservices.ru/fe-diplom/routes/last' )
  .then( response => response.json())
  .then( data => {
      data.forEach( el => {
          console.log('el', el)
      })
  });
}