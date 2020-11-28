import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ServicesProvider } from './services/services.provider';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ],
  providers: [
    ServicesProvider
  ]
})
export class CoreModule { }
