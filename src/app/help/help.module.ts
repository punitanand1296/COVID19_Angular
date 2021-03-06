import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HeplfulLinksComponent } from './heplful-links/heplful-links.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [HeplfulLinksComponent, FaqComponent],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
