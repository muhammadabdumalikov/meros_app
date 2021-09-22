import React from "react";
import { SvgXml } from "react-native-svg";

export default function BacketSvg() {
    const Basket = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.09961 19.6251C8.09961 18.7506 8.80849 18.0417 9.68294 18.0417C10.5574 18.0417 11.2663 18.7506 11.2663 19.6251C11.2663 20.4995 10.5574 21.2084 9.68294 21.2084C8.80849 21.2084 8.09961 20.4995 8.09961 19.6251Z" fill="#8D909B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8105 19.6251C16.8105 18.7506 17.5194 18.0417 18.3939 18.0417C19.2683 18.0417 19.9772 18.7506 19.9772 19.6251C19.9772 20.4995 19.2683 21.2084 18.3939 21.2084C17.5194 21.2084 16.8105 20.4995 16.8105 19.6251Z" fill="#8D909B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55957 3.79167C2.55957 3.35444 2.91401 3 3.35124 3H6.5179C6.89523 3 7.22012 3.2663 7.29417 3.6363L7.95908 6.95833H20.7679C21.0038 6.95833 21.2275 7.06357 21.3779 7.24535C21.5283 7.42714 21.5897 7.66654 21.5455 7.8983L20.2778 14.5463C20.1692 15.093 19.8717 15.5841 19.4375 15.9337C19.0055 16.2814 18.4654 16.467 17.9111 16.4583H10.2297C9.67536 16.467 9.13531 16.2814 8.70328 15.9337C8.26926 15.5843 7.9719 15.0934 7.8632 14.547C7.86316 14.5468 7.86325 14.5472 7.8632 14.547L6.54069 7.93937C6.53533 7.91751 6.53087 7.8953 6.52736 7.87277L5.86899 4.58333H3.35124C2.91401 4.58333 2.55957 4.22889 2.55957 3.79167ZM8.27598 8.54166L9.41607 14.2378C9.45226 14.4201 9.5514 14.5838 9.69614 14.7003C9.84087 14.8168 10.022 14.8787 10.2077 14.8751L10.2229 14.875H17.9179L17.9331 14.8751C18.1188 14.8787 18.2999 14.8168 18.4447 14.7003C18.5887 14.5843 18.6876 14.4216 18.7242 14.2404L19.811 8.54166H8.27598Z" fill="#8D909B"/>
    </svg>`
    
    const BacketSvg = () => <SvgXml xml={Basket} width={24} height={24} color="orange"/>;

    return <BacketSvg/>
}