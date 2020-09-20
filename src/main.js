const listRepos = async (username) => {
  console.log(username);
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owners&sort=updated`
  )
    .then((res) => res.json())
    .catch((error) => console.error());
  console.log(repos);
  const markup = repos.map(
    (repo) => `
      <li>
        <a href="${repo.html_url}">${repo.name}</a>
        (* ${repo.stargazers_count})
      </li>
    `
  );

  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `<ul>${markup}</ul>`;
};

listRepos("jlengstorf");
