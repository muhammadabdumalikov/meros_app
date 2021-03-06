import React from "react";
import { SvgXml } from "react-native-svg";

export default function CatalogSvg() {
    const Catalog = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2668 3.66675H18.9817C20.1049 3.66675 21.0161 4.58833 21.0161 5.72523V8.47017C21.0161 9.60621 20.1049 10.5287 18.9817 10.5287H16.2668C15.1427 10.5287 14.2314 9.60621 14.2314 8.47017V5.72523C14.2314 4.58833 15.1427 3.66675 16.2668 3.66675Z" stroke="#8D909B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.42888 3.66675H9.14293C10.267 3.66675 11.1783 4.58833 11.1783 5.72523V8.47017C11.1783 9.60621 10.267 10.5287 9.14293 10.5287H6.42888C5.30477 10.5287 4.39355 9.60621 4.39355 8.47017V5.72523C4.39355 4.58833 5.30477 3.66675 6.42888 3.66675Z" stroke="#8D909B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.42888 13.4714H9.14293C10.267 13.4714 11.1783 14.393 11.1783 15.5308V18.2749C11.1783 19.4118 10.267 20.3333 9.14293 20.3333H6.42888C5.30477 20.3333 4.39355 19.4118 4.39355 18.2749V15.5308C4.39355 14.393 5.30477 13.4714 6.42888 13.4714Z" stroke="#8D909B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2668 13.4714H18.9817C20.1049 13.4714 21.0161 14.393 21.0161 15.5308V18.2749C21.0161 19.4118 20.1049 20.3333 18.9817 20.3333H16.2668C15.1427 20.3333 14.2314 19.4118 14.2314 18.2749V15.5308C14.2314 14.393 15.1427 13.4714 16.2668 13.4714Z" stroke="#8D909B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    
    const CatalogSvg = () => <SvgXml xml={Catalog} width={24} height={24} color="orange"/>;

    return <CatalogSvg/>
}