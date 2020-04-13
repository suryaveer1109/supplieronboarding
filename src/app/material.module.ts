
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

const MaterialComponents = [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatSelectModule, MatRadioModule, MatInputModule,MatCardModule,MatTooltipModule,MatSnackBarModule,MatTabsModule,MatListModule];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
  })

export class MaterialModule { }
