import { Routes } from '@angular/router';
import { MembersComponent } from './pages/members/members.component';
import { WarLeaguesComponent } from './pages/war-leagues/war-leagues.component';
import { WarsComponent } from './pages/wars/wars.component';
import {PlayerComponent} from '@app/pages/player/player.component';
import {CapitalComponent} from '@app/pages/capital/capital.component';

export const routes: Routes = [
  {
    path: 'miembros',
    component: MembersComponent,
  },
  {
    path: 'ligas',
    component: WarLeaguesComponent,
  },
  {
    path: 'guerras',
    component: WarsComponent,
  },
  {
    path: 'player/:tag',
    component: PlayerComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
];
