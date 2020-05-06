import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './multiple-image-upload.componet.html',
  styleUrls: ['./multiple-image-upload.component.css']
})
export class MultiImageUpload {

 
  imageDeleteFrom: FormGroup;
  imageurls =[];
  base64String: string;

  name: string;
  imagePath: string;
 
  removeImageEdit(i, imagepath) {
    this.imageDeleteFrom.value.id = i;
    this.imageDeleteFrom.value.ImagePath = imagepath;
  }


  removeImage(i) {
    this.imageurls.splice(i, 1);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.imageurls.push({ base64String: event.target.result, });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}

