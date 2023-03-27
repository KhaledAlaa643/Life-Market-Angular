import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from 'src/app/Services/gallery.service';

@Component({
  selector: 'app-gallery-management',
  templateUrl: './gallery-management.component.html',
  styleUrls: ['./gallery-management.component.css']
})
export class GalleryManagementComponent implements OnInit{
  received_id!:any
  photos!:any
  message:any=null
  file!:File;
  showForm:boolean=false;
  showTable:boolean=false;
constructor(private galerryserv:GalleryService,
  private router: ActivatedRoute,
  private route: Router){}

  ngOnInit(): void {
    this.received_id = this.router.snapshot.paramMap.get('id')
 this.galerryserv.getGalleryById(this.received_id).subscribe({
  next:(data)=>{
    this.photos=data
    console.log(data)
   if(this.photos['message'])
   {
    this.message=this.photos['message']
    }else{
      this.showTable=true
    }

  }
 })
  }

  imgFile(event:any){
   this.file=event.target.files[0]
  }
  uploadImg(){
    const formData = new FormData();
    formData.append('photo', this.file, this.file.name);
    formData.append('prd_id',this.received_id);
    this.galerryserv.createGallery(formData).subscribe({
      next:(data)=>{

        window.location.reload()
      },
      error:(err)=>{
        console.log(err.error.error)
      }
    })
    this.showForm=false
  }
  addimg(){
    this.showForm=true;
  }
  deleteGallery(id:number){
this.galerryserv.deleteGallery(id).subscribe({
  next:()=>{
    window.location.reload()

  },

})
  }
}
