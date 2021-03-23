import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(public _fire: AngularFirestore, public route: Router,public afauth: AngularFireAuth) { }



  //get Jobs
  GetJobs() {
    return this._fire.collection('users');
  }
  //get single Job data
  getJobInfo(ref) {
    return this._fire.collection('users').doc(ref).valueChanges();
  }
  //posting a job
  /*postJob(data){
    return this._fire.collection('job').add({
      position: 
    }).then(()=>{
      alert("addded")
    }).catch(()=>{
      alert('something went wrong');
    })
  }*/

}
