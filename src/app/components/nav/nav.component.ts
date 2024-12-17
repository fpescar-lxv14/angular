import { Component } from "@angular/core";
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";
import { Link } from "../../models/link.interface";
import { LinksComponent } from "../links/links.component";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [
        LinksComponent,
        RouterLinkWithHref,
    ],
})
export class NavComponent{
    menu:Link[] = [
        { link: '/', text: "Pagina Principal"},
        { link: '/contact', text: "Contactanos"},
        { link: '/signin', text: "Registrate"},
        { link: '/login', text: "Iniciar Sesion"}
    ]
}