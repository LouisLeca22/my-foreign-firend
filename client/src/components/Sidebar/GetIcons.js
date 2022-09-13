import React from "react";
import FR from "../../icons/fr.svg"
import ES from "../../icons/es.svg"
import IT from "../../icons/it.svg"
import DE from "../../icons/de.svg"
import BR from "../../icons/br.svg"
import JP from "../../icons/jp.svg"
import language from "../../icons/language.svg"


export default function GetIcons({ type }) {
    let icon;
    switch (type) {
        case "Français":
            icon = FR
            break;
        case "Espagnol":
            icon = ES
            break;
        case "Portugais":
            icon = BR
            break;
        case "Italien":
            icon = IT
            break;
        case "Allemand":
            icon = DE
            break;
        case "Japonais":
            icon = JP
            break;
        default: 
            icon = language
    }

    return <img src={icon} alt="flag" />
}