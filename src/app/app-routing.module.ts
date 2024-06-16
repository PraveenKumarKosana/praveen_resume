import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [  {
  path: 'about',
  component: AboutComponent,
},
{
  path: 'contact',
  component: ContactComponent,
},
{
  path: 'resume',
  component: ResumeComponent,
},
{ path: '', redirectTo: 'about', pathMatch: 'full' },
{ path: '**', redirectTo: 'about' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
