import { createGlobalStyle } from "styled-components";

const Dark = {
    BgPrimary: "#202020",
    BgSecondary: "#151517",
    TextPrimary: "#ffffff",
    TextSecondary: "#d75500",
    TextSecondaryMinor: "rgba(215, 85, 0, 0.5)",
};

const Light = {
    BgPrimary: "#ffffff",
    BgSecondary: "#e3e3e3",
    TextPrimary: "#09090f",
    TextSecondary: "#d75500",
};


const Themes = {
    dark: Dark,
    light: Light,
};

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 0.7em;
        background-color: ${({theme}) => theme.BgPrimary}; 
    }

    html{
        scroll-behavior: smooth;
    }
    
    
}
`
export default Themes;