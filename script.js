const appearEmojis = [...document.querySelectorAll(".emoji")]

appearEmojis.map(appearEmoji => {
    const emoji = appearEmoji.innerHTML;
    appearEmoji.addEventListener("click", (e) => {
        if(appearEmoji.innerHTML)
            appearEmoji.innerHTML = ""
        else appearEmoji.innerHTML = emoji;
    })
}) 
