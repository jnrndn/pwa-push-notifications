import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminMessageComponent } from './admin-message/admin-message.component';
import { FormComponent } from './form/form.component';
import { AuthGuardService } from './service/auth-guard.service';
import { MessageComponent } from './admin-message/message/message.component';

const appRoutes: Routes = [
  { path: 'home', component: FormComponent, data: { title: 'PWA Rocks!' } },
  {
    path: 'admin',
    component: AdminMessageComponent,
    canActivate: [ AuthGuardService ],
    children: [
      {
        path: '',
        children: [
          { path: 'message', component: MessageComponent },
        ],
      },
    ],
  },
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
