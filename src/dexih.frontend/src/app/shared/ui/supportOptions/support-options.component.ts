import { Component, Input } from '@angular/core';

@Component({

  selector: 'support-options',
  templateUrl: './support-options.component.html'
})
export class SupportOptionsComponent {
  @Input() isExpanded = false;

  supportOptions = [
    {name: 'Features / Issues', icon: 'fa fa-github', link: 'https://github.com/DataExperts/Dexih.App.UI/issues', description: 'We are an open source platform.  Raise feature requests and bugs on our github pages.'},
    {name: 'Forums', icon: 'fa fa-smile-o', link: 'https://dexih.mn.co/feed', description: 'Use the community forums for questions and other information hub discussion.'},
    {name: 'Twitter', icon: 'fa fa-twitter', link: 'https://twitter.com/dataexperts', description: 'Send messages to our twitter for quick short queries and comments.'},
    {name: 'YouTube', icon: 'fa fa-youtube', link: 'https://www.youtube.com/channel/UCUQQ_sVuFti-xYvKtfLJNkg', description: 'Refer to our youtube channel for video tutorials.'},
  ];


  constructor() {
  }

}
