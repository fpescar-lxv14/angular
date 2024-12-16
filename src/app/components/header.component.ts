import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header>
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
        </header>`,
    styles: `
        h1,p{ margin: 0; }
        header{
            padding: min(240px,20vh) 1rem;
            font-size: min(calc(2vw + .8rem), 4rem);
        }`
})
export class HeaderComponent{
    @Input() title = ""
    @Input() subtitle = ""
}