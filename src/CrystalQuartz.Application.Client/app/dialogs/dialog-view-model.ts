﻿import { DataState } from '../global/data-state';

export interface IDialogViewModel<TResult> {
    accepted: js.IEvent<TResult>;
    canceled: js.IEvent<any>;

    cancel();
}

export class DialogViewModel<TResult> implements IDialogViewModel<TResult> {
    accepted = new js.Event<any>();
    canceled = new js.Event<any>();
    state = new js.ObservableValue<DataState>();

    constructor() {
        this.state.setValue('unknown');
    }

    cancel() {
        this.canceled.trigger({});
    }
}