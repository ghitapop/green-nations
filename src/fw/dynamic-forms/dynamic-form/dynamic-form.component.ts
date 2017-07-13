import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FieldDefinition} from "../model/field-definition";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() vm: any;
  @Input() vmDefinition: Array<FieldDefinition>;
  @Input() operation: string;
  @Input() errorMessage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;
  formError: string;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  clearForm() {
    let group = {};
    this.vmCopy = Object.assign({}, this.vm);
    this.vmDefinition.forEach(field => {
      group[field.key] = field.required ?
                  new FormControl(this.vmCopy[field.key], Validators.required) :
                  new FormControl(this.vmCopy[field.key]);
    });
    this.form = new FormGroup(group);
  }

  ngOnInit() {
    this.clearForm();

    this.route.params.subscribe(params => {
        this.operation = params['operation'];
        this.clearForm();
    }, (error) => {
        this.formError = error;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['errorMessage'].currentValue && this.status === 'waiting') {
      this.status = "";
    }
  }

  onBack() {
    this.errorMessage = null;
    this.formError = null;
    this.location.back();
  }

  onCancel() {
    this.onBack();
  }

  onEdit() {
    this.router.navigate(['../', 'edit'], { relativeTo: this.route });
  }

  onSave() {
    this.submitted = true;
    if(this.form.valid) {
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }
  }

  onCreate() {
    this.submitted = true;
    if(this.form.valid) {
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

  onSubmit() {

  }
}
