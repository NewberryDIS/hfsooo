import logo from './logo.svg';
import './App.css';
import {Triangle} from './components/bg'
import styled from 'styled-components'
import img from './images/terence-sm.jpg'

//outerest
const Hork = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
bottom: 0;
left: 0;
right: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)
  ), url(${img});
  filter:  drop-shadow(0 0 3vw rgba(0, 0, 0, 0.5));

  background-size: cover;
  background-position: center;
`

const Main = styled.div`
  position: fixed;
  top: 20vmin;
  bottom: 20vmin;
  left: 20vmin;
  right: 20vmin;
  color: black;
  box-shadow: rgba(37, 37, 37, 0.5) 0px 0px 10px inset;
  background: rgba(255,255,255,0.75);
  // background: rgba(0,0,0,0.5);
  padding: 5vmin;
  overflow: auto;
  // backdrop-filter: blur(10px);
`


function App() {
  return <Hork>
    <Main>
      <h1>
        Humanism For Sale: Making and Marketing Schoolbooks in Italy, 1450-1650 
      </h1>
      <p>
        by Paul F. Gehl, Curator Emeritus, The Newberry Library.
      </p>
      <h3>Humanism For Sale is undergoing renovations occasioned by a server migration. We will be back in commission soon.</h3>
      <div className="textwall">
            <h3>Welcome</h3>
            <p>
              Welcome to Humanism For Sale, which concerns the ways books were written, designed, printed, and marketed for schools in Renaissance Italy. Originally (in 2008) an interactive scholarly “book,” it has since 2018 become an artifact of online publication in the first decade of the millennium, as well as a repository for the research of its author and the many comments the book received over the space of a decade.
            </p>
            <p>
              Humanism For Sale was an experiment. It used the Word Press blog platform and the Comment Press theme to create a dialog based on a scholarly monograph about the creation and sale of school books in Europe between 1450 and 1650. It was intended to be useful to many folks: Scholarly specialists in printing history and history of education.  Generalist readers and scholars in other fields who want to know more about the Renaissance and the way people were educated then. Designers, marketing professionals, educators and others interested in the history of visual communication
            </p>
            <p>
              In fact, many people in all these groups eventually consulted and remarked the contents and you can find their comments in the fields that run parallel to the main text.
            </p>
            <h3>Summary</h3>
            <p>
              Humanism For Sale addresses some basic questions about the history of the Italian Renaissance as seen from the bottom up, that is from the schoolrooms where those who created Renaissance culture were educated. Humanism developed as an educational program for the Italian elites. It was based on the revival of good Latin grammar, style, and literature. Soon after printing was invented (around 1450), humanists adopted the new technology as the best way to teach, to present scholarly research, and to publicize their program. It is hard to hear the voices of students in the surviving textbooks (some are very rare) and archival sources, but we can hear the teachers speak at length and sometimes movingly about their work.
            </p>
            <p>
              Humanists and their publishers took all kinds of earlier book forms, experimented with how to use them in the classroom, and eventually created the modern textbook. They tried various innovations with the design of the page, with types, and with color. They also experimented with different kinds of print marketing, finding readers for their new textbooks and competing with each other for an international market. For this they worked on title page layout and advertising prose, on prefaces, and on other kinds of teaching aids.
            <p>
            </p>
              Educational conservatism was strong, however, and many medieval school texts continued to be used, especially with younger students. Traditional texts like these were often presented by printers in very traditional designs that mimicked medieval school books. Conservatism also meant that many textbook markets remained local or regional, with opportunities for a prominent teacher to author and sell books to several generations of his own students. Starting in the 1570s, the Jesuits reformed education at all levels and created their own textbooks for use in schools throughout Europe and even in Asia, Africa, and the Americas. These were the first truly international textbooks.
            <p>
            </p>
              As humanism declined across the following centuries, it became a minority point of view, but other thinkers and educators used the design and marketing innovations of Latin school teachers. Schoolbooks in the vernacular languages became common only in the 1530s, at a time when many skills once reserved to the Latin-educated were popularized for others. Elementary math books were the earliest to appear in Italian, already before 1500. Reading and writing books appeared first in the 1510s and 1520s. How-to books and emblem books also became popular in the early sixteenth century. Music and geography had specialized textbooks and separate markets.
            </p>
          </div> </Main>
  </Hork>
}

export default App;
