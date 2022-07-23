import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

enum SortTypes {
  NAME_AZ = 'name_az',
  NAME_ZA = 'name_za',
  YEAR_ASC = 'year_asc',
  YEAR_DESC = 'year_desc'
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  formGroup: FormGroup;

  sortValues: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.prepareSortValues();
    this.createForm();
    this.fillForm();
    this.subscribeToFormChanges();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      search: [null],
      sort: [null]
    });
  }

  private fillForm(): void {
    this.formGroup.controls.sort.setValue(''); // TODO get from storage or query params
  }

  private prepareSortValues() {
    this.sortValues = [
      {
        name: 'Name (A - Z)',
        value: SortTypes.NAME_AZ
      },
      {
        name: 'Name (Z - A)',
        value: SortTypes.NAME_ZA
      },
      {
        name: 'Year (ASC)',
        value: SortTypes.YEAR_ASC
      },
      {
        name: 'Year (DESC)',
        value: SortTypes.YEAR_DESC
      },
    ]
  }

  private subscribeToFormChanges() {
    this.formGroup.valueChanges.subscribe(v => {
      console.log(v);

      // где-то в сортировке
      switch (v.sort) {
        case SortTypes.NAME_AZ:
          console.log('yeah');
          break;
        default:
          console.log('nope');
      }
    })
  }
}
