import {Component, OnInit, signal} from '@angular/core';
import {
  CollectionReference,
  DocumentData,
} from '@firebase/firestore';
import {from, Observable, of} from "rxjs";
import {
  Firestore,
  collectionData,
  collection,
  docData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
  }



}
