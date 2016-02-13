import {bootstrap}         from 'angular2/platform/browser';

// Add all operators to Observable
import 'rxjs/Rx';

// import {WikiComponent}        from './wiki/wiki.component';
// import {WikiSmartComponent} from './wiki/wiki-smart.component';
// import {TohComponent}         from './toh/toh.component';

// bootstrap(WikiComponent);
// bootstrap(WikiSmartComponent);
// bootstrap(TohComponent);

import {GetSampleComponent} from './get-sample/get-sample.component';
bootstrap(GetSampleComponent);

import {JsonpSampleComponent} from './jsonp-sample/jsonp-sample.component';
bootstrap(JsonpSampleComponent);

import {JquerySampleComponent} from './jquery-sample/jquery-sample.component';
// bootstrap(JquerySampleComponent);

import {PostSampleComponent} from './post-sample/post-sample.component';
bootstrap(PostSampleComponent);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
