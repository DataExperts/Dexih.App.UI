import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../+auth/auth.service';
import { DexihHubAuth, CancelToken } from '../../../+auth/auth.models';
import { Location } from '@angular/common';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage';
import { eSharedAccessItems, DexihIssue, eIssueTypeItems, eIssueSeverityItems, eIssueStatusItems, eIssueCategoryItems } from '../../../shared/shared.models';

@Component({

  selector: 'issue-edit-form',
  templateUrl: './issue-edit.component.html'
})
export class IssueEditComponent implements OnInit, OnDestroy {
  @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

  private _subscription: Subscription;
  private _valueChangesSubscription: Subscription;

  action: string;
  pageTitle: string;

  issue: DexihIssue;

  eIssueTypeItems = eIssueTypeItems;
  eIssueSeverityItems = eIssueSeverityItems;
  eIssueStatusItems = eIssueStatusItems;
  eIssueCategoryItems = eIssueCategoryItems;

  SharedAccessItems = eSharedAccessItems.filter(c => c.key > 0);

  generatingKey = false;
  saving = false;
  hasChanged = false;
  showAllErrors = false;

  disable = false;

  mainForm: FormGroup;
  newComment: string;

  isNew = true;

  formErrors = {
    'name': '',
    'description': '',
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 50 characters long.',
      'duplicateHubName': 'Name cannot be the same as an existing hub name.'
    },
    'description': {
      'required': 'Description is required.',
    },
  };

  supportOptions = [
    {name: 'Forums', icon: 'fa fa-smile-o', link: 'https://dexih.mn.co/feed', description: 'Use the community forums for questions and other information hub discussion.'},
    {name: 'Twitter', icon: 'fa fa-twitter', link: 'https://twitter.com/dataexperts', description: 'Send messages to our twitter for quick short queries and comments.'},
    {name: 'YouTube', icon: 'fa fa-youtube', link: 'https://www.youtube.com/channel/UCUQQ_sVuFti-xYvKtfLJNkg', description: 'Refer to our youtube channel for video tutorials.'},
    {name: 'Features / Issues', icon: 'fa fa-github', link: 'https://github.com/DataExperts/Dexih.App.UI', description: 'We are an open source platform.  Raise feature requests and bugs on our github pages.'}
  ];

  private cancelToken = new CancelToken();

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {

    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (this.action === 'new') {
          this.issue = new DexihIssue();
          this.buildForm();
          this.isNew = true;
          this.disable = false;
        } else if (this.action === 'edit') {
          let key = + params['issueKey'];
          this.isNew = false;
          this.authService.getIssue(key, this.cancelToken).then(issue => {
            this.issue = issue;
            this.buildForm();

            if (this.authService.getUser().isAdmin) {
              this.disable = false;
            } else {
              this.disable = true;
            }
          });
        }
      });
    } catch (e) {
      this.dexihMessage.addErrorMessage(e.message);
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    this.cancelToken.cancel();
  }

  save() {
    this.dexihMessage.reset();
    this.saving = true;
    Object.assign(this.issue, this.mainForm.value);
    this.authService.saveIssue(this.issue)
      .then(result => {
        this.saving = false;
        this.dexihMessage.addSuccessMessage('Issue created successfully.');
        this.cancel();
      }).catch(reason => {
        this.dexihMessage.addMessage(reason);
        this.saving = false;
      });
  }

  saveComment() {
    this.dexihMessage.reset();
    this.saving = true;
    this.authService.addIssueComment(this.issue.key, this.newComment)
      .then(result => {
        this.saving = false;
        this.dexihMessage.addSuccessMessage('Issue comment added successfully.');
        this.cancel();
      }).catch(reason => {
        this.dexihMessage.addMessage(reason);
        this.saving = false;
      });
  }

  cancel() {
    this.authService.navigateUp();
  }

  buildForm(): void {
    this.mainForm = this.fb.group({
      'key': [{value: this.issue.key, disabled: this.disable}, []],
      'name': [{value: this.issue.name, disabled: this.disable}, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]
      ],
      'description': [{value: this.issue.description, disabled: this.disable}, [
        Validators.required,
      ] ],
      'type': [{value: this.issue.type, disabled: this.disable}, []],
      'category': [{value: this.issue.category, disabled: this.disable}, []],
      'severity': [{value: this.issue.severity, disabled: this.disable}, []],
      'isPrivate': [{value: this.issue.isPrivate, disabled: this.disable}, []],
      'updateDate': [{value: this.issue.updateDate, disabled: true}, []],
      'userName': [{value: this.issue.userName, disabled: true}, []],
      'issueStatus': [{value: this.issue.issueStatus, disabled: false}, []],
      'gitHubLink': [{value: this.issue.gitHubLink, disabled: false}, []],
      'dexihIssueComments': this.fb.array(this.issue.dexihIssueComments.map(c => {
        return this.fb.group({
          'comment': {value: c.comment, disabled: this.disable},
          'userName': [{value: c.userName, disabled: true}, []],
          'updateDate': {value: c.updateDate, disabled: true}
        });
      }))
    });

    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    this._valueChangesSubscription = this.mainForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now

    this.hasChanged = false;
  }

  onValueChanged(data?: any) {
    if (!this.mainForm) { return; }
    const form = this.mainForm;

    this.hasChanged = true;

    for (const field of Object.keys(this.formErrors)) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (control.dirty || this.showAllErrors) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key of Object.keys(control.errors)) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
