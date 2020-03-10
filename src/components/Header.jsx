import React from "react";

function Header({titulo}) {

       
        return( // Dentro del return no pueden ir IF

        <h1 className="encabezado"> {titulo}</h1> //Distructuring y quitamos "props"
    )

}

export default Header;