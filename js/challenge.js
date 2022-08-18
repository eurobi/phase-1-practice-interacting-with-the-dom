const tracker = {}

function incrementCounter(){
    const counter = document.querySelector('#counter')
    let currentCount = parseInt(counter.innerText, 10)
    currentCount += 1
    counter.innerText = currentCount 
}

function decrementCounter(){
    const counter = document.querySelector('#counter')
    let currentCount = parseInt(counter.innerText, 10)
    currentCount -= 1
    counter.innerText = currentCount 
}


function handleLike(){
    const counter = document.querySelector('#counter').innerText
    if(Object.keys(tracker).includes(counter)){
        tracker[counter] +=1
    }else{
        tracker[counter] = 1
    }
    createLikeList(tracker)
    
}

function createLikeList(tracker){
    const likeList = document.querySelector('.likes')
    likeList.innerHTML = ''
    for(const [key, value] of Object.entries(tracker)){
        let s = ""
        if(value > 1){
            s = "s"
        }
        const like = document.createElement('li')
        like.innerText = `${key} has been liked ${value} time${s}.`
        likeList.appendChild(like)
    }

}

function changeButtons(change){
    plus.disabled = change
    minus.disabled = change
    heart.disabled = change
    const commentSubmit = document.querySelector('#submit')
    commentSubmit.disabled = change
}


function handlePause(){
    const pause = document.querySelector('#pause')
    if(pause.innerText === 'pause'){
        clearInterval(interval)
        changeButtons(true)
        pause.innerText = 'resume'
    }else{
        pause.innerText = 'pause'
        changeButtons(false)
        interval = setInterval(incrementCounter, 1000)
    }
}

function handleComment(e){
    e.preventDefault();
    let userComment = comment[0].value
    let commentP = document.createElement('p')
    commentP.innerText = userComment
    const comments = document.querySelector('#list')
    comments.appendChild(commentP)
    comment[0].value = ''
    
}


//start counter on load
let interval = setInterval(incrementCounter, 1000)

//increment counter on plus click
const plus = document.querySelector('#plus')
plus.addEventListener('click', incrementCounter)

//decrement counter on minus click
const minus = document.querySelector('#minus')
minus.addEventListener('click', decrementCounter)

//add like
const heart = document.querySelector('#heart')
heart.addEventListener('click', handleLike)

//pause
const pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click', handlePause)

//comment
const comment = document.querySelector('#comment-form')
comment.addEventListener('submit', handleComment)



