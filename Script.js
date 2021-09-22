var form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById("search").value;
  var orgName = search.split(" ").join("");

  fetch("https://api.github.com/users/" + orgName)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);

      document.getElementById("result").innerHTML = `  
      <div class="animate__animated animate__backInUp">    
      <div class="output">
      <div class="card">
          <img src="${data.avatar_url}" alt="user">
          <div class="userinfo">
            <div class="bio_card">
              <h1>Name :- ${data.name}</h1>
              <h2>Username :- ${data.login}</h2>
            </div><p></p>
              
            <div class="bio_card">Bio :- ${data.bio}</div>  <p></p>
            <div class="other_card">
              Followers :- ${data.followers} <p></p>
                Following :- ${data.following} <p></p>
                Public_gists :- ${data.gits} <p></p>
                Public_repos :- ${data.public_repos} <p></p>
            </div>    <p></p>
            <div class="id_card">
              User-id :- ${data.id}
            </div>
                
              </p>
              <a target="_blank" href="${data.html_url}"><button>Visit his github</button></a>
          </div>
      </div>
  </div>
  </div>`;
    });
});
