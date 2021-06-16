import logo from './logo.svg';
import './App.css';
import {Triangle} from './components/bg'
import styled from 'styled-components'
import img from './images/terence-sm.jpg'

//outerest
const Hork = styled.div`
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  position: absolute;
  filter:  drop-shadow(0 0 3vw rgba(0, 0, 0, 0.5));
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
`

const TopCorner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: -70vw;
  left: 0;
  height: 100vh;
  color: black;
  background-color: lightblue;
  clip-path: polygon(
    0 0,
    33vmin 0,
    0 20vmin 
  );
  // clip-path: polygon(
  //   66vw 0,
  //   100vw 0,
  //   100vw 20vw
  // );
  .topper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: -70vw;
    left: 0;
    background-color: blue;
    border: 1px solid black;
    clip-path: polygon(
      5vmin 5vmin,
      33vmin 5vmin,
      5vmin 20vmin
    );
    .tipper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: -70vw;
      left: 0;
      background-color: green;
      border: 1px solid black;
      clip-path: polygon(
        6vmin 6vmin,
        33vmin 6vmin,
        6vmin 20vmin
      );
    }
  }
`
const Middle = styled.div``
const BottomCorner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  color: black;
  background-color: lightblue;
  clip-path: polygon(
    100vw 10vmin,
    69vmin 50vmin,
    69vmin 100vh,
    100vw 100vh
  );
  // clip-path: polygon(
  //   0vw 10vmin,
  //   69vmin 50vmin,
  //   69vmin 100vh,
  //   0 100vh
  // );
  padding: 53vmin 5vmin 5vmin 75vmin;
  overflow: auto;
  .textbox {
    max-width: 58vmin;
    overflow: auto;
    position: relative;
  }
`


function App() {
  return <Hork>
    <TopCorner>
       <div className="topper">asdf 
        <div className="tipper">asdf</div>
       </div>
    </TopCorner>
    <Middle />
    <BottomCorner>
      <div className="textbox">
        Hic delectus harum quidem quae quos, iure illo totam. Perspiciatis officiis voluptas nulla pariatur cupiditate voluptatem, dolores, tempore totam itaque perferendis eum! Expedita mollitia beatae minima quae, illo et porro.
    Itaque quos error facilis aliquid magnam eos voluptate, ex, delectus dicta nostrum distinctio doloremque provident rerum temporibus voluptatibus accusantium sapiente ducimus recusandae sequi cum, obcaecati quas. Saepe ex placeat quo!
    Accusamus ipsam, dicta cum asperiores officia quos rerum. Maxime, quisquam libero sint aliquid aspernatur nostrum. Veniam, placeat. Odit adipisci non quaerat, quasi aliquam facere quisquam deleniti cupiditate natus, autem numquam.
    Accusamus perspiciatis perferendis amet eum quaerat, molestias, dolorem nihil, aspernatur id ipsa recusandae quas tempora corrupti nemo. Sunt amet nisi enim illo laboriosam obcaecati atque, sequi excepturi laborum unde. Libero!
    Ad eaque aut earum non aspernatur, accusantium adipisci! Excepturi, minus! Et, nostrum incidunt? Distinctio libero harum ex quia nulla, ullam eligendi nemo neque deserunt vero temporibus dolores deleniti doloribus eaque?
    Accusamus magni quis nesciunt repellat pariatur unde iusto doloribus illo ullam! Sint officiis nisi fuga accusantium officia, harum dolorem tenetur maiores culpa inventore hic, reiciendis beatae ducimus qui, temporibus suscipit!
    Nesciunt eius ut deleniti quibusdam! Fugit vero vitae odio officia sit, consequatur atque tempore expedita maiores aliquid ex qui voluptatem hic quaerat voluptatibus nostrum. Quasi iste provident minima ad ipsam?
    Blanditiis, eaque dicta? Blanditiis at perspiciatis nam distinctio sequi dolores, doloremque eum minus tempore laboriosam nesciunt nemo ab excepturi quidem alias iusto, praesentium, officiis expedita odit vitae temporibus illo. Commodi!
    At libero fuga velit? Dicta voluptatum esse, repudiandae excepturi nemo facilis quasi cumque ipsum cupiditate obcaecati est consequatur eligendi, maiores tempora sint, modi hic incidunt quidem. Hic necessitatibus officia libero.
    Reprehenderit enim ex ipsa cumque, libero deleniti ducimus nihil expedita, fuga ab possimus labore iste mollitia placeat necessitatibus consequuntur eius quas error sed impedit quisquam nesciunt. Rerum in odio neque.
    Vitae a molestiae error perspiciatis nulla ab ducimus distinctio soluta dignissimos aliquam, eligendi magni quasi rem officiis quisquam, modi iure culpa optio doloremque, iste numquam? Cupiditate, fugit quasi! Possimus, quae?
    Aperiam, nesciunt! Dolorum veniam magnam, provident inventore ipsam id porro vitae autem nesciunt cupiditate, voluptatum et corporis, perferendis omnis illum sed architecto doloribus corrupti quas accusantium ullam tempore soluta? Accusamus?
    Ducimus eveniet consequatur earum non itaque perferendis rem! Reprehenderit optio, architecto adipisci harum facilis est eveniet necessitatibus quibusdam provident dolorem culpa eius sapiente aliquam dolores sequi alias maiores fuga dignissimos?
    Voluptatibus, reiciendis fugit quis consectetur voluptatem minima laborum hic. Perferendis earum nam adipisci corporis inventore nobis deleniti repellendus praesentium in reiciendis quam suscipit cum perspiciatis nemo, sapiente debitis beatae illo?
    Recusandae, optio laboriosam facilis odio blanditiis commodi corporis sit reprehenderit voluptas nulla facere libero porro aliquid? Facilis sequi, nisi rerum nostrum repellat porro in veritatis delectus laudantium omnis repudiandae aperiam!
    Cumque eius debitis eum distinctio illum cum suscipit eveniet, maxime odio! Magni, reprehenderit! Et, tenetur maxime! Quis quo minima iste. Quas deserunt fugiat illo unde quo a ratione, cupiditate possimus.
    Sequi perferendis rem velit, odit quod sunt minus quia ex veritatis ipsam asperiores ducimus ut dolorem culpa optio. Assumenda dolorum eveniet commodi voluptate provident? Nobis ullam maiores voluptatum dolorum voluptatibus!
    Quos ipsam, unde ad optio veniam aspernatur! Ex iure sed delectus, inventore fugiat possimus, recusandae reprehenderit ipsa tenetur quidem iste maxime adipisci cupiditate nostrum nulla vel magnam at hic veniam?
    
    Odit eius aliquid nihil repellat libero corporis minus ipsum. Vero ducimus dolores voluptate eos nesciunt animi, dolor nulla, voluptatibus unde minima voluptatum cumque nemo illo dicta ea repellat accusamus beatae.
    Blanditiis, quo! Dolore qui dolor provident porro, architecto rem voluptatem facere eligendi adipisci quos id sed dolorem fugit accusantium quidem nobis sequi vel rerum eaque! Atque rerum cumque assumenda possimus!
    Neque eveniet doloremque consequatur natus dignissimos, excepturi unde delectus cupiditate sed a, ducimus atque voluptatum deserunt quis beatae molestiae obcaecati reiciendis mollitia ut? Unde, doloribus voluptas? Quis aliquam molestias sapiente.
    Maiores, quos! Id similique iste atque eos ex, aperiam veritatis. Nobis eaque perspiciatis itaque, exercitationem neque laboriosam atque nulla excepturi nam hic at incidunt tempore voluptates debitis est maiores dolorem?
    </div>
    </BottomCorner>
  </Hork>
}

export default App;
