import "./App.css";
import { Comment } from "./components/Comment/Comment";

const comment = [
  {
    date: new Date(1901, 28, 12),
    text: "с. Чиркей Кунгей - Аксуйской волости[К 1] Каракольского уезда Семиреченской области в обеспеченной семье манапа. Отец — Абдырахман[К 2] Балапанов — манап, бий, волостной управитель.",
    author: {
      name: "Жусуп Абдрахманов",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAnCZyS3FlmFeQYX0XZdHezthS968L7-uug&usqp=CAU",
    },
  },
  {
    date: new Date(1910, 25, 10),
    text: "Баткен обл. Лейлек р. с Коросон ",
    author: {
      name: "Исхак Раззаков",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygFpOfkE0e3eVk1Ur2bc5aR4FPvP5sauWqQ&usqp=CAU",
    },
  },
  {
    date: new Date(1928,12,12),
    text: "	Шекер, Таласский район, Киргизская АССР, РСФСР, СССР",
    author: {
      name: "Чынгыз Айтматов",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsUFCuiRdFGrstjffzYm1A5BTXO44iSwwzg&usqp=CAU",
    },
  },
];

function App() {
  return (
    <div className="App">
      <h1>Улуу инсандар:</h1> <hr />
      <br />
      <Comment data={comment} />
    </div>
  );
}

export default App;
