function openContainer(objContainer, imageID){
    let objectContainer = document.getElementById(objContainer);
    let imgContainer = document.getElementById(imageID);

    if(objectContainer.style.height == "30px"){
        objectContainer.style.height = "150px";
        imgContainer.src = 'assets/images/icons/arrow-up.png';
    }else{
        objectContainer.style.height = "30px";
        imgContainer.src = 'assets/images/icons/arrow-down.png';
    };
    
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.audibert.rest/user/1334337207326216322')
        .then(response => response.json())
        .then(data => {
            // Acessa o link da imagem do avatar
            const avatarImageUrl = data.data.profile.avatar_image;
            const subtitleText = data.data.profile.status;

            // Atualiza o src da imagem no perfil
            const profileImage = document.getElementById('profile-img');
            profileImage.src = avatarImageUrl;

            // Atualiza o texto da bio
            const subtitleID = document.getElementById('subtitle');
            subtitleID.innerHTML = '<img src="assets/images/icons/citation.png">' + subtitleText;
        })
        .catch(error => console.log('Erro ao carregar:', error));
});
