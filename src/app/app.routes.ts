import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemFormComponent } from './item/item-form/item-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'item-list', component: ItemListComponent},
    {path: 'new-item', component: ItemFormComponent}
];
