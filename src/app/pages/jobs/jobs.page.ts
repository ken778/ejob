import { AngularFirestore } from '@angular/fire/firestore';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

   pickedJobs:any;
   Job: any;
  jobs: any;
  Ref: any;
  constructor(public _data: JobService, public _route: ActivatedRoute,private afs:AngularFirestore) { }

  ngOnInit() {
   /*  //get Job id
     this.Ref = this._route.snapshot.paramMap.get('ref');
     console.log('Id:', this.Ref);

      //geting single job info
    this.Job = this._data.getJobInfo(this.Ref).subscribe((i) => {
      this.Job = i;
      console.log(this.Job);
    }); */

    //return Jobs
    this._data
      .GetJobs()
      .snapshotChanges()
      .subscribe((action) => {
        //console.log(action);
        this.jobs = action; 
      });
      console.log('im here')



      //picking jobs
      this._data.PickJobs().snapshotChanges().subscribe(data=>{
        console.log(data)
        this.pickedJobs = data;
      })
  
  }
  //add to bookmark
  addToLater(id){
     this.afs.collection('bookmark').add({
       'jobId':id,
     })
  }

}
