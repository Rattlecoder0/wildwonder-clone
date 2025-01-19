import { CommonModule, NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  showVP: boolean = true;
  showFlavor: boolean = false;
  showGifts: boolean = false;
  dropdowntoggle: boolean = false;
  currentDDC: string = '';
  selectedFlavorId: number | null = 10;
  selectedPriceBox: string = 'one-time';
  timePeroidOption: string = '4weeks';
  flavors = [
    { id: 1, bgColor: 'orange', imageUrl: '../assets/wildwonderpics/bananapost.png' },
    { id: 2, bgColor: 'rgb(255, 85, 235)', imageUrl: '../assets/wildwonderpics/rasperry.png' },
    { id: 3, bgColor: 'rgb(255, 150, 21)', imageUrl: '../assets/wildwonderpics/stawberry.png' },
    { id: 4, bgColor: 'rgb(255, 0, 144)', imageUrl: '../assets/wildwonderpics/guava.png' },
    { id: 5, bgColor: 'rgb(255, 246, 66)', imageUrl: '../assets/wildwonderpics/pineapple.png' },
    { id: 6, bgColor: 'rgb(180, 225, 75)', imageUrl: '../assets/wildwonderpics/mango.png' },
    { id: 7, bgColor: 'rgba(249, 179, 50, 0.861)', imageUrl: '../assets/wildwonderpics/peach.png' },
    { id: 8, bgColor: 'rgb(127, 255, 217)', imageUrl: '../assets/wildwonderpics/sharktankbundel.png' },
    { id: 9, bgColor: 'yellow', imageUrl: '../assets/wildwonderpics/varietypack.png' },
    { id: 10, bgColor: 'pink', imageUrl: '../assets/wildwonderpics/botanical.png' }
  ];

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }

  selectPriceBox(box: string): void {
    this.selectedPriceBox = box;
  }

  selectFlavor(id: number) {
    this.selectedFlavorId = id;
  }

  ddshow(type: string) {
    this.currentDDC = type
    this.dropdowntoggle = !this.dropdowntoggle
    const getarrow = document.getElementById(type == 'shop' ? 'arrow' : 'arrow2')
    if (this.dropdowntoggle) {
      if (getarrow) {
        getarrow.style.rotate = '180deg'
      }
    }
    else {
      if (getarrow) {
        getarrow.style.rotate = '0deg'
      }
    }
  }

  updateImges(str: string) {
    if (str === 'vp') {
      this.showVP = true
      this.showFlavor = false
      this.showGifts = false
    }
    else if (str === 'f') {
      this.showFlavor = true
      this.showVP = false
      this.showGifts = false
    }
    else {
      this.showGifts = true
      this.showFlavor = false
      this.showVP = false
    }
  }

  sideBar(action: string) {
    const sidebar = document.getElementById('side-bar') as HTMLDivElement
    const getList = document.getElementById('sblist') as HTMLDivElement

    if (action == 'open') {
      sidebar.style.left = '0'
    }
    else {
      sidebar.style.left = '-550px'
    }
  }

}
