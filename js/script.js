/**
 * Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
    Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
        MILESTONE 1:
            stampare su console le informazioni di nome, ruolo e la stringa della foto
        MILESTONE 2:
            stampare le stesse informazioni su DOM sottoforma di stringhe
        BONUS 1:
            trasformare la stringa foto in una immagine effettiva
        BONUS 2:
            organizzare i singoli membri in card/schede
*/ 

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ]; 

/**
 * MILESTONE 1:
    stampare su console le informazioni di nome, ruolo e la stringa della foto 
 */ 
    // Stampati singolarmente
    for (i = 0; i < team.length; i++){
        console.warn(team[i]);
    }
    // Stampa direttamente l'intero Array [team]
    console.log(team); 

    /**
     * MILESTONE 2:
            stampare le stesse informazioni su DOM sottoforma di stringhe
     */ 
    
    /**
     *  BONUS 1:
            trasformare la stringa foto in una immagine effettiva
     */
    /**
     * BONUS 2:
            organizzare i singoli membri in card/schede
     */
        const content= document.getElementById("card");
                for ( let i = 0 ; i < team.length; i ++){
                    content.innerHTML += ` 
                    <div class="card m-2" style="width: 18rem;">
                        <img src="img/${team[i].image}" class="card-img-top" alt="...">
                            <div class="card-body ">
                                <h5 class="card-title mt-5">${team[i].name}</h5> 
                                <h6 class="card-subtitle mb-2 text-muted">${team[i].role}</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-warning">My Profile</a>
                            </div>
                    </div>`;  
         };
