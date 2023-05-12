
console.log("unittest")

window.onload = async function loadPosts() {
    posts = await getPosts()
    console.log(posts)

    const post_list = document.getElementById("post-list")

    posts.forEach(post => {
        const newCol = document.createElement("div");
        newCol.setAttribute("class", "col")
        const newCard = document.createElement("div")
        newCard.setAttribute("class", "card")
        newCard.setAttribute("id", post.pk)

        newCol.appendChild(newCard)

        const postImage = document.createElement("img")
        postImage.setAttribute("class", "card-img-top")        
        if (post.image) {
            postImage.setAttribute("src", `${backend_base_url}${post.image}`)
        } else {
            postImage.setAttribute("src", "https://pics.prcm.jp/krsn222/24589095/jpeg/24589095_480x270.jpeg")

        }
        newCard.appendChild(postImage)




        const newCardBody = document.createElement("div")
        newCardBody.setAttribute("class", "card-body")
        newCard.appendChild(newCardBody)

        const newCardTitle = document.createElement("h5")
        newCardTitle.setAttribute("class", "card-title")
        newCardTitle.innerText = post.title
        newCardBody.appendChild(newCardTitle)

        post_list.appendChild(newCol)

    })

    fetch("/front/template/nav.html").then(response => {
        return response.text()
    })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
}


