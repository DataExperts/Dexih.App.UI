import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'countdown',
  template: '{{ displayTime }}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements OnDestroy {
  private _time: number;
  private _timing = 1000;
  private _interval;

  @Input() public set end(value: string) {
    let endDate = new Date(value);
    this._time = endDate.getTime();
    this._startTimer();
}

  @Input()
  public set time(value: string | number) {
    this._time = parseInt(value as string, 10);
    this._startTimer();
  }

  @Input()
  public set timing(value: string | number) {
    this._timing = parseInt(value as string, 10);
    this._startTimer();
  }

  public get delta() {
    let date = new Date();
    return Math.max(0, Math.floor((this._time - date.getTime()) / 1000));
  }

  public get displayTime() {
    let days, hours, minutes, seconds, delta = this.delta;

    let time = '';

    days = Math.floor(delta / 86400);
    delta -= days * 86400;
    hours = Math.floor(delta  / 3600) % 24;
    delta -= hours * 3600;
    minutes = Math.floor(delta  / 60) % 60;
    delta -= minutes * 60;
    seconds = delta % 60;

    // create the display string
    time += days > 0 ? days + ' days ' : '';
    time += hours > 0 ? hours + ' hours ' : '';
    time += minutes > 0 && days === 0 ? minutes + ' minutes ' : '';
    time += days === 0 && hours === 0 ? seconds + ' seconds ' : '';

    return time;
  }

  constructor(private _changeDetector: ChangeDetectorRef) { }

  ngOnDestroy() {
    this._stopTimer();
  }

  private _startTimer() {
    if (this.delta <= 0) { return; }
    this._stopTimer();
    this._interval = setInterval(() => {
      this._changeDetector.detectChanges();
      if (this.delta <= 0) { this._stopTimer(); }
    }, this._timing);
  }

  private _stopTimer() {
    clearInterval(this._interval);
    this._interval = undefined;
  }
}
