import React from "react";

// Imports
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//Styles
const mySuperStyles = {
  margin: "2rem",
};

//create your first component
const Home = () => {
  return (
    <>
      <>
        <div>
          <Navbar title={"Sueños & Sabores"} />
          <Jumbotron
            titleJum={"Historia de la Cafetería"}
            description={
              "En el encantador país de Costa Rica, se encuentra una cafetería única y acogedora fundada por cuatro hermanas apasionadas por el café: Karol, Andrea, Karla y Karen. Estas hermanas, con su amor compartido por los aromas exquisitos y los sabores cautivadores, decidieron hacer realidad su sueño de crear un espacio donde las personas pudieran disfrutar de una experiencia de café excepcional..."
            }
            buttonLabel={"Leer más"}
          />
        </div>
        <div style={mySuperStyles} class="row">
          <Card
            imageUrl={
              "https://cdn.pixabay.com/photo/2019/07/28/04/56/sweets-4367937_1280.jpg"
            }
            title={"Queque de Chocolate"}
            description={
              "Una imagen deliciosa que muestra un esponjoso queque de chocolate, cubierto con un glaseado brillante y decorado con virutas de chocolate. Un placer irresistible para los amantes del chocolate."
            }
            buttonLabel={"Añadir a la mesa"}
          />
          <Card
            imageUrl={
              "https://static.vecteezy.com/system/resources/previews/003/057/630/non_2x/delicious-savory-pastry-food-for-breakfast-free-photo.jpg"
            }
            title={"Pastelito de Frambuesa"}
            description={
              "Exquisito pastel con capas de bizcocho suave y esponjoso, generosamente relleno de una irresistible y dulce compota de frambuesas. Un festín de sabores y colores para disfrutar."
            }
            buttonLabel={"Añadir a la mesa"}
          />
          <Card
            imageUrl={
              "https://cdn.pixabay.com/photo/2019/03/24/14/25/croissants-4077817_1280.jpg"
            }
            title={"Croissant Relleno"}
            description={
              "Croissant recién horneado, delicadamente relleno de cremosa y dulce crema pastelera, acompañado de jugosas y frescas fresas. Una combinación perfecta que te hará desear cada bocado."
            }
            buttonLabel={"Añadir a la mesa"}
          />
          <Card
            imageUrl={
              "https://cdn.pixabay.com/photo/2016/11/29/11/38/cake-1869227_1280.jpg"
            }
            title={"Cheesecake de canela"}
            description={
              "Cheesecake de canela con una base crujiente de galletas y un suave relleno de queso crema con un toque de deliciosa canela espolvoreada por encima. Un postre perfecto para deleitar tus sentidos."
            }
            buttonLabel={"Añadir a la mesa"}
          />
        </div>
      </>
      <Footer copyRights={"Copyright © Valeria Salas Website 2023"}></Footer>
    </>
  );
};

export default Home;
