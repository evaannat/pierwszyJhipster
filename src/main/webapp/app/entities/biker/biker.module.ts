import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PierwszyJhipsterSharedModule } from 'app/shared/shared.module';
import { BikerComponent } from './biker.component';
import { BikerDetailComponent } from './biker-detail.component';
import { BikerUpdateComponent } from './biker-update.component';
import { BikerDeleteDialogComponent } from './biker-delete-dialog.component';
import { bikerRoute } from './biker.route';

@NgModule({
  imports: [PierwszyJhipsterSharedModule, RouterModule.forChild(bikerRoute)],
  declarations: [BikerComponent, BikerDetailComponent, BikerUpdateComponent, BikerDeleteDialogComponent],
  entryComponents: [BikerDeleteDialogComponent]
})
export class PierwszyJhipsterBikerModule {}
