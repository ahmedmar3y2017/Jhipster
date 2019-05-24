import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyAppSharedLibsModule, MyAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MyAppSharedLibsModule, MyAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MyAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppSharedModule {
  static forRoot() {
    return {
      ngModule: MyAppSharedModule
    };
  }
}
