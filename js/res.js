const marvel = {
    render:()=>{
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=edfa58d52245c8d6fa64f0a94f5f88e2&hash=b6e4079cbb1617c89c0a65145d881fd1';
        const container = document.querySelector('#marvel-card');
        let contentHTML = '';
    
        fetch(urlAPI)
            .then(res => res.json())
            .then((json)=>{
                for(const hero of json.data.results){
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                    <div class="card">
                        <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="img-thu">
                        </a>
                        <h3 class="titulo">${hero.name}</h3>
                    </div>`
                }
                container.innerHTML = contentHTML;
                console.log(json);
            }) 
    }
    
    
    };
    
    
    marvel.render();
    
    
    let datos = document.getElementById('marvel-card');
    console.log(datos);