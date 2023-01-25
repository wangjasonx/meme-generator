import TrollFace from '../images/troll-face.png'

export default function Header() {
    return (
        <div className="header">
            <img src={TrollFace} alt="troll face" />
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </div>
    )
}