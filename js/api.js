window.onload = () => {
    console.log('unittest')
}

const frontend_base_url = "http://127.0.0.1:5501"
const backend_base_url = "http://127.0.0.1:8000"

async function getPosts() {
    const response = await fetch(`${backend_base_url}/todolist/`)

    console.log(response)

    if(response.status==200) {
        const response_json = await response.json()
        return response_json
    } else {
        alert("실패")
    }
}

async function createPost() {
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const image = document.getElementById("image").files[0]

    const formdata = new FormData();

    formdata.append('title', title)
    formdata.append('content', content)
    formdata.append('image', image || '')

    let token = localStorage.getItem("access")

    const response = await fetch(`${backend_base_url}/todolist/`, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer ${token}"
        },
        body: formdata
    })

    if(response.status == 200) {
        alert("글 작성 완료")
        window.location.replace(`${frontend_base_url}/`)
    } else {
        alert(response.status)
    }
}