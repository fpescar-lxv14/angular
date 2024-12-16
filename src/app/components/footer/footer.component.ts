import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import socialMediaLinks from "../../models/social.model.json"
import { Link } from "../../models/link.interface";
import { LinksComponent } from "../links/links.component";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [
        CommonModule,
        LinksComponent,
    ]
})
export class FooterComponent {
    copy = new Date().getFullYear() + " Todos los derechos reservados"
    author = "Author"
    social:Link[] = socialMediaLinks
}