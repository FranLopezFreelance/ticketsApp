import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren:() => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'tareas',
    loadChildren:() => import('./features/tasks/tasks.module').then((m) => m.TasksModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
