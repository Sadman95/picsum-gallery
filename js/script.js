const loadPhotos = async () =>{
    await fetch (`https://picsum.photos/v2/list`)
    .then (response => response.json())
    .then(data => getPhotos(data))
}
loadPhotos();

const photosContainer = document.getElementById('container');
const getPhotos = photos =>{
    // console.log(countries);
    const singlePhoto = photos.map(photo => displayHtml(photo));
    photosContainer.innerHTML = singlePhoto.join(' ');
    // console.log(singlePhoto[0]);
}

const displayHtml = photo =>{
    const {download_url, author} = photo;
    return `
        <div class="single-photo">
            <img class="thumbnail" src="${download_url}">
            <h3>Author: ${author}</h3>
        </div>
    `
}