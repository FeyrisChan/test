let titre = document.getElementById("Titre");
let titre2 = document.getElementById("Titre2");
let adjectif = document.getElementById("Adjectif");
let select = document.getElementById("arr"); 
let select2 = document.getElementById("arr2"); 

let title1 = ["Acolyte","Adhérent","Allié","Ami","Animal","Animal de compagnie",
            "Arrivant","Artisan","Artiste","Autorité","Avant-gardiste","Avare","Avatar",
            "Balayeur","Baroudeur","Bébête","Bigorneau","Boursicoteur","Briseur","Brute",
            "Camarade","Campeur","Cerise","Chaland","Chercheur","Client compulsif","Clown",
            "Collectionneur","Concierge","Connaissance","Consommateur","Contribuable",
            "Convive","Coordinateur","Coqueluche","Danseur","Débrouillard","Décorateur",
            "Décorateur","Designeur","Dico ambulant","Du genre","Ecolo","Editeur","Elu",
            "Empoté","Enthousiaste","Entomologiste","Esprit libre","Être","Etudiant","Excentrique",
            "Fan de bibelots","Fantôme","Fauché","Faucheur de gazon","Fille","Fils","Fleur",
            "Force","Forme de vie","Fossile","Frénésie","Gamin","Garde","Gardien","Génie",
            "Gérant","Grand frère","Grand timide","Grande soeur","Ichtyophile","Îlien",
            "Individu","Influenceur","Insecte","Intellectuel","Je-ne-sais-quoi","Jeune premier",
            "Larve","M. Tout-le-monde","Main verte","Maman","Mamie","Mannequin","Marin d'eau douce",
            "Médiateur","Muscle","Nana","Néophyte","Nettoyeur","Noix de coco","Novice","Nymphe",
            "Oeuf","Oiseau sauvage","Orange","Palourde","Papa","Papy","Paradis","Pêche",
            "Pêcheur à la ligne","Pêcheur à la mouche","Personnalité","Petit frère","Petite soeur",
            "Peureux","Phénomène","Philantrope","Photographe","Pisteur","Plagiste","Pleurnicheur",
            "Poire","Poisson","Poisson tropical","Pomme","Pote","Pro du bronzage","Pro du lance-pierre",
            "Prodige","Producteur","Punk","Récolte","Redécorateur","Relation","Représentant","Résident",
            "Saison","Sauvageon","Sbire","Sensation","Sirène","Solitaire","Spécialiste","Styliste",
            "Surfeur","Talent","Tireur d'élite","Type","Universitaire","Utilisateur","Vérité",
            "Villageois","Virtuose","Voltigeur","Voyageur"];

let title1_mf = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
            1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,
            0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];

let title2 = ["à la limite","à ses heures","à une pièce","accompli","accueillant","actif","agressif",
            "aimable","ambitieux","ancien","anonyme","appliqué","apprenti","aquatique",
            "assoiffé de savoir","athlétique","atmosphérique","attrapé par erreur","au grand coeur",
            "autoproclamé","branché","cabotineur","chahuteur","chanceux","charnu","compétent",
            "connecté","créatif","croquant","crosseur","cupide","dans le vent","de festival",
            "de la bande","de la place","de la ville","de légende","de l'horizon","de l'île déserte",
            "de Nook Inc.","de poche","de serre","de verger","débutant","décontracté","des cours d'eau",
            "des fonds marins","des grandes marées","des tropiques","désordonné","d'étang","déterré",
            "devenu maire","d'extérieur","dilettante","d'intérieur","discret","dissimulé",
            "doué de ses mains","douillet","drôlement calé","du dimanche","du futur","du littoral",
            "du menu fretin","du monde sauvage","du NookPhone","du week-end","économe","en devenir",
            "encore faible","énergique","ensablé","espiègle","et fier de l'être","fait pour durer",
            "fiable","fleur bleue","fougueux","fouineur","frais","froussard","gorgé de soleil",
            "impétueux","incapable de voler","infaillible","informé","inimitable","insouciant",
            "invétéré","invulnérable","itinérant","jovial","joyeux décorateur","jumeau","libre",
            "maître de lui-même","manuel","matérialiste","mercantile","modéré","mordeur","noctambule",
            "omnivore","ordonné","originel","pas lourd","pas mûr","passionné d'Histoire","photogénique",
            "plein d'anecdote","potentiel","précoce","printanier","pro","prometteur","qui vit seul",
            "raffiné","ragoteur","rare","réconfortant","reconnu","recrudescent","relatif",
            "responsable","sans relâche","scientifique","serein","soigneux","spécifique",
            "sur Internet","surchargé","tombé à l'eau","tout juste arrivé","tranchant","tumultueux",
            "versé dans les arts","vide","volant","volontaire"];

let title2_f = ["à la limite","à ses heures","à une pièce","accomplie","accueillante","active","agressive",
            "aimable","ambitieuse","ancienne","anonyme","appliquée","apprentie","aquatique",
            "assoiffée de savoir","athlétique","atmosphérique","attrapée par erreur","au grand coeur",
            "autoproclamée","branchée","cabotineuse","chahuteuse","chanceuse","charnue","compétente",
            "connectée","créative","croquante","crosseur","cupide","dans le vent","de festival",
            "de la bande","de la place","de la ville","de légende","de l'horizon","de l'île déserte",
            "de Nook Inc.","de poche","de serre","de verger","débutante","décontractée","des cours d'eau",
            "des fonds marins","des grandes marées","des tropiques","désordonnée","d'étang","déterrée",
            "devenue maire","d'extérieur","dilettante","d'intérieur","discrète","dissimulée",
            "douée de ses mains","douillette","drôlement calée","du dimanche","du futur","du littoral",
            "du menu fretin","du monde sauvage","du NookPhone","du week-end","économe","en devenir",
            "encore faible","énergique","ensablée","espiègle","et fière de l'être","faite pour durer",
            "fiable","fleur bleue","fougueuse","fouineuse","fraîche","froussarde","gorgée de soleil",
            "impétueuse","incapable de voler","infaillible","informée","inimitable","insouciante",
            "invétérée","invulnérable","itinérante","joviale","joyeuse décoratrice","jumelle","libre",
            "maître d'elle-même","manuelle","matérialiste","mercantile","modérée","mordeur","noctambule",
            "omnivore","ordonnée","originelle","pas lourde","pas mûre","passionnée d'Histoire","photogénique",
            "pleine d'anecdote","potentielle","précoce","printanière","pro","promettrice","qui vit seul",
            "raffinée","ragoteur","rare","réconfortante","reconnue","recrudescente","relative",
            "responsable","sans relâche","scientifique","sereine","soigneuse","spécifique",
            "sur Internet","surchargée","tombée à l'eau","tout juste arrivée","tranchante","tumultueuse",
            "versée dans les arts","vide","volante","volontaire"];

function randomTitle(){
    rn1 = Math.floor(Math.random() * title1.length);
    rn2 = Math.floor(Math.random() * title2.length);
    title = title1[rn1];
    if(title1_mf[rn1] == 1){
        description = title2_f[rn2]
    }
    else{
        description = title2[rn2];
    }
    

    return title + " " + description;

}

function displayTitle(){
    title = randomTitle();
    titre.innerHTML = title;
}

function displayAdjectif(){
    adj = completeTitle();
    adjectif.innerHTML = adj;
}

function displayCompleteAdjectif(){
    titre_ = completeAdjectif();
    Titre2.innerHTML = titre_;
}
  
function displayListTitle() { 
    for (var i = 0; i < title1.length; i++) { 
        var optn = title1[i]; 
        var el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        select.appendChild(el); 
        } 
    }

function displayListAdjective() { 
    for (var i = 0; i < title2.length; i++) { 
        var optn = title2[i]; 
        var el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        select2.appendChild(el); 
        } 
    }

function completeTitle(){
    rn = Math.floor(Math.random() * title2.length);
    title = title2[rn];
    return title
}

function completeAdjectif(){
    rn = Math.floor(Math.random() * title1.length);
    title = title1[rn];
    return title
}


displayListTitle();
displayListAdjective();
console.log(randomTitle());