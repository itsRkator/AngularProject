import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl();
  showState = false;
  showDistrict = false;
  selectedState: string = "";
  newState: string = "";
  newDistrict: string = "";
  selectedDistrict: string = "Jaipur"
  // options: string[] = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhatisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'];
  districtByState = {
    'Andhra Pradesh': ['Anantpur', 'Chittoor', 'East Godavari', 'Guntur'],
    'Arunachal Pradesh': ['Anjaw','Changlang','Dibang Valley','East Kameng'],
    'Assam': ['Baksa','Barpeta','Biswanath','Bongaigaon'],
    'Bihar': ['Araria','Arwal','Aurangabad','Vaishali','West Champaran'],
    'Chhatisgarh': ['Balod','Baloda Bazar','Balrampur','Bemetara','Gariyaband'],
    'Goa': ['North Goa'],
    'Gujarat': ['Ahmedabad','Amreli','Aravalli'],
    'Haryana': ['Ambala','Bhiwani','Charkhi Dadri','Faridabad'],
    'Himachal Pradesh': [],
    'Jharkhand': [],
    'Karnataka': [],
    'Kerala': [],
    'Madhya Pradesh': [],
    'Maharashtra': [],
    'Manipur': [],
    'Meghalaya': [],
    'Mizoram': [],
    'Nagaland': [],
    'Odisha': [],
    'Punjab': ['Amritsar','Bathinda','Ferozepur'],
    'Rajasthan': ["Ajmer",'Alwar','Banswara',"Jaipur", 'Jhunjhunu','Jodhpur'],
    'Sikkim': [],
    'Tamil Nadu': [],
    'Telangana': [],
    'Tripura': [],
    'Uttarakhand': [],
    'Uttar Pradesh': [],
    'West Bengal': []
  };
  districtList: string [] = [];
  states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhatisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'];
  filteredOptions: Observable<string[]>;

  onStateChange(){
    this.districtList = this.districtByState[this.selectedState];
  }
  addState() {
    if (!this.newState) {
      alert("Please Provide State Name.");
      this.showState = false;
      this.newState = "";
      return;
    }
    this.states.push(this.newState);
    this.states.sort();
    this.districtByState[this.newState] = [];
    this.showState = false;
    this.newState = "";
  }
  addDistrict() {
    if (!this.newDistrict) {
      alert("Please Provide District Name.");
      this.showDistrict = false;
      this.newDistrict = "";
      return;
    }
    this.districtByState[this.selectedState].push(this.newDistrict);
    this.districtByState[this.selectedState].sort();
    this.showDistrict = false;
    this.newDistrict = "";
  }
  hideStateField(){
    this.newState = '';
    this.showState = false;
  }
  hideDistrictFied(){
    this.newDistrict = '';
    this.showDistrict = false;
  }
}
