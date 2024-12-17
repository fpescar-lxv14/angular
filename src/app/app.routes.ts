import { Routes } from '@angular/router';
import { HomeComponent } from "./routes/home/home.component"
import { ContactComponent } from "./routes/contact/contact.component"
import { SigninComponent } from "./routes/signin/signin.component"
import { LoginComponent } from "./routes/login/login.component"

export const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full"},
    { path: "contact", component: ContactComponent },
    { path: "login", component: LoginComponent },
    { path: "signin", component: SigninComponent },
    { path: "**", redirectTo: "/" },
];
