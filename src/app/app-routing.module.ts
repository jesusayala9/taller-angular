import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './componente/hero/hero.component';
import { AddHeroComponent } from './componente/add-hero/add-hero.component';
import { NotFoundComponent } from './componente/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'add-hero',
    component: AddHeroComponent,
  },
  {
    path: '',
    component: NotFoundComponent,
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
