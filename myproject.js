const url="https://api.github.com/users/lanalumi/repos"
const request=fetch(url).then(function(value){
    return value.json()
}).then(function(data){    
    data.forEach(function(repo){
        
        const listItem = document.createElement("li")
        listItem.classList.add("project")
        listItem.innerHTML = `
        <a class="project-link" href="${repo.svn_url}" target="_blank">
            ${repo.name}
            <img src="./assets/external-link.svg">
        </a>
        `
        const projectsContainer = document.querySelector("[data-projects]")
        projectsContainer.appendChild(listItem)
        
    }) 
})
