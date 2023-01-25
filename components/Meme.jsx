import React, {useState, useEffect} from "react"

export default function Meme() {

    const [memeImg, setMemeImg] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getRandomMeme() {
        let randomIndex = Math.floor(Math.random() * allMemes.length)
        let url = allMemes[randomIndex].url

        setMemeImg(prevMemeImg => {
            return {
                ...prevMemeImg,
                randomImage: url
            }
        })
    }

    function handleState(event) {
        const {name, value} = event.target
        setMemeImg(prevMemeImg => {
            return {
                ...prevMemeImg,
                [name]: value
            }
        })
    }

    return (
        <div className="meme">
            <form className="meme-form">
                <input type="text" placeholder="Top text" onChange={handleState} name="topText" value={memeImg.topText}/>
                <input type="text" placeholder="Bottom text" onChange={handleState} name="bottomText" value={memeImg.bottomText}/>
                <button type="button" onClick={getRandomMeme} className="form-button">Get new meme image 🖼</button>
            </form>
            <div className="meme-and-text">
                <img className="meme-image" src={memeImg.randomImage} alt="Random Meme Image" />
                <h2 className="meme--text top">{memeImg.topText}</h2>
                <h2 className="meme--text bottom">{memeImg.bottomText}</h2>
            </div>
        </div>
    )
}