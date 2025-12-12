import { Routes } from '@angular/router';
import { Main } from './main/main';
import { News } from './news/news';
import { Useraccount } from './useraccount/useraccount';
import { Login } from './login/login';
import { Signin } from './signin/signin';
import { Film } from './film/film';
import { Acteur } from './acteur/acteur';
import { Infosfilm } from './infosfilm/infosfilm';


export const routes: Routes = [{path:'main',component:Main},{path:'genre',component:Film},{path:'news',component:News}
    ,{path:'useraccount',component:Useraccount},{path:'login',component:Login},{path:'signin',component:Signin},{path:'acteur',component:Acteur},{ path: 'infosfilm', component: Infosfilm }

];
