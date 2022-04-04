const input = document.querySelector('#input');
const form = document.querySelector('.input-box');
const profilArea = document.querySelector('.profil-area')

const APIURL = 'https://api.github.com/users/';

async function getUser(user){
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();

    createUserCard(respData);
}

function createUserCard(user){

    profilArea.innerHTML = `
        <div class="avatar">
            <img height="150" src="${user.avatar_url}" alt="">
        </div>

        <div class="desription-area">
            <div class="info">
                <h2 class="name">${user.name}</h2> 
            </div>
            <div class="description">
                 ${user.bio}
            </div>
            
            <div class="social">
                <div class="follower-area social-box">
                    <div class="follower">Followers</div>
                    <span id="followers">${user.followers}</span>
                </div>
                <div class="following-area social-box">
                    <div class="following">Following</div>
                    <span id="following">${user.following}</span>
                </div>
                <div class="repo-area social-box">
                    <div class="repo">Repository</div>
                    <span id="repository">${user.public_repos}</span>
                </div>
            </div>
        </div>
    `
}

form.addEventListener('submit', (e) =>{

    const user = input.value;

    if(user){
        getUser(user);

        input.value = '';
    }

    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', getUser('mucahittasan'));



