import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminMessageComponent } from './admin-message/admin-message.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: 'home', component: FormComponent },
  { path: 'admin', component: AdminMessageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
