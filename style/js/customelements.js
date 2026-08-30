function callNav(home, reviews, articles, collection, games)
{
    let homeClass = `<a class="nav-link" href="index.html">home</a>`;
    let reviewClass = `<a class="nav-link" href="reviews.html">reviews</a>`;
    let articlesClass = `<a class="nav-link" href="articles.html">articles</a>`;
    let collectionClass = `<a class="nav-link" href="collection.html">collection</a>`;
    let gamesClass = `<a class="nav-link" href="games.html">games</a>`;

    if (home === true)
    {
        homeClass = `<a class="nav-link active" aria-current="page" href="index.html">home</a>`;
    }

    if (reviews === true)
    {
        reviewClass = `<a class="nav-link active" aria-current="page" href="reviews.html">reviews</a>`;
    }

    if (articles === true)
    {
        articlesClass = `<a class="nav-link active" aria-current="page" href="articles.html">articles</a>`;
    }

    if (collection === true)
    {
        collectionClass = `<a class="nav-link active" aria-current="page" href="collection.html">collection</a>`;
    }

    if (games === true)
    {
        gamesClass = `<a class="nav-link active" aria-current="page" href="games.html">games</a>`;
    }

    document.getElementById("navbar").className = "navbar navbar-expand-md bg-objects mb-2";
    return `
    <div class = "container-fluid">
        <a class = "navbar-brand pinktext bold" href = "index.html">funkirbo talks things</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    ${homeClass}
                </li>
                <li class="nav-item">
                    ${reviewClass}
                </li>
                <li class="nav-item">
                    ${articlesClass}
                </li>
                <li class="nav-item">
                    ${collectionClass}
                </li>
                <li class="nav-item">
                    ${gamesClass}
                </li>
            </ul>
        </div>
    </div>
    `;
}

function callNavOne(home, reviews, articles, collection, games)
{
    let homeClass = `<a class="nav-link" href="../index.html">home</a>`;
    let reviewClass = `<a class="nav-link" href="../reviews.html">reviews</a>`;
    let articlesClass = `<a class="nav-link" href="../articles.html">articles</a>`;
    let collectionClass = `<a class="nav-link" href="../collection.html">collection</a>`;
    let gamesClass = `<a class="nav-link" href="../games.html">games</a>`;

    if (home === true)
    {
        homeClass = `<a class="nav-link active" aria-current="page" href="../index.html">home</a>`;
    }

    if (reviews === true)
    {
        reviewClass = `<a class="nav-link active" aria-current="page" href="../reviews.html">reviews</a>`;
    }

    if (articles === true)
    {
        articlesClass = `<a class="nav-link active" aria-current="page" href="../articles.html">articles</a>`;
    }

    if (collection === true)
    {
        collectionClass = `<a class="nav-link active" aria-current="page" href="../collection.html">collection</a>`;
    }

    if (games === true)
    {
        gamesClass = `<a class="nav-link active" aria-current="page" href="../games.html">games</a>`;
    }

    document.getElementById("navbar").className = "navbar navbar-expand-md bg-objects mb-2";
    return `
    <div class = "container-fluid">
        <a class = "navbar-brand pinktext bold" href = "../index.html">funkirbo talks things</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    ${homeClass}
                </li>
                <li class="nav-item">
                    ${reviewClass}
                </li>
                <li class="nav-item">
                    ${articlesClass}
                </li>
                <li class="nav-item">
                    ${collectionClass}
                </li>
                <li class="nav-item">
                    ${gamesClass}
                </li>
            </ul>
        </div>
    </div>
    `;
}

function callBody()
{
    document.getElementById("body").className = "container bg-objects";
}

function callFooter()
{
    document.getElementById("footer").className = "container-fluid bg-objects border-top border-2 border-dark-subtle";
    return `
        <div class = "row p-1 justify-content-between text-white text-opacity-25">
            <p class = "p-1 mt-2">funkirbo talks things - developed with <a href = "https://getbootstrap.com/" class = "link-underline link-underline-opacity-0" style = "color: #aa7ba4;opacity: .5;">Bootstrap 5</a>, some icons from <a href = "https://icons8.com/" class = "link-underline link-underline-opacity-0" style = "color: #aa7ba4;opacity: .5;">Icons8</a></p>
        </div>
    `
}

async function featuredPost(link, title, desc, image)
{
    document.getElementById("featuredLink").setAttribute("href", link);
    document.getElementById("featuredTitle").innerHTML = title;
    document.getElementById("featuredDesc").innerHTML = desc;
    document.getElementById("featuredImage").src = image;
}

async function recentPostOne(link, title, date)
{
    document.getElementById("rp1link").setAttribute("href", link);
    document.getElementById("rp1title").innerHTML = title;
    document.getElementById("rp1date").innerHTML = date;
}

async function recentPostTwo(link, title, date)
{
    document.getElementById("rp2link").setAttribute("href", link);
    document.getElementById("rp2title").innerHTML = title;
    document.getElementById("rp2date").innerHTML = date;
}

async function recentPostThree(link, title, date)
{
    document.getElementById("rp3link").setAttribute("href", link);
    document.getElementById("rp3title").innerHTML = title;
    document.getElementById("rp3date").innerHTML = date;
}

function reviewListElement(title, notes, console, date, score, link)
{
    let comment = "";
    let bcol = "border-dark-subtle";
    switch(score)
    {
        case "1":
            comment = "Incomprehensible";
            break;
        case "2":
            comment = "Horrible";
            break;
        case "3":
            comment = "Bad";
            break;
        case "4":
            comment = "Mediocre";
            break;
        case "5":
            comment = "Average";
            break;
        case "6":
            comment = "Okay";
            break;
        case "7":
            comment = "Good";
            break;
        case "8":
            comment = "Great";
            break;
        case "9":
            comment = "Fantastic";
            break;
        case "10":
            comment = "All-Timer";
            break;
        default:
            comment = "n.a";
            break;
    }

    document.getElementById("reviewlist").innerHTML+= (`
            <li class = "list-group-item bg-objects">
                <div class = "row p-1 m-1 ps-3 text-white justify-content-between border-2 border-start ${bcol} align-items-center">
                    <div class = "col-md-10 p-1 text-start">
                        <a href = "${link}" class = "link-underline link-underline-opacity-0 pinktext">
                            <span style = "font-size: 1.25rem;">${title} </span><span class = "text-white" style = "font-size: .8rem;">${notes}</span><br>
                        </a>
                        <span>${console}</span><br>
                        <span>${date}</span>
                    </div>
                    <div class = "col-md-2 p-1 text-center">
                        <h2>${score}</h2>
                        <span>${comment}</span>
                    </div>
                </div>
            </li>
    `);
}

// Individual Reviews/Articles

function generateReviewPage(title, notes, description, date, image, score, developer, publisher, year, console, backloggd, ib, content)
{
    let comment = "";
    switch(score)
    {
        case 1:
            comment = "Incomprehensible";
            break;
        case 2:
            comment = "Horrible";
            break;
        case 3:
            comment = "Bad";
            break;
        case 4:
            comment = "Mediocre";
            break;
        case 5:
            comment = "Average";
            break;
        case 6:
            comment = "Okay";
            break;
        case 7:
            comment = "Good";
            break;
        case 8:
            comment = "Great";
            break;
        case 9:
            comment = "Fantastic";
            break;
        case 10:
            comment = "All-Timer";
            break;
        default:
            comment = "n.a";
            break;
    }

    document.getElementById("body").innerHTML += (`
        <div>
            <div class = "row whitetext justify-content-evenly">
                <div class = "mb-1 p-3 text-start text-white">
                    <h1 class = "p-1 m-1 pb-2 border-bottom border-2 border-dark-subtle" id = "title">${title} <span style = "font-size: 1rem;">${notes}</h1>
                    <p class = "p-1 m-1 mb-0 pb-0" id = "desc">${description}</p>
                    <p class = "p-1 m-1 pt-0 italic" id = "date">${date}</p>
                    <div class = "row m-1 p-1 mt-2">
                        <div class = "col-md-12 text-center">
                            <img src = "${image}" style = "width: 90%; height: auto; border: 3px solid #fabaf1;" id="image">
                        </div>
                    </div>
                </div>
            </div>
            <div class = "row gx-2 p-1 m-2 mb-4 text-white justify-content-evenly">
                <div class = "col-md-8 mb-4 p-3 text-start border border-2 border-dark-subtle bg-nav">
                    <h3 class = "p-1 m-1 pb-2 border-bottom border-dark-subtle border-2">review</h3>
                    <div class = "p-1 m-1" id = "reviewcontent">
                        ${content}
                    </div>
                </div>
                <div class = "col-md-4 mb-1 p-3 pt-0 text-start">
                    <div class = "ft-border p-2 pb-1 mt-0 m-2 text-center">
                        <h1 id = "score">${score}</h1>
                        <p id = "scoretext">${comment}</p>
                    </div>
                    <h3 class = "text-start p-1 m-1 pb-2 border-bottom border-dark-subtle border-2">notes</h3>
                    <p class = "text-white border-start border-2 border-dark-subtle m-3 mb-2 p-2">developed by <span class = "bold" id = "developer">${developer}</span></p>
                    <p class = "text-white border-start border-2 border-dark-subtle m-3 mb-2 p-2">published by <span class = "bold" id = "publisher">${publisher}</span></p>
                    <p class = "text-white border-start border-2 border-dark-subtle m-3 mb-2 p-2">released in <span class = "bold" id = "year">${year}</span></p>
                    <p class = "text-white border-start border-2 border-dark-subtle m-3 mb-2 p-2">played on <span class = "bold" id = "console">${console}</span></p>
                    <p class = "text-white border-start border-2 border-dark-subtle m-3 mb-2 p-2">crossposted to <a class = "link-underline link-underline-opacity-0 pinktext bold" href = "${backloggd}" id = "backloggd">backloggd</a></p>
                    <p class = "text-white border-start border-2 border-dark-subtle m-3 mb-2 p-2">crossposted to <a class = "link-underline link-underline-opacity-0 pinktext bold" href = "${ib}" id = "infinitebacklog">infinite backlog</a></p>
                </div>
            </div>
        </div>
    `);
}