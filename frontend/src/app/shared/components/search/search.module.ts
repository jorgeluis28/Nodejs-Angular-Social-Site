import { NgModule } from '@angular/core';
import { SearchComponent } from './item-search/search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessSearchComponent } from './business-search/business-search.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        PerfectScrollbarModule
    ],
    declarations: [SearchComponent, UserSearchComponent, BusinessSearchComponent],
    exports: [SearchComponent, UserSearchComponent, BusinessSearchComponent]
})
export class SearchModule {

}
