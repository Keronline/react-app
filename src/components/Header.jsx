import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";

function Header(props){

    // estado é informação armazenada e no react esta serão imutáveis.
    // getter (consultar) e setter (alterar)
    // A partir do react 16.8 foram implementados os Hoots. po padrão é tudo que começa com use
    // useAlgumaCoisa
    // const [getter, setter] = useState(valorInicial);

    const [company, setCompany] = useState(props.options.empresa || "Não informado");
    const [name, setName] = useState(props.options.name || "Não informado");
    const [site, setSite] = useState(props.options.site || "Não informado");

    useEffect(()=>{

        setCompany(company.toUpperCase());

    },[company]);

    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{props.chocolate}</p>
            <a
            className={props.options.className}
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            >
            {company} - {name}
            </a>
            <button onClick={(e)=>setCompany("Avanade")}>{`Mudando o nome de company:${company}`}
            </button>
      </header>
    );
}

export default Header;