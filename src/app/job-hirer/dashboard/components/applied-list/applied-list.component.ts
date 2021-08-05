import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobpostModel } from 'src/app/job.model';
import { AlumniService } from 'src/app/alumni/alumni.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-applied-list',
  templateUrl: './applied-list.component.html',
  styleUrls: ['./applied-list.component.css']
})
export class AppliedListComponent implements OnInit {
  jobs: JobpostModel[] = [];
  title:String = "Verify Jobs";
  job:any
  showJobs:boolean = false;
  constructor(private router:Router,public _auth:AuthService) {}

  ngOnInit(): void {
    this._auth.Verifyjobs().subscribe((data) =>{
      let length = (Object.keys(data).length);
     if(length != 0){
      this.showJobs=true;
    
      this.jobs = JSON.parse(JSON.stringify(data));
     }
    });
  }
  editjob(job:any)
  {
   // localStorage.setItem("editjobId", job._id.toString());
    this._auth.editjob(job);
    
    
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Done!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['dashboard']);
    
    
   

  }
  deletejob(job:any)
  {
    this._auth.deletejob(job._id)
      .subscribe((data1) => {
        this.jobs = this.jobs.filter(p => p !== job);
      })
    }
    fileName= 'ExcelSheet.xlsx';  

    exportexcel(): void 
        {
           /* table id is passed over here */   
           let element = document.getElementById('excel-table'); 
           const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    
           /* generate workbook and add the worksheet */
           const wb: XLSX.WorkBook = XLSX.utils.book_new();
           XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
           /* save to file */
           XLSX.writeFile(wb, this.fileName);
          
        }

}
